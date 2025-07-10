# jaqpotpy package

## Subpackages

* [jaqpotpy.api package](jaqpotpy.api.md)
  * [Subpackages](jaqpotpy.api.md#subpackages)
    * [jaqpotpy.api.openapi package](jaqpotpy.api.openapi.md)
      * [Subpackages](jaqpotpy.api.openapi.md#subpackages)
      * [Submodules](jaqpotpy.api.openapi.md#submodules)
      * [jaqpotpy.api.openapi.api_client module](jaqpotpy.api.openapi.md#jaqpotpy-api-openapi-api-client-module)
      * [jaqpotpy.api.openapi.api_response module](jaqpotpy.api.openapi.md#jaqpotpy-api-openapi-api-response-module)
      * [jaqpotpy.api.openapi.configuration module](jaqpotpy.api.openapi.md#jaqpotpy-api-openapi-configuration-module)
      * [jaqpotpy.api.openapi.exceptions module](jaqpotpy.api.openapi.md#jaqpotpy-api-openapi-exceptions-module)
      * [jaqpotpy.api.openapi.rest module](jaqpotpy.api.openapi.md#jaqpotpy-api-openapi-rest-module)
      * [Module contents](jaqpotpy.api.openapi.md#module-contents)
  * [Submodules](jaqpotpy.api.md#submodules)
  * [jaqpotpy.api.get_installed_libraries module](jaqpotpy.api.md#module-jaqpotpy.api.get_installed_libraries)
    * [`get_installed_libraries()`](jaqpotpy.api.md#jaqpotpy.api.get_installed_libraries.get_installed_libraries)
  * [jaqpotpy.api.jaqpot_api_client module](jaqpotpy.api.md#jaqpotpy-api-jaqpot-api-client-module)
  * [jaqpotpy.api.jaqpot_api_client_builder module](jaqpotpy.api.md#jaqpotpy-api-jaqpot-api-client-builder-module)
  * [jaqpotpy.api.jaqpot_api_http_client module](jaqpotpy.api.md#jaqpotpy-api-jaqpot-api-http-client-module)
  * [jaqpotpy.api.model_to_b64encoding module](jaqpotpy.api.md#module-jaqpotpy.api.model_to_b64encoding)
    * [`file_to_b64encoding()`](jaqpotpy.api.md#jaqpotpy.api.model_to_b64encoding.file_to_b64encoding)
    * [`model_to_b64encoding()`](jaqpotpy.api.md#jaqpotpy.api.model_to_b64encoding.model_to_b64encoding)
  * [Module contents](jaqpotpy.api.md#module-jaqpotpy.api)
* [jaqpotpy.colorlog package](jaqpotpy.colorlog.md)
  * [Submodules](jaqpotpy.colorlog.md#submodules)
  * [jaqpotpy.colorlog.colorlog module](jaqpotpy.colorlog.md#module-jaqpotpy.colorlog.colorlog)
    * [`ColoredFormatter`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.colorlog.ColoredFormatter)
      * [`ColoredFormatter.color()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.colorlog.ColoredFormatter.color)
      * [`ColoredFormatter.format()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.colorlog.ColoredFormatter.format)
    * [`LevelFormatter`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.colorlog.LevelFormatter)
      * [`LevelFormatter.format()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.colorlog.LevelFormatter.format)
    * [`TTYColoredFormatter`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.colorlog.TTYColoredFormatter)
      * [`TTYColoredFormatter.color()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.colorlog.TTYColoredFormatter.color)
  * [jaqpotpy.colorlog.escape_codes module](jaqpotpy.colorlog.md#module-jaqpotpy.colorlog.escape_codes)
    * [`parse_colors()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.escape_codes.parse_colors)
  * [jaqpotpy.colorlog.logging module](jaqpotpy.colorlog.md#module-jaqpotpy.colorlog.logging)
    * [`basicConfig()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.logging.basicConfig)
    * [`ensure_configured()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.logging.ensure_configured)
  * [Module contents](jaqpotpy.colorlog.md#module-jaqpotpy.colorlog)
    * [`ColoredFormatter`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.ColoredFormatter)
      * [`ColoredFormatter.color()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.ColoredFormatter.color)
      * [`ColoredFormatter.format()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.ColoredFormatter.format)
    * [`LevelFormatter`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.LevelFormatter)
      * [`LevelFormatter.format()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.LevelFormatter.format)
    * [`StreamHandler`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.StreamHandler)
      * [`StreamHandler.emit()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.StreamHandler.emit)
      * [`StreamHandler.flush()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.StreamHandler.flush)
      * [`StreamHandler.setStream()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.StreamHandler.setStream)
      * [`StreamHandler.terminator`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.StreamHandler.terminator)
    * [`TTYColoredFormatter`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.TTYColoredFormatter)
      * [`TTYColoredFormatter.color()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.TTYColoredFormatter.color)
    * [`basicConfig()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.basicConfig)
    * [`critical()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.critical)
    * [`debug()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.debug)
    * [`error()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.error)
    * [`exception()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.exception)
    * [`getLogger()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.getLogger)
    * [`info()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.info)
    * [`log()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.log)
    * [`warning()`](jaqpotpy.colorlog.md#jaqpotpy.colorlog.warning)
* [jaqpotpy.datasets package](jaqpotpy.datasets.md)
  * [Subpackages](jaqpotpy.datasets.md#subpackages)
  * [Submodules](jaqpotpy.datasets.md#submodules)
  * [jaqpotpy.datasets.dataset_base module](jaqpotpy.datasets.md#module-jaqpotpy.datasets.dataset_base)
    * [`BaseDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset)
      * [`BaseDataset.create()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.create)
      * [`BaseDataset.dataset_name`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.dataset_name)
      * [`BaseDataset.df_astype()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.df_astype)
      * [`BaseDataset.load()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.load)
      * [`BaseDataset.save()`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.save)
      * [`BaseDataset.task`](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.BaseDataset.task)
  * [jaqpotpy.datasets.graph_pyg_dataset module](jaqpotpy.datasets.md#module-jaqpotpy.datasets.graph_pyg_dataset)
    * [`SmilesGraphDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.graph_pyg_dataset.SmilesGraphDataset)
      * [`SmilesGraphDataset.get_num_edge_features()`](jaqpotpy.datasets.md#jaqpotpy.datasets.graph_pyg_dataset.SmilesGraphDataset.get_num_edge_features)
      * [`SmilesGraphDataset.get_num_node_features()`](jaqpotpy.datasets.md#jaqpotpy.datasets.graph_pyg_dataset.SmilesGraphDataset.get_num_node_features)
      * [`SmilesGraphDataset.precompute_featurization()`](jaqpotpy.datasets.md#jaqpotpy.datasets.graph_pyg_dataset.SmilesGraphDataset.precompute_featurization)
  * [jaqpotpy.datasets.jaqpotpy_dataset module](jaqpotpy.datasets.md#jaqpotpy-datasets-jaqpotpy-dataset-module)
  * [jaqpotpy.datasets.tokenizer_dataset module](jaqpotpy.datasets.md#module-jaqpotpy.datasets.tokenizer_dataset)
    * [`SmilesSeqDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.tokenizer_dataset.SmilesSeqDataset)
      * [`SmilesSeqDataset.get_feature_dim()`](jaqpotpy.datasets.md#jaqpotpy.datasets.tokenizer_dataset.SmilesSeqDataset.get_feature_dim)
  * [Module contents](jaqpotpy.datasets.md#module-jaqpotpy.datasets)
    * [`JaqpotTabularDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset)
      * [`JaqpotTabularDataset.copy()`](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset.copy)
      * [`JaqpotTabularDataset.create()`](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset.create)
      * [`JaqpotTabularDataset.featurizer_name`](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset.featurizer_name)
      * [`JaqpotTabularDataset.select_features()`](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset.select_features)
    * [`SmilesGraphDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.SmilesGraphDataset)
      * [`SmilesGraphDataset.get_num_edge_features()`](jaqpotpy.datasets.md#jaqpotpy.datasets.SmilesGraphDataset.get_num_edge_features)
      * [`SmilesGraphDataset.get_num_node_features()`](jaqpotpy.datasets.md#jaqpotpy.datasets.SmilesGraphDataset.get_num_node_features)
      * [`SmilesGraphDataset.precompute_featurization()`](jaqpotpy.datasets.md#jaqpotpy.datasets.SmilesGraphDataset.precompute_featurization)
    * [`SmilesSeqDataset`](jaqpotpy.datasets.md#jaqpotpy.datasets.SmilesSeqDataset)
      * [`SmilesSeqDataset.get_feature_dim()`](jaqpotpy.datasets.md#jaqpotpy.datasets.SmilesSeqDataset.get_feature_dim)
* [jaqpotpy.descriptors package](jaqpotpy.descriptors.md)
  * [Subpackages](jaqpotpy.descriptors.md#subpackages)
    * [jaqpotpy.descriptors.graph package](jaqpotpy.descriptors.graph.md)
      * [Submodules](jaqpotpy.descriptors.graph.md#submodules)
      * [jaqpotpy.descriptors.graph.graph_featurizer module](jaqpotpy.descriptors.graph.md#module-jaqpotpy.descriptors.graph.graph_featurizer)
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
      * [jaqpotpy.descriptors.tokenizer.smiles_tokenizer module](jaqpotpy.descriptors.tokenizer.md#module-jaqpotpy.descriptors.tokenizer.smiles_tokenizer)
      * [Module contents](jaqpotpy.descriptors.tokenizer.md#module-jaqpotpy.descriptors.tokenizer)
  * [Submodules](jaqpotpy.descriptors.md#submodules)
  * [jaqpotpy.descriptors.base_classes module](jaqpotpy.descriptors.md#module-jaqpotpy.descriptors.base_classes)
    * [`AbstractFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.AbstractFeaturizer)
      * [`AbstractFeaturizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.AbstractFeaturizer.featurize)
    * [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)
      * [`MolecularFeaturizer.featurize()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer.featurize)
      * [`MolecularFeaturizer.featurize_dataframe()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer.featurize_dataframe)
    * [`get_print_threshold()`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.get_print_threshold)
  * [Module contents](jaqpotpy.descriptors.md#module-jaqpotpy.descriptors)
* [jaqpotpy.doa package](jaqpotpy.doa.md)
  * [Subpackages](jaqpotpy.doa.md#subpackages)
  * [Submodules](jaqpotpy.doa.md#submodules)
  * [jaqpotpy.doa.doa module](jaqpotpy.doa.md#module-jaqpotpy.doa.doa)
    * [`BoundingBox`](jaqpotpy.doa.md#jaqpotpy.doa.doa.BoundingBox)
      * [`BoundingBox.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.BoundingBox.fit)
      * [`BoundingBox.get_attributes()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.BoundingBox.get_attributes)
      * [`BoundingBox.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.BoundingBox.predict)
    * [`CityBlock`](jaqpotpy.doa.md#jaqpotpy.doa.doa.CityBlock)
      * [`CityBlock.calculate_distance()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.CityBlock.calculate_distance)
      * [`CityBlock.calculate_threshold()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.CityBlock.calculate_threshold)
      * [`CityBlock.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.CityBlock.fit)
      * [`CityBlock.get_attributes()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.CityBlock.get_attributes)
      * [`CityBlock.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.CityBlock.predict)
    * [`DOA`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA)
      * [`DOA.data`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.data)
      * [`DOA.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.fit)
      * [`DOA.get_attributes()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.get_attributes)
      * [`DOA.in_doa`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.in_doa)
      * [`DOA.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA.predict)
    * [`KernelBased`](jaqpotpy.doa.md#jaqpotpy.doa.doa.KernelBased)
      * [`KernelBased.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.KernelBased.fit)
      * [`KernelBased.get_attributes()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.KernelBased.get_attributes)
      * [`KernelBased.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.KernelBased.predict)
    * [`Leverage`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage)
      * [`Leverage.calculate_matrix()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.calculate_matrix)
      * [`Leverage.calculate_threshold()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.calculate_threshold)
      * [`Leverage.doa_matrix`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.doa_matrix)
      * [`Leverage.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.fit)
      * [`Leverage.get_attributes()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.get_attributes)
      * [`Leverage.h_star`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.h_star)
      * [`Leverage.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Leverage.predict)
    * [`Mahalanobis`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Mahalanobis)
      * [`Mahalanobis.calculate_distance()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Mahalanobis.calculate_distance)
      * [`Mahalanobis.calculate_threshold()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Mahalanobis.calculate_threshold)
      * [`Mahalanobis.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Mahalanobis.fit)
      * [`Mahalanobis.get_attributes()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Mahalanobis.get_attributes)
      * [`Mahalanobis.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.Mahalanobis.predict)
    * [`MeanVar`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar)
      * [`MeanVar.fit()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.fit)
      * [`MeanVar.get_attributes()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.get_attributes)
      * [`MeanVar.predict()`](jaqpotpy.doa.md#jaqpotpy.doa.doa.MeanVar.predict)
  * [Module contents](jaqpotpy.doa.md#module-jaqpotpy.doa)
* [jaqpotpy.exceptions package](jaqpotpy.exceptions.md)
  * [Submodules](jaqpotpy.exceptions.md#submodules)
  * [jaqpotpy.exceptions.exceptions module](jaqpotpy.exceptions.md#module-jaqpotpy.exceptions.exceptions)
    * [`JaqpotApiException`](jaqpotpy.exceptions.md#jaqpotpy.exceptions.exceptions.JaqpotApiException)
    * [`JaqpotPredictionFailureException`](jaqpotpy.exceptions.md#jaqpotpy.exceptions.exceptions.JaqpotPredictionFailureException)
    * [`JaqpotPredictionTimeoutException`](jaqpotpy.exceptions.md#jaqpotpy.exceptions.exceptions.JaqpotPredictionTimeoutException)
  * [Module contents](jaqpotpy.exceptions.md#module-jaqpotpy.exceptions)
* [jaqpotpy.helpers package](jaqpotpy.helpers.md)
  * [Submodules](jaqpotpy.helpers.md#submodules)
  * [jaqpotpy.helpers.logging module](jaqpotpy.helpers.md#module-jaqpotpy.helpers.logging)
    * [`init_logger()`](jaqpotpy.helpers.md#jaqpotpy.helpers.logging.init_logger)
  * [Module contents](jaqpotpy.helpers.md#module-jaqpotpy.helpers)
* [jaqpotpy.models package](jaqpotpy.models.md)
  * [Subpackages](jaqpotpy.models.md#subpackages)
    * [jaqpotpy.models.torch_geometric_models package](jaqpotpy.models.torch_geometric_models.md)
      * [Submodules](jaqpotpy.models.torch_geometric_models.md#submodules)
      * [jaqpotpy.models.torch_geometric_models.graph_neural_network module](jaqpotpy.models.torch_geometric_models.md#module-jaqpotpy.models.torch_geometric_models.graph_neural_network)
      * [Module contents](jaqpotpy.models.torch_geometric_models.md#module-jaqpotpy.models.torch_geometric_models)
    * [jaqpotpy.models.torch_models package](jaqpotpy.models.torch_models.md)
      * [Submodules](jaqpotpy.models.torch_models.md#submodules)
      * [jaqpotpy.models.torch_models.smiles_sequence module](jaqpotpy.models.torch_models.md#module-jaqpotpy.models.torch_models.smiles_sequence)
      * [Module contents](jaqpotpy.models.torch_models.md#module-jaqpotpy.models.torch_models)
    * [jaqpotpy.models.trainers package](jaqpotpy.models.trainers.md)
      * [Subpackages](jaqpotpy.models.trainers.md#subpackages)
      * [Submodules](jaqpotpy.models.trainers.md#submodules)
      * [jaqpotpy.models.trainers.base_trainer module](jaqpotpy.models.trainers.md#module-jaqpotpy.models.trainers.base_trainer)
      * [Module contents](jaqpotpy.models.trainers.md#module-jaqpotpy.models.trainers)
  * [Submodules](jaqpotpy.models.md#submodules)
  * [jaqpotpy.models.base_classes module](jaqpotpy.models.md#module-jaqpotpy.models.base_classes)
    * [`Model`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model)
      * [`Model.X`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.X)
      * [`Model.Y`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.Y)
      * [`Model.descriptors`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.descriptors)
      * [`Model.doa`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.doa)
      * [`Model.external_feats`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.external_feats)
      * [`Model.fit()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.fit)
      * [`Model.jaqpotpy_docker`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.jaqpotpy_docker)
      * [`Model.jaqpotpy_version`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.jaqpotpy_version)
      * [`Model.library`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.library)
      * [`Model.model`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.model)
      * [`Model.model_title`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.model_title)
      * [`Model.modeling_task`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.modeling_task)
      * [`Model.optimizer`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.optimizer)
      * [`Model.predict()`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.predict)
      * [`Model.prediction`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.prediction)
      * [`Model.probability`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.probability)
      * [`Model.smiles`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.smiles)
      * [`Model.version`](jaqpotpy.models.md#jaqpotpy.models.base_classes.Model.version)
  * [jaqpotpy.models.sklearn module](jaqpotpy.models.md#module-jaqpotpy.models.sklearn)
    * [`SklearnModel`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel)
      * [`SklearnModel.check_preprocessor()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.check_preprocessor)
      * [`SklearnModel.cross_validate()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.cross_validate)
      * [`SklearnModel.deploy_on_jaqpot()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.deploy_on_jaqpot)
      * [`SklearnModel.evaluate()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.evaluate)
      * [`SklearnModel.fit()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.fit)
      * [`SklearnModel.predict()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.predict)
      * [`SklearnModel.predict_doa()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.predict_doa)
      * [`SklearnModel.predict_onnx()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.predict_onnx)
      * [`SklearnModel.predict_proba()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.predict_proba)
      * [`SklearnModel.predict_proba_onnx()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.predict_proba_onnx)
      * [`SklearnModel.randomization_test()`](jaqpotpy.models.md#jaqpotpy.models.sklearn.SklearnModel.randomization_test)
  * [jaqpotpy.models.xgboost module](jaqpotpy.models.md#module-jaqpotpy.models.xgboost)
    * [`XGBoostModel`](jaqpotpy.models.md#jaqpotpy.models.xgboost.XGBoostModel)
      * [`XGBoostModel.fit()`](jaqpotpy.models.md#jaqpotpy.models.xgboost.XGBoostModel.fit)
  * [Module contents](jaqpotpy.models.md#module-jaqpotpy.models)
* [jaqpotpy.preprocessors package](jaqpotpy.preprocessors.md)
  * [Submodules](jaqpotpy.preprocessors.md#submodules)
  * [jaqpotpy.preprocessors.custom_one_hot_encoder module](jaqpotpy.preprocessors.md#jaqpotpy-preprocessors-custom-one-hot-encoder-module)
  * [Module contents](jaqpotpy.preprocessors.md#module-jaqpotpy.preprocessors)
* [jaqpotpy.utils package](jaqpotpy.utils.md)
  * [Submodules](jaqpotpy.utils.md#submodules)
  * [jaqpotpy.utils.data_utils module](jaqpotpy.utils.md#jaqpotpy-utils-data-utils-module)
  * [jaqpotpy.utils.fragment_utils module](jaqpotpy.utils.md#jaqpotpy-utils-fragment-utils-module)
  * [jaqpotpy.utils.geometry_utils module](jaqpotpy.utils.md#jaqpotpy-utils-geometry-utils-module)
  * [jaqpotpy.utils.installed_packages module](jaqpotpy.utils.md#jaqpotpy-utils-installed-packages-module)
  * [jaqpotpy.utils.molecule_feature_utils module](jaqpotpy.utils.md#jaqpotpy-utils-molecule-feature-utils-module)
  * [jaqpotpy.utils.pdbqt_utils module](jaqpotpy.utils.md#jaqpotpy-utils-pdbqt-utils-module)
  * [jaqpotpy.utils.pytorch_utils module](jaqpotpy.utils.md#jaqpotpy-utils-pytorch-utils-module)
  * [jaqpotpy.utils.rdkit_utils module](jaqpotpy.utils.md#jaqpotpy-utils-rdkit-utils-module)
  * [jaqpotpy.utils.seeding module](jaqpotpy.utils.md#jaqpotpy-utils-seeding-module)
  * [jaqpotpy.utils.types module](jaqpotpy.utils.md#jaqpotpy-utils-types-module)
  * [jaqpotpy.utils.url_utils module](jaqpotpy.utils.md#jaqpotpy-utils-url-utils-module)
  * [Module contents](jaqpotpy.utils.md#module-jaqpotpy.utils)

## Submodules

## jaqpotpy.jaqpot module

### *class* jaqpotpy.jaqpot.Jaqpot(base_url=None, app_url=None, login_url=None, api_url=None, keycloak_realm=None, keycloak_client_id=None, api_key=None, api_secret=None, create_logs=False)

Bases: `object`

Deploys sklearn and PyTorch models on Jaqpot.

This class provides methods to log in to Jaqpot using Keycloak and deploy
machine learning models (sklearn and PyTorch) on the Jaqpot platform.

### Parameters

base_url
: The base URL on which Jaqpot services are deployed. Default is “[https://jaqpot.org](https://jaqpot.org)”.

app_url
: The URL for the Jaqpot application. If not provided, it is derived from the base URL.

login_url
: The URL for the Jaqpot login. If not provided, it is derived from the base URL.

api_url
: The URL for the Jaqpot API. If not provided, it is derived from the base URL.

keycloak_realm
: The Keycloak realm name. Default is “jaqpot”.

keycloak_client_id
: The Keycloak client ID. Default is “jaqpot-client”.

api_key
: API key for authentication. If provided along with api_secret, API key authentication will be used instead of OAuth.
  Can also be set via JAQPOT_API_KEY environment variable.

api_secret
: API secret for authentication. Required when using API key authentication.
  Can also be set via JAQPOT_API_SECRET environment variable.

create_logs
: Whether to create logs. Default is False.

#### deploy_docker_model(model: DockerModel, name: str, description: str, visibility: ModelVisibility) → None

Deploys a Docker-based model on Jaqpot.

This method registers a Docker-encapsulated machine learning model on the Jaqpot platform,
allowing it to be accessed via the Jaqpot API.

Args:
: model (DockerModel):
  : The Docker-based model to be deployed. The model must contain attributes such as:
    - jaqpotpy_version (str): The version of JaqpotPy used.
    - docker_config (DockerConfig): The Docker container configuration.
    - dependent_features (List[Feature]): The output features of the model.
    - independent_features (List[Feature]): The input features of the model.
  <br/>
  name (str):
  : The name of the model to be displayed on Jaqpot.
  <br/>
  description (str):
  : A short textual description of the model.
  <br/>
  visibility (ModelVisibility):
  : The access level of the model (e.g., public, private, or restricted to an organization).

Returns:
: None

Raises:
: ValueError: If any of the required parameters are invalid or missing.
  JaqpotAPIError: If the deployment request fails due to an API issue.

#### deploy_sklearn_model(model, name, description, visibility: ModelVisibility)

Deploy an sklearn model on Jaqpot.

#### Parameters

model
: The sklearn model to be deployed. The model should have attributes
  like onnx_model, onnx_preprocessor, type, jaqpotpy_version,
  doa_data, libraries, dependentFeatures, independentFeatures,
  selected_features, featurizers, preprocessors, and scores.

name
: The name of the model.

description
: A description of the model.

visibility
: The visibility of the model (ModelVisibility.PUBLIC, ModelVisibility.PRIVATE, or ModelVisibility.ORG_SHARED).

#### Returns

None

#### deploy_torch_model(onnx_model, featurizer, name, description, target_name, visibility: ModelVisibility, task)

Deploy a PyTorch model on Jaqpot.

#### Parameters

onnx_model
: The ONNX model to be deployed.

featurizer
: The featurizer used for preprocessing. The featurizer should have a method get_dict().

name
: The name of the model.

description
: A description of the model.

target_name
: The name of the target feature.

visibility
: The visibility of the model (ModelVisibility.PUBLIC, ModelVisibility.PRIVATE, or ModelVisibility.ORG_SHARED).

task
: The task type (e.g., ‘binary_classification’, ‘regression’, ‘multiclass_classification’).

#### Returns

None

#### deploy_torch_onnx_model(model: TorchONNXModel, name: str, description: str, visibility: ModelVisibility)

Deploy a Torch model on Jaqpot.

#### Parameters

model
: The model to be deployed. Must have ONNX and metadata.

name
: The name of the model.

description
: Description of the model.

visibility
: ‘public’ or ‘private’

#### Returns

None

#### download_model(model_id: int, cache: bool = True)

Download a model from Jaqpot platform for local use.

Args:
: model_id (int): The ID of the model to download
  cache (bool): Whether to cache the offline model

Returns:
: Dict containing model metadata and ONNX bytes

#### login()

Log in to Jaqpot using Keycloak.

This method opens a browser window for the user to log in via Keycloak,
then exchanges the authorization code for an access token.

#### Returns

None

#### *property* model_downloader

Access to model downloader functionality for downloading models locally.

Returns:
: JaqpotModelDownloader: Instance for model download operations

#### *property* offline_model_predictor

Access to offline model prediction functionality.

Returns:
: OfflineModelPredictor: Instance for making predictions with offline models

#### predict_local(model_data, input)

Make predictions using a locally offline model.

Args:
: model_data: Either model_id (str) or model data dict from download_model
  input: Input data for prediction (numpy array, list, or dict)

Returns:
: PredictionResponse with predictions in same format as Jaqpot API

## Module contents
