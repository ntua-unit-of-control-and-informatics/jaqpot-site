# jaqpotpy.models package

## Subpackages

* [jaqpotpy.models.torch_geometric_models package](jaqpotpy.models.torch_geometric_models.md)
  * [Submodules](jaqpotpy.models.torch_geometric_models.md#submodules)
  * [jaqpotpy.models.torch_geometric_models.graph_neural_network module](jaqpotpy.models.torch_geometric_models.md#module-jaqpotpy.models.torch_geometric_models.graph_neural_network)
    * [`BaseGraphNetwork`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork)
      * [`BaseGraphNetwork.add_layer()`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork.add_layer)
      * [`BaseGraphNetwork.forward()`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork.forward)
      * [`BaseGraphNetwork.pooling_layer()`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork.pooling_layer)
    * [`GraphAttentionNetworkModel`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphAttentionNetworkModel)
    * [`GraphConvolutionNetworkModel`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphConvolutionNetworkModel)
    * [`GraphSageNetworkModel`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphSageNetworkModel)
    * [`GraphTransformerNetworkModel`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphTransformerNetworkModel)
    * [`pyg_to_onnx()`](jaqpotpy.models.torch_geometric_models.md#jaqpotpy.models.torch_geometric_models.graph_neural_network.pyg_to_onnx)
  * [Module contents](jaqpotpy.models.torch_geometric_models.md#module-jaqpotpy.models.torch_geometric_models)
* [jaqpotpy.models.torch_models package](jaqpotpy.models.torch_models.md)
  * [Submodules](jaqpotpy.models.torch_models.md#submodules)
  * [jaqpotpy.models.torch_models.smiles_sequence module](jaqpotpy.models.torch_models.md#module-jaqpotpy.models.torch_models.smiles_sequence)
    * [`SequenceLstmModel`](jaqpotpy.models.torch_models.md#jaqpotpy.models.torch_models.smiles_sequence.SequenceLstmModel)
      * [`SequenceLstmModel.forward()`](jaqpotpy.models.torch_models.md#jaqpotpy.models.torch_models.smiles_sequence.SequenceLstmModel.forward)
    * [`lstm_to_onnx()`](jaqpotpy.models.torch_models.md#jaqpotpy.models.torch_models.smiles_sequence.lstm_to_onnx)
  * [Module contents](jaqpotpy.models.torch_models.md#module-jaqpotpy.models.torch_models)
* [jaqpotpy.models.trainers package](jaqpotpy.models.trainers.md)
  * [Subpackages](jaqpotpy.models.trainers.md#subpackages)
    * [jaqpotpy.models.trainers.graph_trainers package](jaqpotpy.models.trainers.graph_trainers.md)
      * [Submodules](jaqpotpy.models.trainers.graph_trainers.md#submodules)
      * [jaqpotpy.models.trainers.graph_trainers.binary_trainer module](jaqpotpy.models.trainers.graph_trainers.md#module-jaqpotpy.models.trainers.graph_trainers.binary_trainer)
      * [jaqpotpy.models.trainers.graph_trainers.regression_trainer module](jaqpotpy.models.trainers.graph_trainers.md#module-jaqpotpy.models.trainers.graph_trainers.regression_trainer)
      * [Module contents](jaqpotpy.models.trainers.graph_trainers.md#module-jaqpotpy.models.trainers.graph_trainers)
    * [jaqpotpy.models.trainers.sequence_trainers package](jaqpotpy.models.trainers.sequence_trainers.md)
      * [Submodules](jaqpotpy.models.trainers.sequence_trainers.md#submodules)
      * [jaqpotpy.models.trainers.sequence_trainers.binary_trainer module](jaqpotpy.models.trainers.sequence_trainers.md#module-jaqpotpy.models.trainers.sequence_trainers.binary_trainer)
      * [Module contents](jaqpotpy.models.trainers.sequence_trainers.md#module-jaqpotpy.models.trainers.sequence_trainers)
  * [Submodules](jaqpotpy.models.trainers.md#submodules)
  * [jaqpotpy.models.trainers.base_trainer module](jaqpotpy.models.trainers.md#module-jaqpotpy.models.trainers.base_trainer)
    * [`TorchModelTrainer`](jaqpotpy.models.trainers.md#jaqpotpy.models.trainers.base_trainer.TorchModelTrainer)
      * [`TorchModelTrainer.evaluate()`](jaqpotpy.models.trainers.md#jaqpotpy.models.trainers.base_trainer.TorchModelTrainer.evaluate)
      * [`TorchModelTrainer.train()`](jaqpotpy.models.trainers.md#jaqpotpy.models.trainers.base_trainer.TorchModelTrainer.train)
  * [Module contents](jaqpotpy.models.trainers.md#module-jaqpotpy.models.trainers)

## Submodules

## jaqpotpy.models.base_classes module

### *class* jaqpotpy.models.base_classes.Model

Bases: `object`

Base class for all models in jaqpotpy.

Attributes:
: \_model (Any): The underlying model.
  \_doa (DOA): Domain of Applicability object.
  \_descriptors (MolecularFeaturizer): Molecular featurizer.
  \_X (Iterable[str]): Input features.
  \_Y (Iterable[str]): Output features.
  \_X_indices (Iterable[int]): Indices of input features.
  \_prediction (Any): Model predictions.
  \_probability (Any): Prediction probabilities.
  \_external (Any): External data.
  \_smiles (Any): SMILES representation of molecules.
  \_external_feats (Iterable[str]): External features.
  \_model_title (Any): Title of the model.
  \_modeling_task (Any): Description of the modeling task.
  \_library (Iterable[str]): Library used.
  \_version (Iterable[str]): Version of the model.
  \_jaqpotpy_version (Any): Version of jaqpotpy.
  \_jaqpotpy_docker (Any): Docker information for jaqpotpy.
  \_optimizer (Any): Optimizer used.

#### *property* X

Get or set the input features.

#### *property* Y

Get or set the output features.

#### *property* descriptors

Get or set the molecular featurizer.

#### *property* doa

Get or set the Domain of Applicability object.

#### *property* external_feats *: Iterable[str]*

Get or set the external features.

#### fit()

Fit the model to the data.

#### *property* jaqpotpy_docker

Get or set the Docker information for jaqpotpy.

#### *property* jaqpotpy_version

Get or set the version of jaqpotpy.

#### *property* library

Get or set the library used.

#### *property* model

Get or set the underlying model.

#### *property* model_title

Get or set the title of the model.

#### *property* modeling_task

Get or set the description of the modeling task.

#### *property* optimizer

Get or set the optimizer used.

#### predict(X)

Predict using the model.

Args:
: X (Any): Input data for prediction.

Returns:
: Any: Predictions for the input data.

#### *property* prediction

Get or set the model predictions.

#### *property* probability

Get or set the prediction probabilities.

#### *property* smiles

Get or set the SMILES representation of molecules.

#### *property* version

Get or set the version of the model.

## jaqpotpy.models.sklearn module

### *class* jaqpotpy.models.sklearn.SklearnModel(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset), model: Any, doa: [DOA](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA) | list | None = None, preprocess_x: BaseEstimator | List[BaseEstimator] | None = None, preprocess_y: BaseEstimator | List[BaseEstimator] | None = None, verbose: bool | None = True)

Bases: [`Model`](#jaqpotpy.models.base_classes.Model)

A class to represent a Scikit-learn model within the Jaqpot framework.

### Attributes

dataset
: The dataset used for training the model.

model
: The Scikit-learn model to be trained.

doa
: Domain of Applicability methods, by default None.

preprocess_x
: Preprocessors for the input features, by default None.

preprocess_y
: Preprocessors for the target variable, by default None.

random_seed
: Random seed for reproducibility, by default 1311.

preprocess_pipeline
: The pipeline that includes preprocessing steps.

pipeline
: The pipeline that includes preprocessing steps and the model.

trained_model
: The trained Scikit-learn model.

transformers_y
: Dictionary to store transformers for the target variable.

libraries
: List of installed libraries.

jaqpotpy_version
: Version of the Jaqpotpy library.

task
: The task type (e.g., regression, classification).

initial_types_preprocessor
: Initial types for ONNX conversion of the preprocessor.

initial_types
: Initial types for ONNX conversion of the model.

onnx_preprocessor
: The ONNX preprocessor model.

onnx_model
: The ONNX model.

type
: The type of the model.

independentFeatures
: List of independent features.

dependentFeatures
: List of dependent features.

featurizers
: List of featurizers for the model.

preprocessors
: List of preprocessors for the model.

test_scores
: Dictionary to store test scores.

train_scores
: Dictionary to store training scores.

average_cross_val_scores
: Dictionary to store average cross-validation scores.

cross_val_scores
: Dictionary to store cross-validation scores.

randomization_test_results
: Dictionary to store randomization test results.

scores
: Object to store model scores.

selected_features
: List of selected features.

### Methods

\_dtypes_to_jaqpotypes():
: Converts data types to Jaqpot feature types.

\_extract_attributes(trained_class, trained_class_type):
: Extracts attributes from a trained class.

\_add_transformer(added_class, added_class_type):
: Adds a class to the transformers list.

\_map_onnx_dtype(dtype, shape=1):
: Maps data types to ONNX tensor types.

\_create_onnx_preprocessor(onnx_options=None):
: Creates an ONNX preprocessor model.

\_create_onnx_model(onnx_options=None):
: Creates an ONNX model.

\_labels_are_strings(y):
: Checks if labels are strings.

fit(onnx_options=None):
: Fits the model to the dataset.

predict(dataset):
: Predicts using the trained model.

predict_proba(dataset):
: Predicts probabilities using the trained model.

predict_onnx(dataset):
: Predicts using the ONNX model.

predict_proba_onnx(dataset):
: Predicts probabilities using the ONNX model.

predict_doa(dataset):
: Predicts the Domain of Applicability (DOA).

deploy_on_jaqpot(jaqpot, name, description, visibility):
: Deploys the model on the Jaqpot platform.

\_create_jaqpot_scores(fit_scores, score_type=”train”, n_output=1, folds=1):
: Creates Jaqpot scores.

check_preprocessor(preprocessor_list, feat_type):
: Checks if the preprocessors are valid.

cross_validate(dataset, n_splits=5):
: Performs cross-validation on the dataset.

evaluate(dataset):
: Evaluates the model on a given dataset.

randomization_test(train_dataset, test_dataset, n_iters=10):
: Performs a randomization test.

\_get_metrics(y_true, y_pred):
: Computes evaluation metrics.

\_get_classification_metrics(y_true, y_pred):
: Computes classification metrics.

\_get_regression_metrics(y_true, y_pred):
: Computes regression metrics.

#### *static* check_preprocessor(preprocessor_list: List, feat_type: str)

Check if the preprocessors are valid.

Args:
: preprocessor_list (List): The list of preprocessors.
  feat_type (str): The type of features (‘X’ or ‘y’).

Raises:
: ValueError: If a preprocessor is not valid.

#### cross_validate(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset), n_splits=5, random_seed=42)

Perform cross-validation.

Args:
: dataset (JaqpotTabularDataset): The dataset for cross-validation.
  n_splits (int): The number of splits.

Returns:
: Cross-validation scores.

#### deploy_on_jaqpot(jaqpot, name, description, visibility: ModelVisibility)

Deploy the model on Jaqpot.

Args:
: jaqpot: The Jaqpot instance.
  name (str): The name of the model.
  description (str): The description of the model.
  visibility (ModelVisibility): The visibility of the model.

#### evaluate(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset))

Evaluate the model on a dataset.

Args:
: dataset (JaqpotTabularDataset): The dataset for evaluation.

Returns:
: Evaluation scores.

#### fit(onnx_options: Dict | None = None)

Fit the model to the dataset.

Args:
: onnx_options (Optional[Dict]): Options for ONNX conversion.

#### predict(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset), \*\*kwargs)

Predict using the trained model.

Args:
: dataset (JaqpotTabularDataset): The dataset for prediction.

Returns:
: Predictions.

#### predict_doa(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset))

Predict the Domain of Applicability (DOA).

Args:
: dataset (JaqpotTabularDataset): The dataset for prediction.

Returns:
: DOA results.

#### predict_onnx(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset))

Predict using the ONNX model.

Args:
: dataset (JaqpotTabularDataset): The dataset for prediction.

Returns:
: ONNX predictions.

#### predict_proba(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset))

Predict probabilities using the trained model.

Args:
: dataset (JaqpotTabularDataset): The dataset for prediction.

Returns:
: List of probabilities.

#### predict_proba_onnx(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset))

Predict probabilities using the ONNX model.

Args:
: dataset (JaqpotTabularDataset): The dataset for prediction.

Returns:
: List of ONNX probabilities.

#### randomization_test(train_dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset), test_dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset), n_iters=10)

Perform a randomization test.

Args:
: train_dataset (JaqpotTabularDataset): The training dataset.
  test_dataset (JaqpotTabularDataset): The testing dataset.
  n_iters (int): The number of iterations.

Returns:
: Randomization test results.

## jaqpotpy.models.xgboost module

### *class* jaqpotpy.models.xgboost.XGBoostModel(dataset: [JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset), model: Any, doa: [DOA](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA) | None = None, preprocess_x: BaseEstimator | List[BaseEstimator] | None = None, preprocess_y: BaseEstimator | List[BaseEstimator] | None = None, random_seed: int | None = 1311)

Bases: [`SklearnModel`](#jaqpotpy.models.sklearn.SklearnModel)

XGBoostModel class for handling XGBoost models within the Jaqpotpy framework.

Attributes:
: dataset (JaqpotTabularDataset): The dataset used for training the model.
  model (Any): The XGBoost model instance.
  doa (Optional[DOA or list]): Domain of Applicability (DOA) methods.
  preprocess_x (Optional[Union[BaseEstimator, List[BaseEstimator]]]): Preprocessing steps for input features.
  preprocess_y (Optional[Union[BaseEstimator, List[BaseEstimator]]]): Preprocessing steps for target features.

#### fit(eval_set: List[[JaqpotTabularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.JaqpotTabularDataset)] | None = None, onnx_options: Dict | None = None)

Fit the model to the dataset.

Args:
: onnx_options (Optional[Dict]): Options for ONNX conversion.

## Module contents
