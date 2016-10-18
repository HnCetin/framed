"""
Fixes to clean up common models from different sources/groups.

@author: Daniel Machado
   
"""


def fix_cb_model(model, flavor=None):

    if flavor == 'cobra':
        fix_cobra_model(model)
    else:
        default_fixes(model)


def default_fixes(model):
    remove_boundary_metabolites(model)
    fix_reversibility(model)
    clean_bounds(model)


def fix_cobra_model(model, remove_boundary=True, set_reversibilty=True, use_infinity=True, clean_ids=True):

    if remove_boundary:
        remove_boundary_metabolites(model, tag='_b')
    if set_reversibilty:
        fix_reversibility(model)
    if use_infinity:
        clean_bounds(model)
    if clean_ids:
        clean_bigg_ids(model)


def remove_boundary_metabolites(model, tag=None):
    """ Remove remove boundary metabolites. """

    if tag:
        boundary = filter(lambda m_id: m_id.endswith(tag), model.metabolites)
    else:
        boundary = [m_id for m_id, met in model.metabolites.items() if met.boundary]

    model.remove_metabolites(boundary)


def fix_reversibility(model):
    """ Make reaction reversibility consistent with the bounds. """

    for r_id, (lb, _) in model.bounds.items():
        model.reactions[r_id].reversible = (lb is None or lb < 0)


def clean_bounds(model, threshold=1000):
    """ Remove artificially large bounds (unbounded = no bounds). """

    for r_id, (lb, ub) in model.bounds.items():
        model.bounds[r_id] = (lb if lb > -threshold else None, ub if ub < threshold else None)


def clean_bigg_ids(model):
    clean = lambda x: x.replace('_LPAREN_', '_').replace('_RPAREN_', '_').replace('_DASH_', '__').rstrip('_')

    def key_replace(ord_dict, key, new_key):
        item = ord_dict[key]
        del ord_dict[key]
        ord_dict[new_key] = item

    for m_id, metabolite in model.metabolites.items():
        metabolite.id = clean(m_id)
        key_replace(model.metabolites, m_id, metabolite.id)

    for r_id, reaction in model.reactions.items():
        reaction.id = clean(r_id)
        key_replace(model.reactions, r_id, reaction.id)
        key_replace(model.bounds, r_id, reaction.id)
        key_replace(model.objective, r_id, reaction.id)
        key_replace(model.gpr_associations, r_id, reaction.id)
        key_replace(model.rule_functions, r_id, reaction.id)

        for m_id in reaction.stoichiometry.keys():
            key_replace(reaction.stoichiometry, m_id, clean(m_id))
