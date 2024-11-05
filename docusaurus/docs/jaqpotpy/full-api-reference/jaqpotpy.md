# jaqpotpy package

## Subpackages

* [jaqpotpy.datasets package](jaqpotpy.datasets.md)
  * [Subpackages](jaqpotpy.datasets.md#subpackages)
  * [Submodules](jaqpotpy.datasets.md#submodules)
  * [jaqpotpy.datasets.dataset_base module](jaqpotpy.datasets.md#module-jaqpotpy.datasets.dataset_base)
    * [`BaseDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset)
      * [`BaseDataset.X`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.X)
      * [`BaseDataset.create()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.create)
      * [`BaseDataset.dataset_name`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.dataset_name)
      * [`BaseDataset.df`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.df)
      * [`BaseDataset.external`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.external)
      * [`BaseDataset.featurizer_name`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.featurizer_name)
      * [`BaseDataset.task`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.task)
      * [`BaseDataset.x_colls_all`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.x_colls_all)
      * [`BaseDataset.y`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.y)
    * [`ImageDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.ImageDataset)
      * [`ImageDataset.load()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.ImageDataset.load)
      * [`ImageDataset.save()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.ImageDataset.save)
    * [`MaterialDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MaterialDataset)
      * [`MaterialDataset.load()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MaterialDataset.load)
      * [`MaterialDataset.materials_strings`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MaterialDataset.materials_strings)
      * [`MaterialDataset.save()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MaterialDataset.save)
    * [`MolecularDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MolecularDataset)
      * [`MolecularDataset.load()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MolecularDataset.load)
      * [`MolecularDataset.save()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MolecularDataset.save)
      * [`MolecularDataset.smiles_strings`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MolecularDataset.smiles_strings)
  * [jaqpotpy.datasets.graph_pyg_dataset module](jaqpotpy.datasets.md#jaqpotpy-datasets-graph-pyg-dataset-module)
  * [jaqpotpy.datasets.jaqpotpy_dataset module](jaqpotpy.datasets.md#jaqpotpy-datasets-jaqpotpy-dataset-module)
  * [jaqpotpy.datasets.tokenizer_dataset module](jaqpotpy.datasets.md#jaqpotpy-datasets-tokenizer-dataset-module)
  * [Module contents](jaqpotpy.datasets.md#module-jaqpotpy.datasets)
* [jaqpotpy.descriptors package](jaqpotpy.descriptors.md)
  * [Subpackages](jaqpotpy.descriptors.md#subpackages)
    * [jaqpotpy.descriptors.graph package](jaqpotpy.descriptors.graph.md)
      * [Submodules](jaqpotpy.descriptors.graph.md#submodules)
      * [jaqpotpy.descriptors.graph.graph_featurizer module](jaqpotpy.descriptors.graph.md#jaqpotpy-descriptors-graph-graph-featurizer-module)
      * [Module contents](jaqpotpy.descriptors.graph.md#module-jaqpotpy.descriptors.graph)
    * [jaqpotpy.descriptors.molecular package](jaqpotpy.descriptors.molecular.md)
      * [Submodules](jaqpotpy.descriptors.molecular.md#submodules)
      * [jaqpotpy.descriptors.molecular.maccs_keys_fingerprints module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.maccs_keys_fingerprints)
      * [jaqpotpy.descriptors.molecular.mordred module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.mordred)
      * [jaqpotpy.descriptors.molecular.rdkit module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.rdkit)
      * [jaqpotpy.descriptors.molecular.topological_fingerprints module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.topological_fingerprints)
      * [Module contents](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular)
    * [jaqpotpy.descriptors.tokenizer package](jaqpotpy.descriptors.tokenizer.md)
      * [Submodules](jaqpotpy.descriptors.tokenizer.md#submodules)
      * [jaqpotpy.descriptors.tokenizer.smiles_tokenizer module](jaqpotpy.descriptors.tokenizer.md#jaqpotpy-descriptors-tokenizer-smiles-tokenizer-module)
      * [Module contents](jaqpotpy.descriptors.tokenizer.md#module-contents)
  * [Submodules](jaqpotpy.descriptors.md#submodules)
  * [jaqpotpy.descriptors.base_classes module](jaqpotpy.descriptors.md#module-jaqpotpy.descriptors.base_classes)
    * [`ComplexFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.ComplexFeaturizer)
      * [`ComplexFeaturizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.ComplexFeaturizer.featurize)
    * [`DataframeFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.DataframeFeaturizer)
      * [`DataframeFeaturizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.DataframeFeaturizer.featurize)
    * [`Featurizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.Featurizer)
      * [`Featurizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.Featurizer.featurize)
    * [`MaterialFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MaterialFeaturizer)
      * [`MaterialFeaturizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MaterialFeaturizer.featurize)
      * [`MaterialFeaturizer.featurize_dataframe()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MaterialFeaturizer.featurize_dataframe)
    * [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)
      * [`MolecularFeaturizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer.featurize)
      * [`MolecularFeaturizer.featurize_dataframe()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer.featurize_dataframe)
    * [`ParserFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.ParserFeaturizer)
      * [`ParserFeaturizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.ParserFeaturizer.featurize)
      * [`ParserFeaturizer.featurize_dataframe()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.ParserFeaturizer.featurize_dataframe)
    * [`get_print_threshold()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.get_print_threshold)
  * [Module contents](jaqpotpy.descriptors.md#module-jaqpotpy.descriptors)
* [jaqpotpy.doa package](jaqpotpy.doa.md)
  * [Subpackages](jaqpotpy.doa.md#subpackages)
  * [Submodules](jaqpotpy.doa.md#submodules)
  * [jaqpotpy.doa.doa module](jaqpotpy.doa.md#module-jaqpotpy.doa.doa)
    * [`DOA`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA)
      * [`DOA.calculate()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.calculate)
      * [`DOA.calculate_matrix()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.calculate_matrix)
      * [`DOA.calculate_threshold()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.calculate_threshold)
      * [`DOA.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.fit)
      * [`DOA.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.predict)
    * [`Leverage`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage)
      * [`Leverage.IN`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.IN)
      * [`Leverage.a`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.a)
      * [`Leverage.calculate_matrix()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.calculate_matrix)
      * [`Leverage.calculate_threshold()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.calculate_threshold)
      * [`Leverage.data`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.data)
      * [`Leverage.doa_matrix`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.doa_matrix)
      * [`Leverage.doa_new`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.doa_new)
      * [`Leverage.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.fit)
      * [`Leverage.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.predict)
    * [`MeanVar`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar)
      * [`MeanVar.IN`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.IN)
      * [`MeanVar.a`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.a)
      * [`MeanVar.calculate()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.calculate)
      * [`MeanVar.data`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.data)
      * [`MeanVar.doa_matrix`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.doa_matrix)
      * [`MeanVar.doa_new`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.doa_new)
      * [`MeanVar.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.fit)
      * [`MeanVar.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.predict)
    * [`SmilesLeverage`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage)
      * [`SmilesLeverage.IN`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.IN)
      * [`SmilesLeverage.a`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.a)
      * [`SmilesLeverage.calculate_matrix()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.calculate_matrix)
      * [`SmilesLeverage.calculate_threshold()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.calculate_threshold)
      * [`SmilesLeverage.data`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.data)
      * [`SmilesLeverage.doa_matrix`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.doa_matrix)
      * [`SmilesLeverage.doa_new`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.doa_new)
      * [`SmilesLeverage.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.fit)
      * [`SmilesLeverage.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.predict)
      * [`SmilesLeverage.smiles`](jaqpotpy.doa.md#jaqpotpy.doa.doa.SmilesLeverage.smiles)
    * [`calc_doa()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.calc_doa)
    * [`calculate_a()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.calculate_a)
    * [`calculate_doa_matrix()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.calculate_doa_matrix)
  * [Module contents](jaqpotpy.doa.md#module-jaqpotpy.doa)
* [jaqpotpy.exceptions package](jaqpotpy.exceptions.md)
  * [Submodules](jaqpotpy.exceptions.md#submodules)
  * [jaqpotpy.exceptions.exceptions module](jaqpotpy.exceptions.md#jaqpotpy-exceptions-exceptions-module)
  * [Module contents](jaqpotpy.exceptions.md#module-contents)
* [jaqpotpy.helpers package](jaqpotpy.helpers.md)
  * [Submodules](jaqpotpy.helpers.md#submodules)
  * [jaqpotpy.helpers.logging module](jaqpotpy.helpers.md#module-jaqpotpy.helpers.logging)
    * [`init_logger()`](jaqpotpy.helpers.md#jaqpotpy.helpers.logging.init_logger)
  * [Module contents](jaqpotpy.helpers.md#module-jaqpotpy.helpers)
* [jaqpotpy.models package](jaqpotpy.models.md)
  * [Subpackages](jaqpotpy.models.md#subpackages)
    * [jaqpotpy.models.torch_geometric_models package](jaqpotpy.models.torch_geometric_models.md)
      * [Submodules](jaqpotpy.models.torch_geometric_models.md#submodules)
      * [jaqpotpy.models.torch_geometric_models.graph_neural_network module](jaqpotpy.models.torch_geometric_models.md#jaqpotpy-models-torch-geometric-models-graph-neural-network-module)
      * [Module contents](jaqpotpy.models.torch_geometric_models.md#module-contents)
    * [jaqpotpy.models.torch_models package](jaqpotpy.models.torch_models.md)
      * [Submodules](jaqpotpy.models.torch_models.md#submodules)
      * [jaqpotpy.models.torch_models.smiles_sequence module](jaqpotpy.models.torch_models.md#jaqpotpy-models-torch-models-smiles-sequence-module)
      * [Module contents](jaqpotpy.models.torch_models.md#module-jaqpotpy.models.torch_models)
    * [jaqpotpy.models.trainers package](jaqpotpy.models.trainers.md)
      * [Subpackages](jaqpotpy.models.trainers.md#subpackages)
      * [Submodules](jaqpotpy.models.trainers.md#submodules)
      * [jaqpotpy.models.trainers.base_trainer module](jaqpotpy.models.trainers.md#jaqpotpy-models-trainers-base-trainer-module)
      * [Module contents](jaqpotpy.models.trainers.md#module-jaqpotpy.models.trainers)
  * [Submodules](jaqpotpy.models.md#submodules)
  * [jaqpotpy.models.base_classes module](jaqpotpy.models.md#module-jaqpotpy.models.base_classes)
    * [`MaterialModel`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MaterialModel)
      * [`MaterialModel.infer()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MaterialModel.infer)
      * [`MaterialModel.load()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MaterialModel.load)
      * [`MaterialModel.save()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MaterialModel.save)
    * [`Model`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model)
      * [`Model.X`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.X)
      * [`Model.Y`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.Y)
      * [`Model.descriptors`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.descriptors)
      * [`Model.doa`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.doa)
      * [`Model.external`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.external)
      * [`Model.external_feats`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.external_feats)
      * [`Model.infer()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.infer)
      * [`Model.jaqpotpy_docker`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.jaqpotpy_docker)
      * [`Model.jaqpotpy_version`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.jaqpotpy_version)
      * [`Model.library`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.library)
      * [`Model.model`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.model)
      * [`Model.model_title`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.model_title)
      * [`Model.modeling_task`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.modeling_task)
      * [`Model.optimizer`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.optimizer)
      * [`Model.prediction`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.prediction)
      * [`Model.preprocessing`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.preprocessing)
      * [`Model.preprocessing_y`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.preprocessing_y)
      * [`Model.preprocessor_names`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.preprocessor_names)
      * [`Model.preprocessor_y_names`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.preprocessor_y_names)
      * [`Model.probability`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.probability)
      * [`Model.smiles`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.smiles)
      * [`Model.version`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.version)
    * [`MolecularModel`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MolecularModel)
      * [`MolecularModel.deploy_on_jaqpot()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MolecularModel.deploy_on_jaqpot)
      * [`MolecularModel.infer()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MolecularModel.infer)
      * [`MolecularModel.load()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MolecularModel.load)
      * [`MolecularModel.load_from_jaqpot()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MolecularModel.load_from_jaqpot)
      * [`MolecularModel.save()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.MolecularModel.save)
  * [jaqpotpy.models.sklearn module](jaqpotpy.models.md#module-jaqpotpy.models.sklearn)
    * [`MaterialSKLearn`](jaqpotpy.models.md#jaqpotpy.models.sklearn.MaterialSKLearn)
      * [`MaterialSKLearn.fit()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.MaterialSKLearn.fit)
    * [`MolecularSKLearn`](jaqpotpy.models.md#jaqpotpy.models.sklearn.MolecularSKLearn)
      * [`MolecularSKLearn.fit()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.MolecularSKLearn.fit)
  * [jaqpotpy.models.xgboost module](jaqpotpy.models.md#jaqpotpy-models-xgboost-module)
  * [Module contents](jaqpotpy.models.md#module-jaqpotpy.models)
* [jaqpotpy.preprocessors package](jaqpotpy.preprocessors.md)
  * [Submodules](jaqpotpy.preprocessors.md#submodules)
  * [jaqpotpy.preprocessors.custom_one_hot_encoder module](jaqpotpy.preprocessors.md#jaqpotpy-preprocessors-custom-one-hot-encoder-module)
  * [Module contents](jaqpotpy.preprocessors.md#module-contents)
* [jaqpotpy.utils package](jaqpotpy.utils.md)
  * [Submodules](jaqpotpy.utils.md#submodules)
  * [jaqpotpy.utils.data_utils module](jaqpotpy.utils.md#module-jaqpotpy.utils.data_utils)
    * [`download_url()`](jaqpotpy.utils.md#jaqpotpy.utils.data_utils.download_url)
    * [`get_data_dir()`](jaqpotpy.utils.md#jaqpotpy.utils.data_utils.get_data_dir)
    * [`pad_array()`](jaqpotpy.utils.md#jaqpotpy.utils.data_utils.pad_array)
    * [`untargz_file()`](jaqpotpy.utils.md#jaqpotpy.utils.data_utils.untargz_file)
    * [`unzip_file()`](jaqpotpy.utils.md#jaqpotpy.utils.data_utils.unzip_file)
  * [jaqpotpy.utils.fragment_utils module](jaqpotpy.utils.md#module-jaqpotpy.utils.fragment_utils)
    * [`AtomShim`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.AtomShim)
      * [`AtomShim.GetAtomicNum()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.AtomShim.GetAtomicNum)
      * [`AtomShim.GetCoords()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.AtomShim.GetCoords)
      * [`AtomShim.GetPartialCharge()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.AtomShim.GetPartialCharge)
    * [`MolecularFragment`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.MolecularFragment)
      * [`MolecularFragment.GetAtoms()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.MolecularFragment.GetAtoms)
      * [`MolecularFragment.GetCoords()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.MolecularFragment.GetCoords)
      * [`MolecularFragment.GetNumAtoms()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.MolecularFragment.GetNumAtoms)
    * [`MoleculeLoadException`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.MoleculeLoadException)
    * [`compute_charges()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.compute_charges)
    * [`get_contact_atom_indices()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.get_contact_atom_indices)
    * [`get_mol_subset()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.get_mol_subset)
    * [`get_partial_charge()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.get_partial_charge)
    * [`merge_molecular_fragments()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.merge_molecular_fragments)
    * [`reduce_molecular_complex_to_contacts()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.reduce_molecular_complex_to_contacts)
    * [`strip_hydrogens()`](jaqpotpy.utils.md#jaqpotpy.utils.fragment_utils.strip_hydrogens)
  * [jaqpotpy.utils.geometry_utils module](jaqpotpy.utils.md#module-jaqpotpy.utils.geometry_utils)
    * [`angle_between()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.angle_between)
    * [`compute_centroid()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.compute_centroid)
    * [`compute_pairwise_distances()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.compute_pairwise_distances)
    * [`compute_protein_range()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.compute_protein_range)
    * [`generate_random_rotation_matrix()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.generate_random_rotation_matrix)
    * [`generate_random_unit_vector()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.generate_random_unit_vector)
    * [`is_angle_within_cutoff()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.is_angle_within_cutoff)
    * [`rotate_molecules()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.rotate_molecules)
    * [`subtract_centroid()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.subtract_centroid)
    * [`unit_vector()`](jaqpotpy.utils.md#jaqpotpy.utils.geometry_utils.unit_vector)
  * [jaqpotpy.utils.installed_packages module](jaqpotpy.utils.md#jaqpotpy-utils-installed-packages-module)
  * [jaqpotpy.utils.molecule_feature_utils module](jaqpotpy.utils.md#module-jaqpotpy.utils.molecule_feature_utils)
    * [`construct_hydrogen_bonding_info()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.construct_hydrogen_bonding_info)
    * [`get_atom_chirality_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_chirality_one_hot)
    * [`get_atom_degree_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_degree_one_hot)
    * [`get_atom_explicit_valence_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_explicit_valence_one_hot)
    * [`get_atom_formal_charge()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_formal_charge)
    * [`get_atom_formal_charge_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_formal_charge_one_hot)
    * [`get_atom_hybridization_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_hybridization_one_hot)
    * [`get_atom_hydrogen_bonding_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_hydrogen_bonding_one_hot)
    * [`get_atom_implicit_valence_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_implicit_valence_one_hot)
    * [`get_atom_is_aromatic()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_is_aromatic)
    * [`get_atom_is_chiral_center()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_is_chiral_center)
    * [`get_atom_is_in_aromatic_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_is_in_aromatic_one_hot)
    * [`get_atom_num_radical_electrons()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_num_radical_electrons)
    * [`get_atom_partial_charge()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_partial_charge)
    * [`get_atom_total_degree_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_total_degree_one_hot)
    * [`get_atom_total_num_Hs_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_total_num_Hs_one_hot)
    * [`get_atom_type_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_atom_type_one_hot)
    * [`get_bond_graph_distance_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_bond_graph_distance_one_hot)
    * [`get_bond_is_conjugated_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_bond_is_conjugated_one_hot)
    * [`get_bond_is_in_same_ring_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_bond_is_in_same_ring_one_hot)
    * [`get_bond_stereo_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_bond_stereo_one_hot)
    * [`get_bond_type_one_hot()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.get_bond_type_one_hot)
    * [`one_hot_encode()`](jaqpotpy.utils.md#jaqpotpy.utils.molecule_feature_utils.one_hot_encode)
  * [jaqpotpy.utils.pdbqt_utils module](jaqpotpy.utils.md#module-jaqpotpy.utils.pdbqt_utils)
    * [`convert_mol_to_pdbqt()`](jaqpotpy.utils.md#jaqpotpy.utils.pdbqt_utils.convert_mol_to_pdbqt)
    * [`convert_protein_to_pdbqt()`](jaqpotpy.utils.md#jaqpotpy.utils.pdbqt_utils.convert_protein_to_pdbqt)
    * [`pdbqt_to_pdb()`](jaqpotpy.utils.md#jaqpotpy.utils.pdbqt_utils.pdbqt_to_pdb)
  * [jaqpotpy.utils.pytorch_utils module](jaqpotpy.utils.md#module-jaqpotpy.utils.pytorch_utils)
    * [`to_torch_graph_data()`](jaqpotpy.utils.md#jaqpotpy.utils.pytorch_utils.to_torch_graph_data)
    * [`to_torch_graph_data_and_y()`](jaqpotpy.utils.md#jaqpotpy.utils.pytorch_utils.to_torch_graph_data_and_y)
    * [`to_torch_graph_data_array()`](jaqpotpy.utils.md#jaqpotpy.utils.pytorch_utils.to_torch_graph_data_array)
    * [`to_torch_graph_data_array_and_class_y()`](jaqpotpy.utils.md#jaqpotpy.utils.pytorch_utils.to_torch_graph_data_array_and_class_y)
    * [`to_torch_graph_data_array_and_regr_y()`](jaqpotpy.utils.md#jaqpotpy.utils.pytorch_utils.to_torch_graph_data_array_and_regr_y)
  * [jaqpotpy.utils.rdkit_utils module](jaqpotpy.utils.md#module-jaqpotpy.utils.rdkit_utils)
    * [`add_hydrogens_to_mol()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.add_hydrogens_to_mol)
    * [`apply_pdbfixer()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.apply_pdbfixer)
    * [`compute_all_ecfp()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_all_ecfp)
    * [`compute_all_pairs_shortest_path()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_all_pairs_shortest_path)
    * [`compute_charges()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_charges)
    * [`compute_contact_centroid()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_contact_centroid)
    * [`compute_ecfp_features()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_ecfp_features)
    * [`compute_pairwise_ring_info()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_pairwise_ring_info)
    * [`compute_ring_center()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_ring_center)
    * [`compute_ring_normal()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.compute_ring_normal)
    * [`get_contact_atom_indices()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.get_contact_atom_indices)
    * [`get_mol_subset()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.get_mol_subset)
    * [`get_xyz_from_mol()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.get_xyz_from_mol)
    * [`load_complex()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.load_complex)
    * [`load_molecule()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.load_molecule)
    * [`merge_molecules()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.merge_molecules)
    * [`merge_molecules_xyz()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.merge_molecules_xyz)
    * [`reduce_molecular_complex_to_contacts()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.reduce_molecular_complex_to_contacts)
    * [`write_molecule()`](jaqpotpy.utils.md#jaqpotpy.utils.rdkit_utils.write_molecule)
  * [jaqpotpy.utils.seeding module](jaqpotpy.utils.md#module-jaqpotpy.utils.seeding)
    * [`RNG`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RNG)
    * [`RandomNumberGenerator`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator)
      * [`RandomNumberGenerator.get_state()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.get_state)
      * [`RandomNumberGenerator.rand()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.rand)
      * [`RandomNumberGenerator.randint()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.randint)
      * [`RandomNumberGenerator.randn()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.randn)
      * [`RandomNumberGenerator.random_integers()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.random_integers)
      * [`RandomNumberGenerator.random_sample()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.random_sample)
      * [`RandomNumberGenerator.seed()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.seed)
      * [`RandomNumberGenerator.set_state()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.RandomNumberGenerator.set_state)
    * [`create_seed()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.create_seed)
    * [`hash_seed()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.hash_seed)
    * [`np_random()`](jaqpotpy.utils.md#jaqpotpy.utils.seeding.np_random)
  * [jaqpotpy.utils.types module](jaqpotpy.utils.md#module-jaqpotpy.utils.types)
  * [jaqpotpy.utils.url_utils module](jaqpotpy.utils.md#jaqpotpy-utils-url-utils-module)
  * [Module contents](jaqpotpy.utils.md#module-jaqpotpy.utils)

## Submodules

## jaqpotpy.jaqpot module

### *class* jaqpotpy.jaqpot.Jaqpot(base_url=None, create_logs=False)

Bases: `object`

Deploys sklearn models on Jaqpot.

Extended description of function.

### Parameters

base_url : The url on which Jaqpot services are deployed

#### api_key()

#### check_key()

#### chempot_predict(model, smiles, descriptors='mordred', doa=False)

Makes a prediction from a Chempot model

#### Parameters

model
: model is the id of the chempot model

smiles
: The input SMILES.

descriptors
: The descriptors of the model.

doa
: Whether the Domain of Applicability will be taken into account

#### Returns

tuple
: The predicted dataset (first item) and the predicted feature (second item)

#### deploy_XGBoost(model, X, y, title, description, algorithm, doa=None)

Deploys XGBoost model to Jaqpot.

Extended description of function.

#### Parameters

model
: model is a trained model that occurs from the XGBoost family of algorithms

X
: The dataframe that is used to train the model (X variables).

y
: The dataframe that is used to train the model (y variables).

title: String
: The title of the model

description: String
: The description of the model

algorithm: String
: The algorithm that the model implements

doa: pandas dataframe
: The dataset used to create the domain of applicability of the model

#### Returns

string
: The id of the model that uploaded

#### deploy_jaqpotpy_molecular_model(model, description: str, title: str = None)

#### deploy_sklearn(model, X, y, title, description, model_meta=False, doa=None)

Deploys sklearn model or pipeline to Jaqpot.

Extended description of function.

#### Parameters

model
: model is a trained model that occurs from the sklearn.linear_model family of algorithms

X
: The dataframe that is used to train the model (X variables).

y
: The dataframe that is used to train the model (y variables).

title: String
: The title of the model

description: String
: The description of the model

doa: pandas dataframe
: The dataset used to create the domain of applicability of the model

#### Returns

string
: The id of the model that uploaded

#### deploy_sklearn_unsupervised(model, X, title, description, model_meta=False, doa=None)

Deploys sklearn model or pipeline to Jaqpot.

Extended description of function.

#### Parameters

model
: model is a trained model that occurs from the sklearn.linear_model family of algorithms

X
: The dataframe that is used to train the model (X variables).

title: String
: The title of the model

description: String
: The description of the model

doa: pandas dataframe
: The dataset used to create the domain of applicability of the model

#### Returns

string
: The id of the model that uploaded

#### get_algorithms(start=None, max=None)

#### get_algorithms_classes(start=None, max=None)

#### get_dataset(dataset)

Retrieves a dataset.

#### Parameters

dataset: str
: The dataset’s ID.

#### Returns

pd.DataFrame()
: DataFrame of the dataset.

#### Note

Mazimum rows retrieved: 1000.

#### get_doa(model)

Retrieves model’s domain of applicability.

#### Parameters

model: str
: The model’s ID.

#### Returns

Object
: The model’s domain of applicability.

#### get_feature_by_id(feature)

Retrieves a Jaqpot feature.

#### Parameters

feature
: The feature’s ID.

#### Returns

Object
: The particular feature.

#### get_model_by_id(model)

Retrieves user’s model by ID.

#### Parameters

model
: The model’s ID.

#### Returns

Object
: The particular model.

#### get_models_by_tag(tag, minimum, maximum)

Retrieves models with a particular tag.

#### Parameters

tag: str
: The model’s tag.

minimum
: The index of the first model.

maximum
: The index of the last model.

#### Returns

Object
: The models of the organization.

#### get_models_by_tag_and_org(organization, tag, minimum, maximum)

Retrieves models of an organization with a particular tag.

#### Parameters

organization: str:
: The organization’s ID.

tag: str
: The model’s tag.

minimum
: The index of the first model.

maximum
: The index of the last model.

#### Returns

Object
: The models of the organization.

#### get_my_models(minimum, maximum)

Retrieves user’s models.

#### Parameters

minimum
: The index of the first model.

maximum
: The index of the last model.

#### Returns

Object
: The models of the user.

#### get_orgs_models(organization, minimum, maximum)

Retrieves organization’s models.

#### Parameters

organization: str
: The organization’s ID.

minimum
: The index of the first model.

maximum
: The index of the last model.

#### Returns

Object
: The models of the organization.

#### get_raw_model_by_id(model)

Retrieves raw model by ID.

#### Parameters

model
: The model’s ID.

Returns
Returns
——-
Object

> The particular model and the raw model.

#### login(username, password)

Logins on Jaqpot.

#### Parameters

username : username
password : password

#### my_info()

Prints user’s info

#### predict(df=None, modelId=None)

#### request_key(username, password)

Logins on Jaqpot.

#### Parameters

username : username
password : password

#### request_key_safe()

Logins on Jaqpot by hiding the users password.

#### set_api_key(api_key)

Set’s api key for authentication on Jaqpot.

#### Parameters

api_key : api_key can be retireved from the application after logged in

#### upload_dataset(df=None, id=None, title=None, description=None)

## Module contents
