""" This module implements methods for reading and writing SBML files.

TODO: Import/export of bounds follows the BiGG model format,
consider changing to the new SBML fbc package.
"""
from core.models import StoichiometricModel, ConstraintBasedModel, GPRConstrainedModel, Metabolite, Reaction, Gene

from libsbml import SBMLReader, SBMLWriter, SBMLDocument 


STOICHIOMETRIC = 'Stoichiometric'
CONSTRAINT_BASED = 'Constraint-based'
GPR_CONSTRAINED = 'GPR-Constrained'

LB_TAG = 'LOWER_BOUND'
UB_TAG = 'UPPER_BOUND'
GPR_TAG = 'GENE_ASSOCIATION:'

DEFAULT_SBML_LEVEL = 2
DEFAULT_SBML_VERSION = 1
DEFAULT_COMPARTMENT_ID = 'default'
DEFAULT_COMPARTMENT_SIZE = 1.0


def load_sbml_model(filename, kind=STOICHIOMETRIC):
    """ Loads a metabolic model from a file.
    
    Arguments:
    filename : String -- SBML file name
    kind : {STOICHIOMETRIC (default), CONSTRAINT_BASED, GPR_CONSTRAINED} -- set to define kind of model to load
    """
    reader = SBMLReader()
    document = reader.readSBML(filename)
    sbml_model = document.getModel()
    
    if sbml_model is None:
        raise IOError('Failed to load model.')
       
    if kind == STOICHIOMETRIC:
        model = _load_stoichiometric_model(sbml_model)
    elif kind == CONSTRAINT_BASED:
        model = _load_constraintbased_model(sbml_model)
    elif kind == GPR_CONSTRAINED:
        model = _load_gprconstrained_model(sbml_model)
    else:
        model = None
    
    return model


def _load_stoichiometric_model(sbml_model):
    model = StoichiometricModel(sbml_model.getId())
    model.add_metabolites(_load_metabolites(sbml_model))
    model.add_reactions(_load_reactions(sbml_model))
    model.add_stoichiometry(_load_stoichiometry(sbml_model))
    return model
    
    
def _load_metabolites(sbml_model):
    return [_load_metabolite(species) for species in sbml_model.getListOfSpecies()]

def _load_metabolite(species):
    return Metabolite(species.getId(), species.getName())

def _load_reactions(sbml_model):
    return [_load_reaction(reaction) for reaction in sbml_model.getListOfReactions()]

def _load_reaction(reaction):
    return Reaction(reaction.getId(), reaction.getName(), reaction.getReversible())

def _load_stoichiometry(model):
    inputs = [(reactant.getSpecies(), reaction.getId(), -reactant.getStoichiometry()) for reaction in model.getListOfReactions()
              for reactant in reaction.getListOfReactants()]
    outputs = [(product.getSpecies(), reaction.getId(), product.getStoichiometry()) for reaction in model.getListOfReactions()
              for product in reaction.getListOfProducts()]
    return inputs + outputs
     
def _load_constraintbased_model(sbml_model):
    model = ConstraintBasedModel(sbml_model.getId())
    model.add_metabolites(_load_metabolites(sbml_model))
    model.add_reactions(_load_reactions(sbml_model))
    model.add_stoichiometry(_load_stoichiometry(sbml_model))
    model.add_bounds(_load_bounds(sbml_model))
    return model

def _load_bounds(sbml_model):
    return [(reaction.getId(), _get_flux_bound(reaction, LB_TAG), _get_flux_bound(reaction, UB_TAG))
            for reaction in sbml_model.getListOfReactions()]

def _get_flux_bound(reaction, tag):
    parameter = reaction.getKineticLaw().getParameter(tag)
    return parameter.getValue() if parameter else None

def _load_gprconstrained_model(sbml_model):
    model = GPRConstrainedModel(sbml_model.getId())
    model.add_metabolites(_load_metabolites(sbml_model))
    model.add_reactions(_load_reactions(sbml_model))
    model.add_stoichiometry(_load_stoichiometry(sbml_model))
    model.add_bounds(_load_bounds(sbml_model))
    genes, rules = _load_gpr(sbml_model)
    model.add_genes(genes)
    model.add_rules(rules)
    return model

def _load_gpr(sbml_model):
    genes = set()
    rules = []
    for reaction in sbml_model.getListOfReactions():
        rule = _extract_rule(reaction)
        new_genes = rule.replace('(', '').replace(')','').replace('and','').replace('or','').split()
        genes = genes | set(new_genes)
        rules.append((reaction.getId(), rule))
    genes = [Gene(gene) for gene in sorted(genes)]
    return genes, rules

def _extract_rule(reaction):
    notes = reaction.getNotesString()
    if GPR_TAG in notes:
        rule = notes.partition(GPR_TAG)[2].partition('<')[0].strip()
    else:
        rule = ''
    return rule

def save_sbml_model(model, filename):
    """ Save a model to an SBML file.
    
    Arguments:
    model : StoichiometricModel (or any subclass) -- the model
    filename : String -- SBML file name
    """

    document = SBMLDocument(DEFAULT_SBML_LEVEL, DEFAULT_SBML_VERSION)
    sbml_model = document.createModel(model.id)
    compartment = sbml_model.createCompartment()
    compartment.setId(DEFAULT_COMPARTMENT_ID)
    compartment.setSize(DEFAULT_COMPARTMENT_SIZE)
    _save_metabolites(model, sbml_model)
    _save_reactions(model, sbml_model)
    _save_stoichiometry(model, sbml_model)
    if isinstance(model, ConstraintBasedModel):
        _save_bounds(model, sbml_model)
    if isinstance(model, GPRConstrainedModel):
        _save_gpr(model, sbml_model)
    writer = SBMLWriter()
    writer.writeSBML(document, filename)

def _save_metabolites(model, sbml_model):
    for metabolite in model.metabolites.values():
        species = sbml_model.createSpecies()
        species.setId(metabolite.id)
        species.setName(metabolite.name)
        species.setCompartment(DEFAULT_COMPARTMENT_ID)

def _save_reactions(model, sbml_model):
    for reaction in model.reactions.values():
        sbml_reaction = sbml_model.createReaction()
        sbml_reaction.setId(reaction.id)
        sbml_reaction.setName(reaction.name)
        sbml_reaction.setReversible(reaction.reversible)     
        
def _save_stoichiometry(model, sbml_model):
    for (m_id, r_id), coeff in model.stoichiometry.items():
        sbml_reaction = sbml_model.getReaction(r_id)        
        if coeff < 0:
            speciesReference = sbml_reaction.createReactant()
            speciesReference.setSpecies(m_id)
            speciesReference.setStoichiometry(-coeff)
        elif coeff > 0:
            speciesReference = sbml_reaction.createProduct()
            speciesReference.setSpecies(m_id)
            speciesReference.setStoichiometry(coeff)

def _save_bounds(model, sbml_model):
    for r_id in model.reactions:
        sbml_reaction = sbml_model.getReaction(r_id)        
        kineticLaw = sbml_reaction.createKineticLaw()
        lb, ub = model.bounds[r_id]
        if lb is not None:
            lbParameter = kineticLaw.createParameter()
            lbParameter.setId(LB_TAG)
            lbParameter.setValue(lb)
        if ub is not None:
            ubParameter = kineticLaw.createParameter()
            ubParameter.setId(UB_TAG)
            ubParameter.setValue(ub) 

def _save_gpr(model, sbml_model):
    for r_id in model.reactions:
        sbml_reaction = sbml_model.getReaction(r_id)   
        sbml_reaction.appendNotes(GPR_TAG + ' ' + model.rules[r_id])
        