Search.setIndex({envversion:49,filenames:["framed","framed.analysis","framed.bioreactor","framed.core","framed.design","framed.experimental","framed.io_utils","framed.kinetic","framed.omics","framed.reconstruction","framed.solvers","framed.tests","index","modules"],objects:{"":{framed:[0,0,0,"-"]},"framed.analysis":{deletion:[1,0,0,"-"],essentiality:[1,0,0,"-"],phaseplane:[1,0,0,"-"],plotting:[1,0,0,"-"],simulation:[1,0,0,"-"],variability:[1,0,0,"-"]},"framed.analysis.deletion":{deleted_genes_to_reactions:[1,1,1,""],deletion:[1,1,1,""],gene_deletion:[1,1,1,""],reaction_deletion:[1,1,1,""]},"framed.analysis.essentiality":{essential_genes:[1,1,1,""],essential_reactions:[1,1,1,""],essentiality:[1,1,1,""]},"framed.analysis.phaseplane":{PhPP:[1,1,1,""],PhenotypePhasePlane:[1,2,1,""]},"framed.analysis.phaseplane.PhenotypePhasePlane":{plot_objective_function:[1,3,1,""],plot_shadow_price_x:[1,3,1,""],plot_shadow_price_y:[1,3,1,""]},"framed.analysis.plotting":{plot_flux_envelope:[1,1,1,""]},"framed.analysis.simulation":{FBA:[1,1,1,""],MOMA:[1,1,1,""],ROOM:[1,1,1,""],lMOMA:[1,1,1,""],looplessFBA:[1,1,1,""],pFBA:[1,1,1,""]},"framed.analysis.variability":{FVA:[1,1,1,""],blocked_reactions:[1,1,1,""],flux_envelope:[1,1,1,""],flux_envelope_3d:[1,1,1,""],production_envelope:[1,1,1,""]},"framed.bioreactor":{base:[2,0,0,"-"],bioreactors:[2,0,0,"-"],dfba:[2,0,0,"-"],dyssco:[2,0,0,"-"]},"framed.bioreactor.base":{Bioreactor:[2,2,1,""],DynamicSystem:[2,2,1,""],Environment:[2,2,1,""],Organism:[2,2,1,""]},"framed.bioreactor.base.Bioreactor":{calculate_productivity_from_dfba:[2,3,1,""],calculate_titer_from_dfba:[2,3,1,""],calculate_yield_from_dfba:[2,3,1,""],set_Sfeed:[2,3,1,""],set_Xfeed:[2,3,1,""],set_deltaS:[2,3,1,""],set_deltaX:[2,3,1,""],set_initial_conditions:[2,3,1,""],set_metabolites:[2,3,1,""],set_organisms:[2,3,1,""],update:[2,3,1,""]},"framed.bioreactor.base.DynamicSystem":{analytical_integrator:[2,3,1,""],integrate:[2,3,1,""],numerical_integrator:[2,3,1,""],ode_RHS:[2,3,1,""]},"framed.bioreactor.base.Environment":{add_metabolite:[2,3,1,""],add_metabolites:[2,3,1,""],add_organism:[2,3,1,""],add_organisms:[2,3,1,""],set_metabolites:[2,3,1,""],set_organisms:[2,3,1,""],update:[2,3,1,""]},"framed.bioreactor.base.Organism":{update:[2,3,1,""]},"framed.bioreactor.bioreactors":{Bioreactor_ox:[2,2,1,""],IdealBatch:[2,2,1,""],IdealFedbatch:[2,2,1,""]},"framed.bioreactor.bioreactors.IdealBatch":{calculate_yield_from_dfba:[2,3,1,""]},"framed.bioreactor.bioreactors.IdealFedbatch":{update:[2,3,1,""]},"framed.bioreactor.dfba":{DyMMM:[2,1,1,""],dFBA:[2,1,1,""],dFBA_combination:[2,1,1,""],dFBAm:[2,1,1,""]},"framed.bioreactor.dyssco":{calculate_performance:[2,1,1,""],calculate_performances:[2,1,1,""],make_envelope_strains:[2,1,1,""]},"framed.core":{cbmodel:[3,0,0,"-"],fixes:[3,0,0,"-"],model:[3,0,0,"-"],odemodel:[3,0,0,"-"],transformation:[3,0,0,"-"]},"framed.core.cbmodel":{CBModel:[3,2,1,""],GPRAssociation:[3,2,1,""],Gene:[3,2,1,""],Protein:[3,2,1,""]},"framed.core.cbmodel.CBModel":{add_gene:[3,3,1,""],add_ratio_constraint:[3,3,1,""],add_reaction:[3,3,1,""],detect_biomass_reaction:[3,3,1,""],eval_GPR:[3,3,1,""],print_reaction:[3,3,1,""],remove_gene:[3,3,1,""],remove_genes:[3,3,1,""],remove_ratio_constraint:[3,3,1,""],remove_reactions:[3,3,1,""],set_flux_bounds:[3,3,1,""],set_gpr_association:[3,3,1,""],set_lower_bound:[3,3,1,""],set_objective:[3,3,1,""],set_reaction_objective:[3,3,1,""],set_upper_bound:[3,3,1,""]},"framed.core.cbmodel.GPRAssociation":{get_genes:[3,3,1,""]},"framed.core.fixes":{clean_bigg_ids:[3,1,1,""],clean_bounds:[3,1,1,""],default_fixes:[3,1,1,""],fix_cb_model:[3,1,1,""],fix_cobra_model:[3,1,1,""],fix_reversibility:[3,1,1,""],remove_boundary_metabolites:[3,1,1,""]},"framed.core.model":{Compartment:[3,2,1,""],Metabolite:[3,2,1,""],Model:[3,2,1,""],Reaction:[3,2,1,""]},"framed.core.model.Model":{add_compartment:[3,3,1,""],add_metabolite:[3,3,1,""],add_reaction:[3,3,1,""],add_reaction_activator:[3,3,1,""],add_reaction_inhibitor:[3,3,1,""],add_reaction_regulator:[3,3,1,""],copy:[3,3,1,""],get_activation_targets:[3,3,1,""],get_inhibition_targets:[3,3,1,""],get_metabolite_sinks:[3,3,1,""],get_metabolite_sources:[3,3,1,""],get_reaction_compartments:[3,3,1,""],get_stoichiometry:[3,3,1,""],metabolite_reaction_lookup_table:[3,3,1,""],print_reaction:[3,3,1,""],regulatory_lookup_table:[3,3,1,""],remove_compartment:[3,3,1,""],remove_compartments:[3,3,1,""],remove_metabolite:[3,3,1,""],remove_metabolites:[3,3,1,""],remove_reaction:[3,3,1,""],remove_reactions:[3,3,1,""],set_stoichiometry:[3,3,1,""],stoichiometric_matrix:[3,3,1,""],to_string:[3,3,1,""]},"framed.core.model.Reaction":{get_activators:[3,3,1,""],get_inhibitors:[3,3,1,""],get_products:[3,3,1,""],get_substrates:[3,3,1,""]},"framed.core.odemodel":{ODEModel:[3,2,1,""]},"framed.core.odemodel.ODEModel":{add_reaction:[3,3,1,""],build_ode:[3,3,1,""],build_rate_functions:[3,3,1,""],get_ode:[3,3,1,""],get_parameters:[3,3,1,""],merge_constants:[3,3,1,""],parse_rate:[3,3,1,""],parse_rule:[3,3,1,""],print_balance:[3,3,1,""],remove_reactions:[3,3,1,""],set_assignment_rule:[3,3,1,""],set_concentration:[3,3,1,""],set_global_parameter:[3,3,1,""],set_local_parameter:[3,3,1,""],set_ratelaw:[3,3,1,""]},"framed.core.transformation":{disconnected_genes:[3,1,1,""],disconnected_metabolites:[3,1,1,""],make_irreversible:[3,1,1,""],simplify:[3,1,1,""]},"framed.design":{combinatorial:[4,0,0,"-"],greedy:[4,0,0,"-"]},"framed.design.combinatorial":{combinatorial_deletion:[4,1,1,""],combinatorial_gene_deletion:[4,1,1,""],combinatorial_reaction_deletion:[4,1,1,""]},"framed.design.greedy":{greedy_deletion:[4,1,1,""]},"framed.experimental":{benchmark:[5,0,0,"-"],fluxutils:[5,0,0,"-"],mathutils:[5,0,0,"-"],reduction:[5,0,0,"-"],sampling:[5,0,0,"-"]},"framed.experimental.benchmark":{benchmark:[5,1,1,""],evaluate:[5,1,1,""],run_method:[5,1,1,""]},"framed.experimental.fluxutils":{compare_fluxes:[5,1,1,""],fit_fluxes_to_model:[5,1,1,""],flux_distance:[5,1,1,""]},"framed.experimental.mathutils":{nullspace:[5,1,1,""]},"framed.experimental.reduction":{balanced_model_reduction:[5,1,1,""],remove_balanced_metabolite:[5,1,1,""]},"framed.experimental.sampling":{lp_sampler:[5,1,1,""],random:[5,1,1,""]},"framed.io_utils":{plaintext:[6,0,0,"-"],sbml:[6,0,0,"-"]},"framed.io_utils.plaintext":{add_reaction_from_str:[6,1,1,""],read_model_from_file:[6,1,1,""],write_model_to_file:[6,1,1,""]},"framed.io_utils.sbml":{load_cbmodel:[6,1,1,""],load_odemodel:[6,1,1,""],load_sbml_model:[6,1,1,""],parse_gpr_rule:[6,1,1,""],save_cbmodel:[6,1,1,""],save_sbml_model:[6,1,1,""]},"framed.kinetic":{fitting:[7,0,0,"-"],plotting:[7,0,0,"-"],sampling:[7,0,0,"-"],simulation:[7,0,0,"-"]},"framed.kinetic.fitting":{fit_from_metabolomics:[7,1,1,""]},"framed.kinetic.plotting":{plot_sampling_results:[7,1,1,""],plot_simulation:[7,1,1,""],plot_simulation_vs_data:[7,1,1,""]},"framed.kinetic.sampling":{parameter_perturbation:[7,1,1,""],rand:[7,1,1,""],randn:[7,1,1,""],sample:[7,1,1,""]},"framed.kinetic.simulation":{find_steady_state:[7,1,1,""],simulate:[7,1,1,""]},"framed.omics":{dataset:[8,0,0,"-"],simulation:[8,0,0,"-"]},"framed.omics.dataset":{DataSet:[8,2,1,""]},"framed.omics.dataset.DataSet":{get_fluxomics:[8,3,1,""],get_gene_deletions:[8,3,1,""],get_metabolomics:[8,3,1,""],get_omics_data:[8,3,1,""],get_proteomics:[8,3,1,""],get_transcriptomics:[8,3,1,""]},"framed.omics.simulation":{GIMME:[8,1,1,""],eflux:[8,1,1,""],gene2rxn:[8,1,1,""],gene_to_reaction_expression:[8,1,1,""]},"framed.reconstruction":{gapFind:[9,0,0,"-"]},"framed.reconstruction.gapFind":{GapFind:[9,1,1,""]},"framed.solvers":{cplex_wrapper:[10,0,0,"-"],get_default_solver:[10,1,1,""],gurobi_wrapper:[10,0,0,"-"],set_default_solver:[10,1,1,""],solver:[10,0,0,"-"],solver_instance:[10,1,1,""]},"framed.solvers.cplex_wrapper":{CplexSolver:[10,2,1,""]},"framed.solvers.cplex_wrapper.CplexSolver":{add_constraint:[10,3,1,""],add_constraints:[10,3,1,""],add_variable:[10,3,1,""],add_variables:[10,3,1,""],build_problem:[10,3,1,""],remove_constraint:[10,3,1,""],remove_variable:[10,3,1,""],set_logging:[10,3,1,""],set_parameter:[10,3,1,""],solve_lp:[10,3,1,""],solve_qp:[10,3,1,""],update:[10,3,1,""],write_to_file:[10,3,1,""]},"framed.solvers.gurobi_wrapper":{GurobiSolver:[10,2,1,""]},"framed.solvers.gurobi_wrapper.GurobiSolver":{add_constraint:[10,3,1,""],add_variable:[10,3,1,""],remove_constraint:[10,3,1,""],remove_variable:[10,3,1,""],set_logging:[10,3,1,""],set_parameter:[10,3,1,""],solve_lp:[10,3,1,""],solve_qp:[10,3,1,""],update:[10,3,1,""],write_to_file:[10,3,1,""]},"framed.solvers.solver":{Parameter:[10,2,1,""],Solution:[10,2,1,""],Solver:[10,2,1,""],Status:[10,2,1,""],VarType:[10,2,1,""],set_default_parameter:[10,1,1,""]},"framed.solvers.solver.Parameter":{FEASIBILITY_TOL:[10,4,1,""],INT_FEASIBILITY_TOL:[10,4,1,""],MIP_ABS_GAP:[10,4,1,""],MIP_REL_GAP:[10,4,1,""],OPTIMALITY_TOL:[10,4,1,""],TIME_LIMIT:[10,4,1,""]},"framed.solvers.solver.Solution":{get_metabolites_turnover:[10,3,1,""],show_metabolite_balance:[10,3,1,""],show_shadow_prices:[10,3,1,""],show_values:[10,3,1,""]},"framed.solvers.solver.Solver":{add_constraint:[10,3,1,""],add_variable:[10,3,1,""],build_problem:[10,3,1,""],clean_up:[10,3,1,""],list_constraints:[10,3,1,""],list_variables:[10,3,1,""],remove_constraint:[10,3,1,""],remove_variable:[10,3,1,""],set_logging:[10,3,1,""],set_parameter:[10,3,1,""],set_parameters:[10,3,1,""],solve_lp:[10,3,1,""],solve_qp:[10,3,1,""],update:[10,3,1,""],write_to_file:[10,3,1,""]},"framed.solvers.solver.Status":{INFEASIBLE:[10,4,1,""],INF_OR_UNB:[10,4,1,""],OPTIMAL:[10,4,1,""],SUBOPTIMAL:[10,4,1,""],UNBOUNDED:[10,4,1,""],UNKNOWN:[10,4,1,""]},"framed.solvers.solver.VarType":{BINARY:[10,4,1,""],CONTINUOUS:[10,4,1,""],INTEGER:[10,4,1,""]},"framed.tests":{kinetic:[11,0,0,"-"],tests_cobra:[11,0,0,"-"],tests_sbml:[11,0,0,"-"]},"framed.tests.kinetic":{main:[11,1,1,""],run_calibration:[11,1,1,""],run_sampling:[11,1,1,""],run_simulation_and_plot:[11,1,1,""]},"framed.tests.tests_cobra":{FBAFromPlainTextTest:[11,2,1,""],FBATest:[11,2,1,""],FBAwithRatioTest:[11,2,1,""],FVATest:[11,2,1,""],GeneDeletionLMOMATest:[11,2,1,""],GeneDeletionMOMATest:[11,2,1,""],GeneDeletionROOMTest:[11,2,1,""],GeneDeletionpFBATest:[11,2,1,""],GeneEssentialityTest:[11,2,1,""],IrreversibleModelFBATest:[11,2,1,""],SimplifiedModelFBATest:[11,2,1,""],TransformationCommutativityTest:[11,2,1,""],pFBATest:[11,2,1,""],suite:[11,1,1,""]},"framed.tests.tests_cobra.FBAFromPlainTextTest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.FBATest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.FBAwithRatioTest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.FVATest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.GeneDeletionLMOMATest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.GeneDeletionMOMATest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.GeneDeletionROOMTest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.GeneDeletionpFBATest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.GeneEssentialityTest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.IrreversibleModelFBATest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.SimplifiedModelFBATest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.TransformationCommutativityTest":{testRun:[11,3,1,""]},"framed.tests.tests_cobra.pFBATest":{testRun:[11,3,1,""]},"framed.tests.tests_sbml":{COBRA2COBRATest:[11,2,1,""],COBRA2FBCTest:[11,2,1,""],FBC2FBCTest:[11,2,1,""],PlainTextIOTest:[11,2,1,""],SBMLTestODE:[11,2,1,""],suite:[11,1,1,""]},"framed.tests.tests_sbml.COBRA2COBRATest":{testRun:[11,3,1,""]},"framed.tests.tests_sbml.COBRA2FBCTest":{testRun:[11,3,1,""]},"framed.tests.tests_sbml.FBC2FBCTest":{testRun:[11,3,1,""]},"framed.tests.tests_sbml.PlainTextIOTest":{testRun:[11,3,1,""]},"framed.tests.tests_sbml.SBMLTestODE":{testRun:[11,3,1,""]},framed:{analysis:[1,0,0,"-"],bioreactor:[2,0,0,"-"],core:[3,0,0,"-"],design:[4,0,0,"-"],experimental:[5,0,0,"-"],io_utils:[6,0,0,"-"],kinetic:[7,0,0,"-"],omics:[8,0,0,"-"],reconstruction:[9,0,0,"-"],solvers:[10,0,0,"-"],tests:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"abstract":[2,10],"case":11,"class":[1,2,3,8,10,11],"default":[1,2,3,4,6,10],"export":11,"final":2,"float":[1,2,3,4,7,10],"function":[1,2,4,7,8,10],"import":11,"int":[1,2,7],"long":2,"new":[1,10],"return":[1,2,3,4,6,7,9,10],"switch":3,"true":[1,2,3,5,6,9,10],__init__:2,about:[1,10],absolut:[1,10],abstol:[1,4,5,7],activ:[3,9],active_gen:3,add:[3,6,10],add_compart:3,add_constraint:10,add_gen:3,add_metabolit:[2,3],add_organ:2,add_ratio_constraint:3,add_react:3,add_reaction_activ:3,add_reaction_from_str:6,add_reaction_inhibitor:3,add_reaction_regul:3,add_vari:10,addit:[1,2,10],additional_yield:2,adjust:2,adjustment:1,affect:1,after:11,algorithm:9,alia:2,all:[1,2,3,4,6,7,9,10],along:[1,2],also:3,altern:1,analysi:[],analyt:2,analytical_integr:2,analyz:[1,2],and_func:8,ani:[6,7],anox:2,apply_fix:6,approach:4,argument:[7,9,10],arrai:[1,2,7],artifici:3,associ:[1,3,9],assum:2,attempt:1,author:[1,2,3,4,6,7,9,10,11],automat:2,avail:10,axi:1,backward:3,balanc:[1,2,10],balanced_model_reduct:5,base:[],base_organ:2,basic:[1,10],batch:2,benchmark:[],between:[2,11],binari:9,binary:10,biolog:2,biomass:[1,2,3],bioreactor:[],bioreactor_ox:2,bioremedi:2,biosustain:3,bipartit:3,blank:10,block:[1,3],blocked_react:1,bool:[1,2,3,10],both:1,bound:[3,7,9,10],boundari:3,build:3,build_od:3,build_problem:10,build_rate_funct:3,built:8,c_id:3,calcul:[1,2,10],calculate_perform:2,calculate_productivity_from_dfba:2,calculate_titer_from_dfba:2,calculate_yield_from_dfba:2,call:[2,10],can:2,cannot:9,carbon:2,care:[1,10],carri:10,cb_model:6,cbmodel:[],center:3,certain:2,chang:[1,2],character:1,cite:2,clean:[3,10],clean_bigg_id:3,clean_bound:3,clean_constraint:10,clean_disconnect:5,clean_id:3,clean_null_flux:5,clean_up:10,clean_vari:10,cobra2cobratest:11,cobra2fbctest:11,cobra:6,coeff:3,coeffici:[1,3,4,9,10],coli:2,combin:2,combinatori:[],combinatorial_delet:4,combinatorial_gene_delet:4,combinatorial_reaction_delet:4,common:[1,3,10],commonli:2,commun:2,commut:11,compare_flux:5,compart:3,competit:2,comput:[1,4],compute_r:7,compute_silent_delet:1,concentr:[2,3],condit:[2,5,8],connect:3,consid:[1,4],consist:3,constant:[3,9],constr_id:10,constraint:[1,2,3,5,8,9,10,11],consum:9,contain:[2,3,10],content:[],continu:9,continuous:10,control:2,conveni:7,convert:[1,3,7],coordin:1,copi:3,copyright:3,core:[],cost:[1,10],cplex:10,cplex_wrapp:[],cplexsolv:10,creat:[1,2,7,10],current:[1,10],custom:[1,2],cutoff:8,d_i:7,d_substrat:2,daniel:[1,3,4,6,7,10,11],data:7,dataset:[],decomposit:11,deepcopi:3,default_fix:3,defin:[2,3,6,10],delet:[],delete_metabolit:3,delete_react:3,deleted_genes_to_react:1,delta:1,deltas:2,deltax:2,denmark:3,denomin:3,deriv:2,describ:2,design:[],detail:10,detect:[1,3],detect_biomass_react:3,dfba:[],dfba_combin:2,dfba_solut:2,dfba_solv:2,dfbam:2,diauxic:2,dict:[1,2,4,10],dictionari:[2,3],differ:3,dimens:7,direct:3,disconnected_gen:3,disconnected_metabolit:3,displai:1,dist:7,dist_arg:7,distribut:[1,7],don:1,dopri5:2,dymmm:2,dynam:2,dynamicsystem:2,dyssco:[],each:2,ecoli:2,edg:3,edward:1,effect:2,effici:[2,3,10],effluent:2,eflux:8,elem_id:3,element:[1,2,8,10],els:3,empti:10,enabl:10,endtim:7,energi:2,entri:[2,10],enumer:10,envelop:[1,2],environ:2,environment:[1,10],epsilon:1,equat:10,escherichia:2,essenti:[],essential_gen:1,essential_react:1,eval_gpr:3,evalu:5,evaluat:3,event:2,exampl:[2,7],exchang:2,exclude_compart:3,exist:3,experiment:[],fail:10,fals:[1,2,3,5,7,8,9,10],fba:[1,2,4,11],fba_constraint:2,fba_object:2,fbafromplaintexttest:11,fbatest:11,fbawithratiotest:11,fbc2fbctest:11,feasibility_tol:10,featur:[3,11],fedbatch:2,fedbtach:2,feed:2,figur:1,file:6,filenam:[1,6,10],fill:7,find:[1,4,9],find_steady_st:7,first:[2,3,7],fit:[],fit_fluxes_to_model:5,fit_from_metabolom:7,fix:[],fix_cb_model:3,fix_cobra_model:3,fix_revers:3,flag:2,flavor:[3,6],flow:2,flow_rate_in:2,flow_rate_out:2,flux:[1,2,3,5,9,10,11],flux_dist:5,flux_envelop:1,flux_envelope_3d:1,fluxutil:[],fobj:[4,10],follow:[2,9],format:[6,10],forward:3,foundat:3,four:[2,7],fraction:[1,4],framework:2,from:[2,3,6,7,10,11],full:[2,3],func_dfba2yield:2,futile_cycle_threshold:5,fva:1,fvatest:11,gap:9,gap_metabolit:9,gap_react:9,gapfil:[],gapfind:[],gaussian:7,gene2rxn:8,gene:[1,3,4,8,11],gene_delet:1,gene_exp:8,gene_id:3,gene_list:3,gene_to_reaction_express:8,genedeletionlmomatest:11,genedeletionmomatest:11,genedeletionpfbatest:11,genedeletionroomtest:11,geneessentialitytest:11,gener:[1,2,4,7,10],genom:2,geobact:2,get:10,get_activ:3,get_activation_target:3,get_default_solv:10,get_fluxom:8,get_gen:3,get_gene_delet:8,get_inhibition_target:3,get_inhibitor:3,get_metabolite_sink:3,get_metabolite_sourc:3,get_metabolites_turnov:10,get_metabolom:8,get_od:3,get_omics_data:8,get_paramet:3,get_product:3,get_proteom:8,get_reaction_compart:3,get_reduced_cost:[1,10],get_shadow_pric:[1,10],get_stoichiometri:3,get_substr:3,get_transcriptom:8,get_valu:[1,10],gimme:8,given:[2,3,7,9,10],glpk:10,glpk_wrapper:[],glpk_wrapper_lazi:[],gpr:[3,8],gprassociat:3,greedi:[],greedy_delet:4,group:3,growth:[1,2,4],growth_frac:8,gurobi:10,gurobi_wrapp:[],gurobipi:10,gurobisolv:10,hand:[2,10],here:2,host:2,how:2,id_list:3,ideal:2,idealbatch:2,idealfedbatch:2,identifi:[3,10],imag:1,immedi:10,immediatli:10,implement:[1,2,3,4,6,7,9,10],inact:9,includ:1,index:12,inf_or_unb:10,infeasible:10,infin:3,influent:2,inform:10,initi:2,initial_condit:2,input:3,instanc:[1,2,9,10],instanti:[1,10],instead:[1,3,7,10],int_feasibility_tol:10,int_lik:7,integ:7,integer:10,integr:2,integrator_arg:7,intend:2,interfac:[1,4,7,10],intern:[1,2,10],interv:5,invoke:10,io_util:[],irrevers:9,irreversiblemodelfbatest:11,jsonfil:8,kai:[1,2,11],keep:3,kei:3,kind:[1,3,4,6,8],kinet:[],kumar:9,kwarg:5,label_i:1,label_x:1,larg:3,lazi:10,leav:10,legaci:2,letal:[1,4],like:2,lin_obj:10,linear:[1,10],liquid:2,list:[1,2,3,4,9,10],list_constraint:10,list_vari:10,lmoma:1,load:6,load_cbmodel:6,load_odemodel:6,load_sbml_model:6,log:7,lookup:3,loopless:1,looplessfba:1,lower:[3,9,10],lp_sampler:5,m_id:[3,5,10],machado:[1,3,4,6,7,10,11],mahadevan:2,main:11,maintain:2,make:3,make_envelope_strain:2,make_irrevers:3,manipul:3,map:[3,10],marta:9,match:3,mathutil:[],mato:9,matplotlib:1,matrix:3,max:[1,9],max_degre:5,max_del:4,maxim:[1,10],maximum:[1,4],mean:7,merge_const:3,merge_kei:5,messag:10,metabol:[1,2,3,6],metabolit:[1,2,3,5,7,8,9,10],metabolite_nam:3,metabolite_reaction_lookup_t:3,method:[1,2,4,5,6,7,9,10],methodnam:11,metric:2,min:[1,8],min_growth:[1,4],minim:[1,10],minimum:[1,4],mip_abs_gap:10,mip_rel_gap:10,model:[],model_deepcopi:2,model_id:3,modif:9,modul:[],moma:[1,4,11],multi:2,multipl:10,must:[1,2,3],must_keep:5,n_sampl:5,name:[2,3,10],ndarrai:7,neg:3,nest:3,network:[3,9],new_figur:1,non:[1,4,9,10],none:[1,2,3,4,5,6,7,8,10],nordisk:3,normal:[5,7],note:7,novo:3,nullspac:5,number:[1,2,4,9],numer:[2,3],numerical_integr:2,numpi:[1,7],obj_percentag:1,object:[1,2,3,4,10],ode:2,ode_model:6,ode_rhs:2,odemodel:[],off:1,old:3,omic:[],one:2,onli:[1,10],oper:3,optim:[1,2,4,10],optimal:10,optimality_tol:10,optimiz:2,option:[1,6,10],or_func:8,order:2,ordereddict:[2,3],organ:2,organism:2,origin:5,other:[2,5],otherwis:[1,2],out:7,output:[3,10],over:7,oxygen_avail:2,p_id:3,page:12,pair:[1,10],param:[2,3],paramet:[1,2,3,4,6,7,9,10],parameter_perturb:7,pars:6,parse_gpr_rul:6,parse_r:3,parse_rul:3,parsed_r:3,parsimoni:[1,8],pass:2,path:6,pattern:10,percentag:[1,4,10],perform:2,persist:10,pfba:[1,11],pfbatest:11,phase:1,phaseplan:[],phenotyp:1,phenotypephaseplan:1,phpp:1,plain:[6,11],plaintext:[],plaintextiotest:11,plane:1,pleas:2,plot:[],plot_flux_envelop:1,plot_objective_funct:1,plot_sampling_result:7,plot_shadow_price_i:1,plot_shadow_price_x:1,plot_simul:7,plot_simulation_vs_data:7,point:7,pop_siz:4,popul:7,posit:[3,7],possibl:[2,10],previou:10,price:[1,10],primari:2,primary_substr:2,print:[3,10],print_bal:3,print_react:3,problem:[1,9,10],produc:9,product:[1,2],production_envelop:1,protein:[3,8],provid:[2,7],pseudo:3,python:7,quad_obj:10,quadrat:5,r_biomass:1,r_dict:3,r_id:3,r_id_den:3,r_id_num:3,r_product:2,r_substrat:2,r_target:[1,2],r_x:1,r_y:1,r_z:1,rand:7,randn:7,random:[5,7],random_sampl:7,randomli:7,rang:1,rate:[1,2,3,4],ratelaw:3,ratio:[3,11],ration:4,reaction:[1,2,3,4,6,7,8,9,10],reaction_delet:1,reaction_nam:3,reaction_str:6,reactor:2,read:6,read_model_from_fil:6,reconstruct:[],reduc:[1,10],reduced_cost:10,reduct:[],refer:[1,4,7],regul:3,regulatori:1,regulatory_lookup_t:3,rel:1,remov:[3,10],remove_balanced_metabolit:5,remove_boundari:3,remove_boundary_metabolit:3,remove_compart:3,remove_constraint:10,remove_gen:3,remove_metabolit:3,remove_ratio_constraint:3,remove_react:3,remove_vari:10,replac:3,repres:[3,10],represent:[3,6],respect:[1,6,9,10],respons:2,result:[2,10],retriev:1,reus:10,revers:[3,9,11],rhodoferax:2,right:[2,10],room:[1,11],root_gaps_onli:9,rule:[2,3,6],run:[1,2],run_calibr:11,run_method:5,run_sampl:11,run_simulation_and_plot:11,runtest:11,rxn:2,rxn_x:1,rxn_x_rang:1,rxn_y:1,rxn_y_rang:1,same:3,sampl:[],save:[1,6],save_cbmodel:6,save_dfba_solut:2,save_sbml_model:6,sbml:[],sbmltestode:11,scale:[2,7],scale_rxn:8,scale_valu:8,scan:2,scerevisia:2,screen:1,search:[3,12],select:10,select_prob:5,sens:[1,10],set:[1,2,3,4,9,10],set_assignment_rul:3,set_concentr:3,set_default_paramet:10,set_default_solv:10,set_deltas:2,set_deltax:2,set_flux_bound:3,set_global_paramet:3,set_gpr_associ:3,set_initial_condit:2,set_local_paramet:3,set_log:10,set_lower_bound:3,set_metabolit:2,set_object:3,set_organ:2,set_paramet:10,set_ratelaw:3,set_reaction_object:3,set_reversibilti:3,set_sfe:2,set_stoichiometri:3,set_upper_bound:3,set_xfe:2,sfeed:2,shadow:[1,10],shadow_pric:10,shape:7,should:[2,7,10],show:10,show_metabolite_bal:10,show_plot:1,show_shadow_pric:10,show_valu:10,shown:1,side:[2,10],sigma:7,similar:7,simpl:6,simplif:11,simplifi:3,simplifiedmodelfbatest:11,simul:[],singl:[2,3,7,10],sinit:2,size:[3,7],small:9,solut:[1,2,4,10],solv:[2,9,10],solve_lp:10,solve_qp:10,solver:[],solver_inst:10,solvernam:10,some:[1,9],sort:10,sort_valu:5,sourc:[2,3],speci:2,specif:[2,10],specifi:2,speed:1,speedup:[1,10],split:3,stand:9,standard:7,standard_norm:7,state:2,statu:10,step:[1,2,7],stoichiometr:[3,9],stoichiometri:3,stoichiometric_matrix:3,store:10,str:[1,2,3,4,6,10],strain:[2,4],strategi:2,stream:2,string:[3,6],structur:10,subclass:[2,6],submodul:[],suboptimal:10,substrat:[1,2],subsurfac:2,suit:11,sum:[8,9],suppli:7,support:2,sure:3,system:2,t_step:7,tag:3,take:7,tank:2,target:[1,2,4],technic:3,term:2,test:[],test_analysi:[],test_bioreactor:[],test_gapfil:[],test_gapfind:[],test_glpk_alon:[],testcas:11,testrun:11,tests_cobra:[],tests_sbml:[],text:[3,6,11],than:2,thei:7,thi:[1,2,3,4,6,7,9,10],threshold:3,time:[2,7],time_limit:10,titer:2,to_str:3,todo:[2,3],tol:9,toler:[1,5],topolog:3,transform:[],transformationcommutativitytest:11,trigger:2,triplet:1,truncat:7,tupl:7,two:[2,7],type:[1,2,3,7,9,10],unbound:3,unbounded:10,uniform:7,unit:11,unittest:11,univari:7,univers:3,unknown:10,updat:[2,10],update:10,update_model:7,update_problem:10,upper:[3,9,10],uptak:2,uranium:2,usag:2,use_infin:3,used:[2,10],user:2,usual:2,util:1,valid:4,valu:[1,3,4,7,10],var_id:10,variabl:[],varianc:7,variat:1,variation_threshold:5,vartyp:10,verbos:2,version:[1,2],vinit:2,vode:2,volum:2,volume_max:2,want:7,weight:5,well:3,were:7,when:3,whether:2,without:10,write:6,write_model_to_fil:6,write_to_fil:10,xfeed:2,xinit:2,xlabel:7,yield:[1,2],ylabel:7,you:[1,7,10],zero:[2,10],zhuang:[1,2,11]},titles:["framed package","framed.analysis package","framed.bioreactor package","framed.core package","framed.design package","framed.experimental package","framed.io_utils package","framed.kinetic package","framed.omics package","framed.reconstruction package","framed.solvers package","framed.tests package","Welcome to framed&#8217;s documentation!","src"],titleterms:{analysi:1,base:2,benchmark:5,bioreactor:2,cbmodel:3,combinatori:4,content:[0,1,2,3,4,5,6,7,8,9,10,11],core:3,cplex_wrapp:10,dataset:8,delet:1,design:4,dfba:2,document:12,dyssco:2,essenti:1,experiment:5,fit:7,fix:3,fluxutil:5,frame:[0,1,2,3,4,5,6,7,8,9,10,11,12],gapfil:9,gapfind:9,glpk_wrapper:10,glpk_wrapper_lazi:10,greedi:4,gurobi_wrapp:10,indice:12,io_util:6,kinet:[7,11],mathutil:5,model:3,modul:[0,1,2,3,4,5,6,7,8,9,10,11],odemodel:3,omic:8,packag:[0,1,2,3,4,5,6,7,8,9,10,11],phaseplan:1,plaintext:6,plot:[1,7],reconstruct:9,reduct:5,sampl:[5,7],sbml:6,simul:[1,7,8],solver:10,src:13,submodul:[1,2,3,4,5,6,7,8,9,10,11],subpackag:0,tabl:12,test:11,test_analysi:11,test_bioreactor:11,test_gapfil:11,test_gapfind:11,test_glpk_alon:11,tests_cobra:11,tests_sbml:11,transform:3,variabl:1,welcom:12}})