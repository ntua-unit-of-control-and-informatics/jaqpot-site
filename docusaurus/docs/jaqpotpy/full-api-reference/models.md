<a id="base_classes"></a>

# base\_classes

<a id="__init__"></a>

# \_\_init\_\_

<a id="xgboost"></a>

# xgboost

<a id="sklearn"></a>

# sklearn

<a id="sklearn.SklearnModel"></a>

## SklearnModel Objects

```python
class SklearnModel(Model)
```

A class to represent a Scikit-learn model within the Jaqpot framework.

Attributes
----------
dataset : JaqpotpyDataset
    The dataset used for training the model.
model : Any
    The Scikit-learn model to be trained.
doa : Optional[Union[DOA, list]], optional
    Domain of Applicability methods, by default None.
preprocess_x : Optional[Union[BaseEstimator, List[BaseEstimator]]], optional
    Preprocessors for the input features, by default None.
preprocess_y : Optional[Union[BaseEstimator, List[BaseEstimator]]], optional
    Preprocessors for the target variable, by default None.
random_seed : Optional[int], optional
    Random seed for reproducibility, by default 1311.
pipeline : sklearn.pipeline.Pipeline
    The pipeline that includes preprocessing steps and the model.
trained_model : Any
    The trained Scikit-learn model.
transformers_y : dict
    Dictionary to store transformers for the target variable.
libraries : list
    List of installed libraries.
jaqpotpy_version : str
    Version of the Jaqpotpy library.
task : str
    The task type (e.g., regression, classification).
initial_types : list
    Initial types for ONNX conversion.
onnx_model : onnx.ModelProto
    The ONNX model.
type : ModelType
    The type of the model.
independentFeatures : list
    List of independent features.
dependentFeatures : list
    List of dependent features.
extra_config : ModelExtraConfig
    Extra configuration for the model.
test_scores : dict
    Dictionary to store test scores.
train_scores : dict
    Dictionary to store training scores.
average_cross_val_scores : dict
    Dictionary to store average cross-validation scores.
cross_val_scores : dict
    Dictionary to store cross-validation scores.
randomization_test_results : dict
    Dictionary to store randomization test results.

Methods
-------
_dtypes_to_jaqpotypes():
    Converts data types to Jaqpot feature types.
_extract_attributes(trained_class, trained_class_type):
    Extracts attributes from a trained class.
_add_class_to_extraconfig(added_class, added_class_type):
    Adds a class to the extra configuration.
_map_onnx_dtype(dtype, shape=1):
    Maps data types to ONNX tensor types.
_create_onnx(onnx_options=None):
    Creates an ONNX model.
fit(onnx_options=None):
    Fits the model to the dataset.
predict(dataset):
    Predicts using the trained model.
predict_proba(dataset):
    Predicts probabilities using the trained model.
predict_onnx(dataset):
    Predicts using the ONNX model.
predict_proba_onnx(dataset):
    Predicts probabilities using the ONNX model.
deploy_on_jaqpot(jaqpot, name, description, visibility):
    Deploys the model on the Jaqpot platform.
check_preprocessor(preprocessor_list, feat_type):
    Checks if the preprocessors are valid.
cross_validate(dataset, n_splits=5):
    Performs cross-validation on the dataset.
evaluate(dataset):
    Evaluates the model on a given dataset.
randomization_test(train_dataset, test_dataset, n_iters=10):
    Performs a randomization test.
_get_metrics(y_true, y_pred):
    Computes evaluation metrics.
_get_classification_metrics(y_true, y_pred, binary=True):
    Computes classification metrics.
_get_regression_metrics(y_true, y_pred):
    Computes regression metrics.

<a id="torch_geometric_models"></a>

# torch\_geometric\_models

<a id="torch_geometric_models.graph_neural_network"></a>

# torch\_geometric\_models.graph\_neural\_network

<a id="torch_geometric_models.graph_neural_network.pyg_to_onnx"></a>

#### pyg\_to\_onnx

```python
def pyg_to_onnx(torch_model, featurizer)
```

Converts a PyTorch geometric model to ONNX format and returns a base64-encoded string of the model.

**Arguments**:

- `torch_model` _nn.Module_ - The trained PyTorch model to be converted.
- `featurizer` _SmilesGraphFeaturizer_ - A featurizer for transforming SMILES strings into graph data.
  

**Returns**:

- `str` - A base64-encoded ONNX model string.

<a id="torch_geometric_models.graph_neural_network.BaseGraphNetwork"></a>

## BaseGraphNetwork Objects

```python
class BaseGraphNetwork(nn.Module)
```

Base class for constructing various types of graph neural networks with flexible layer configurations.

**Attributes**:

- `input_dim` _int_ - Dimension of input features for each node.
- `hidden_layers` _int_ - Number of hidden layers.
- `hidden_dim` _int_ - Dimension of each hidden layer.
- `output_dim` _int_ - Dimension of the output layer.
- `activation` _nn.Module_ - Activation function.
- `dropout_proba` _float_ - Dropout probability for regularization.
- `batch_norm` _bool_ - Whether to use batch normalization.
- `seed` _int_ - Random seed for reproducibility.
- `pooling` _str_ - Pooling method to use ('mean', 'add', or 'max').
- `edge_dim` _Optional[int]_ - Dimension of edge features.
- `heads` _Optional[int]_ - Number of attention heads (for certain layers).

<a id="torch_geometric_models.graph_neural_network.BaseGraphNetwork.add_layer"></a>

#### add\_layer

```python
def add_layer(conv_layer: nn.Module)
```

Helper function to add a convolution layer to the graph layers list.

**Arguments**:

- `conv_layer` _nn.Module_ - Convolution layer to add.

<a id="torch_geometric_models.graph_neural_network.BaseGraphNetwork.pooling_layer"></a>

#### pooling\_layer

```python
def pooling_layer(x: Tensor, batch: Optional[Tensor]) -> Tensor
```

Applies the specified pooling method.

**Arguments**:

- `x` _Tensor_ - Node embeddings.
- `batch` _Optional[Tensor]_ - Batch index tensor.
  

**Returns**:

- `Tensor` - Pooled graph-level embeddings.

<a id="torch_geometric_models.graph_neural_network.BaseGraphNetwork.forward"></a>

#### forward

```python
def forward(x: Tensor,
            edge_index: Tensor,
            batch: Optional[Tensor],
            edge_attr: Optional[Tensor] = None) -> Tensor
```

Forward pass through the network.

**Arguments**:

- `x` _Tensor_ - Node features.
- `edge_index` _Tensor_ - Graph edges.
- `batch` _Optional[Tensor]_ - Batch indices for each node.
- `edge_attr` _Optional[Tensor]_ - Edge features (if applicable).
  

**Returns**:

- `Tensor` - Output node/graph embeddings.

<a id="torch_geometric_models.graph_neural_network.GraphSageNetwork"></a>

## GraphSageNetwork Objects

```python
class GraphSageNetwork(BaseGraphNetwork)
```

GraphSAGENetwork model.

**Attributes**:

  Inherits attributes from BaseGraphNetwork.

<a id="torch_geometric_models.graph_neural_network.GraphSageNetwork.__init__"></a>

#### \_\_init\_\_

```python
def __init__(input_dim: int,
             hidden_layers: int = 2,
             hidden_dim: int = 16,
             output_dim: int = 1,
             activation: nn.Module = nn.ReLU(),
             dropout_proba: float = 0.0,
             batch_norm: bool = False,
             seed=42,
             pooling: str = "mean")
```

Initializes the GraphSageNetwork with SAGEConv-specific layers.

<a id="torch_geometric_models.graph_neural_network.GraphConvolutionNetwork"></a>

## GraphConvolutionNetwork Objects

```python
class GraphConvolutionNetwork(BaseGraphNetwork)
```

Graph Convolutional Network (GCN) model.

**Attributes**:

  Inherits attributes from BaseGraphNetwork.

<a id="torch_geometric_models.graph_neural_network.GraphConvolutionNetwork.__init__"></a>

#### \_\_init\_\_

```python
def __init__(input_dim: int,
             hidden_layers: int = 2,
             hidden_dim: int = 16,
             output_dim: int = 1,
             activation: nn.Module = nn.ReLU(),
             dropout_proba: float = 0.0,
             batch_norm: bool = False,
             seed=42,
             pooling: str = "mean")
```

Initializes the GraphConvolutionNetwork with GCNConv-specific layers.

<a id="torch_geometric_models.graph_neural_network.GraphAttentionNetwork"></a>

## GraphAttentionNetwork Objects

```python
class GraphAttentionNetwork(BaseGraphNetwork)
```

Graph Attention Network (GAT) model.

**Attributes**:

  Inherits attributes from BaseGraphNetwork.

<a id="torch_geometric_models.graph_neural_network.GraphAttentionNetwork.__init__"></a>

#### \_\_init\_\_

```python
def __init__(input_dim: int,
             hidden_layers: int = 2,
             hidden_dim: int = 16,
             output_dim: int = 1,
             activation: nn.Module = nn.ReLU(),
             dropout_proba: float = 0.0,
             batch_norm: bool = False,
             seed=42,
             pooling: str = "mean",
             edge_dim: Optional[int] = None,
             heads: int = 1)
```

Initializes the GraphAttentionNetwork with GATConv-specific layers.

<a id="torch_geometric_models.graph_neural_network.GraphTransformerNetwork"></a>

## GraphTransformerNetwork Objects

```python
class GraphTransformerNetwork(BaseGraphNetwork)
```

Graph Transformer Network model.

**Attributes**:

  Inherits attributes from BaseGraphNetwork.

<a id="torch_geometric_models.graph_neural_network.GraphTransformerNetwork.__init__"></a>

#### \_\_init\_\_

```python
def __init__(input_dim: int,
             hidden_layers: int = 2,
             hidden_dim: int = 16,
             output_dim: int = 1,
             activation: nn.Module = nn.ReLU(),
             dropout_proba: float = 0.0,
             batch_norm: bool = False,
             seed=42,
             pooling: str = "mean",
             edge_dim: Optional[int] = None,
             heads: int = 1)
```

Initializes the GraphTransformerNetwork with TransformerConv-specific layers.

<a id="torch_models"></a>

# torch\_models

<a id="torch_models.smiles_sequence"></a>

# torch\_models.smiles\_sequence

<a id="trainers"></a>

# trainers

<a id="trainers.sequence_trainers"></a>

# trainers.sequence\_trainers

<a id="trainers.sequence_trainers.binary_trainer"></a>

# trainers.sequence\_trainers.binary\_trainer

<a id="trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer"></a>

## BinarySequenceTrainer Objects

```python
class BinarySequenceTrainer(TorchModelTrainer)
```

Trainer class for Binary Classification using LSTM Networks for SMILES.

**Attributes**:

- `decision_threshold` _float_ - Decision threshold for binary classification.

<a id="trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.__init__"></a>

#### \_\_init\_\_

```python
def __init__(model,
             n_epochs,
             optimizer,
             loss_fn,
             scheduler=None,
             device="cpu",
             use_tqdm=True,
             log_enabled=True,
             log_filepath=None)
```

The BinaryGraphModelTrainer constructor.

**Arguments**:

- `model` _torch.nn.Module_ - The torch model to be trained.
- `n_epochs` _int_ - Number of training epochs.
- `optimizer` _torch.optim.Optimizer_ - The optimizer used for training the model.
- `loss_fn` _torch.nn.Module_ - The loss function used for training.
- `scheduler` _torch.optim.lr_scheduler.LRScheduler_ - The scheduler used for adjusting the learning rate during training. Default is None.
- `device` _str, optional_ - The device on which to train the model. Default is 'cpu'.
- `use_tqdm` _bool, optional_ - Whether to use tqdm for progress bars. Default is True.
- `log_enabled` _bool, optional_ - Whether logging is enabled. Default is True.
- `log_filepath` _str or None, optional_ - Path to the log file. If None, logging is not saved to a file. Default is None.
- `decision_threshold` _float, optional_ - Decision threshold for binary classification. Default is 0.5.
  

**Example**:

```
>>> import torch
>>> from jaqpotpy.jaqpotpy_torch.models import GraphAttentionNetwork
>>> from jaqpotpy.jaqpotpy_torch.trainers import BinaryGraphModelTrainer
>>>
>>> model = GraphAttentionNetwork(input_dim=10,
...                               hidden_dims=[32, 32]
...                               edge_dim=5,
...                               output_dim=1)
>>> optimizer = torch.optim.Adam(model.parameters(), lr=0.0005)
>>> loss_fn = torch.nn.BCEWithLogitsLoss()
>>>
>>> trainer = BinaryGraphModelTrainer(model, n_epochs=50, optimizer=optimizer, loss_fn=loss_fn)
```

<a id="trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.train"></a>

#### train

```python
def train(train_loader, val_loader=None)
```

Train the model.

**Arguments**:

- `train_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for the training dataset.
- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader], optional_ - DataLoader for the validation dataset.

**Returns**:

  None

<a id="trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.evaluate"></a>

#### evaluate

```python
def evaluate(val_loader)
```

Evaluate the model's performance on the validation set.

**Arguments**:

- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for the validation dataset.

**Returns**:

- `float` - Average loss over the validation dataset.
- `dict` - Dictionary containing evaluation metrics. The keys represent the metric names and the values are floats.
- `numpy.ndarray` - Confusion matrix as a numpy array of shape (2, 2) representing true negative (TN), false positive (FP),
  false negative (FN), and true positive (TP) counts respectively. The elements are arranged as [[TN, FP], [FN, TP]].

<a id="trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.predict"></a>

#### predict

```python
def predict(val_loader)
```

Provide predictions on the validation set.

**Arguments**:

- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for the validation dataset.

**Returns**:

- `list` - List of predictions.

<a id="trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.predict_proba"></a>

#### predict\_proba

```python
def predict_proba(val_loader)
```

Provide the probabilities of the predictions on the validation set.

**Arguments**:

- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for the validation dataset.

**Returns**:

- `list` - List of predictions' probabilities.

<a id="trainers.graph_trainers"></a>

# trainers.graph\_trainers

<a id="trainers.graph_trainers.regression_trainer"></a>

# trainers.graph\_trainers.regression\_trainer

<a id="trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer"></a>

## RegressionGraphModelTrainer Objects

```python
class RegressionGraphModelTrainer(TorchModelTrainer)
```

Trainer class for Regression using Graph Neural Networks for SMILES

<a id="trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.__init__"></a>

#### \_\_init\_\_

```python
def __init__(model,
             n_epochs,
             optimizer,
             loss_fn,
             scheduler=None,
             device="cpu",
             use_tqdm=True,
             log_enabled=True,
             log_filepath=None)
```

The RegressionGraphModelTrainer constructor.

**Arguments**:

  ----
- `model` _torch.nn.Module_ - The torch model to be trained.
- `n_epochs` _int_ - Number of training epochs.
- `optimizer` _torch.optim.Optimizer_ - The optimizer used for training the model.
- `loss_fn` _torch.nn.Module_ - The loss function used for training.
- `scheduler` _torch.optim.lr_scheduler.LRScheduler, optional_ - The scheduler used for adjusting the learning rate during training. Default is None.
- `device` _str, optional_ - The device on which to train the model. Default is 'cpu'.
- `use_tqdm` _bool, optional_ - Whether to use tqdm for progress bars. Default is True.
- `log_enabled` _bool, optional_ - Whether logging is enabled. Default is True.
- `log_filepath` _str or None, optional_ - Path to the log file. If None, logging is not saved to a file. Default is None.

<a id="trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.get_model_kwargs"></a>

#### get\_model\_kwargs

```python
def get_model_kwargs(data)
```

Fetch the model's keyword arguments.

**Arguments**:

  ----
- `data` _torch_geometric.data.Data_ - Data object returned from the DataLoader.
  

**Returns**:

  -------
- `dict` - The required model keyword arguments. Contains keys: {'x', 'edge_index', 'batch', 'edge_attr'}.
  Note that 'edge_attr' is only present if the model supports edge features.

<a id="trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.train"></a>

#### train

```python
def train(train_loader, val_loader=None)
```

Train the model.

**Arguments**:

  ----
  train_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]):
  DataLoader for the training dataset.
  val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader], optional):
  DataLoader for the validation dataset. Default is None.
  

**Returns**:

  -------
  None

<a id="trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.evaluate"></a>

#### evaluate

```python
def evaluate(val_loader)
```

Evaluate the model's performance on the validation set.

**Arguments**:

  ----
- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for the validation dataset.
  

**Returns**:

  -------
- `float` - Average loss over the validation dataset.
- `dict` - Dictionary containing evaluation metrics. The keys represent the metric names and the values are floats.

<a id="trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.predict"></a>

#### predict

```python
def predict(val_loader)
```

Provide predictions on the validation set.

**Arguments**:

  ----
- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for the validation dataset.
  

**Returns**:

  -------
- `list` - List of predictions.

<a id="trainers.graph_trainers.binary_trainer"></a>

# trainers.graph\_trainers.binary\_trainer

<a id="trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer"></a>

## BinaryGraphModelTrainer Objects

```python
class BinaryGraphModelTrainer(TorchModelTrainer)
```

Trainer class for binary classification using Graph Neural Networks (GNNs) designed for SMILES.

<a id="trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.__init__"></a>

#### \_\_init\_\_

```python
def __init__(model,
             n_epochs,
             optimizer,
             loss_fn,
             scheduler=None,
             device="cpu",
             use_tqdm=True,
             log_enabled=True,
             log_filepath=None)
```

Initializes BinaryGraphModelTrainer for training binary classification GNNs.

**Arguments**:

- `model` _torch.nn.Module_ - The torch model to be trained.
- `n_epochs` _int_ - Number of training epochs.
- `optimizer` _torch.optim.Optimizer_ - Optimizer for model training.
- `loss_fn` _torch.nn.Module_ - Loss function for binary classification.
- `scheduler` _torch.optim.lr_scheduler.LRScheduler, optional_ - Learning rate scheduler. Default is None.
- `device` _str, optional_ - Device for model training, e.g., 'cpu' or 'cuda'. Default is 'cpu'.
- `use_tqdm` _bool, optional_ - If True, uses tqdm for progress display. Default is True.
- `log_enabled` _bool, optional_ - If True, enables logging. Default is True.
- `log_filepath` _str or None, optional_ - Path to the log file. If None, logging is not saved to a file. Default is None.

<a id="trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.get_model_kwargs"></a>

#### get\_model\_kwargs

```python
def get_model_kwargs(data)
```

Returns model's keyword arguments.

**Arguments**:

- `data` _torch_geometric.data.Data_ - Data object returned from the DataLoader.
  

**Returns**:

- `dict` - Model keyword arguments for graph data. Keys include 'x', 'edge_index', 'batch', and optionally 'edge_attr' if the model uses edge features.

<a id="trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.train"></a>

#### train

```python
def train(train_loader, val_loader=None)
```

Trains the model for the specified number of epochs.

**Arguments**:

- `train_loader` _torch_geometric.loader.DataLoader_ - DataLoader for training data.
- `val_loader` _torch_geometric.loader.DataLoader, optional_ - DataLoader for validation data.
  

**Returns**:

  None

<a id="trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.evaluate"></a>

#### evaluate

```python
def evaluate(val_loader)
```

Evaluates the model on the validation set.

**Arguments**:

- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for validation data.
  

**Returns**:

- `float` - Average loss on the validation dataset.
- `dict` - Dictionary of evaluation metrics (e.g., accuracy, precision).
- `numpy.ndarray` - Confusion matrix of shape (2, 2) representing TN, FP, FN, and TP counts.

<a id="trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.predict"></a>

#### predict

```python
def predict(val_loader)
```

Returns binary predictions for the validation set.

**Arguments**:

- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for validation data.
  

**Returns**:

- `list` - List of binary predictions.

<a id="trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.predict_proba"></a>

#### predict\_proba

```python
def predict_proba(val_loader)
```

Returns prediction probabilities for the validation set.

**Arguments**:

- `val_loader` _Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]_ - DataLoader for validation data.
  

**Returns**:

- `list` - List of prediction probabilities.

<a id="trainers.base_trainer"></a>

# trainers.base\_trainer

<a id="trainers.base_trainer.TorchModelTrainer"></a>

## TorchModelTrainer Objects

```python
class TorchModelTrainer(ABC)
```

An abstract class for training a model and deploying it on Jaqpot.

**Attributes**:

- `model` _torch.nn.Module_ - The torch model to be trained.
- `n_epochs` _int_ - Number of training epochs.
- `optimizer` _torch.optim.Optimizer_ - The optimizer used for training the model.
- `loss_fn` _torch.nn.Module_ - The loss function used for training.
- `scheduler` _torch.optim.lr_scheduler.LRScheduler_ - The scheduler used for adjusting the learning rate during training.
- `device` _torch.device_ - The device on which to train the model.
- `use_tqdm` _bool_ - Whether to use tqdm for progress bars.
- `current_epoch` _int_ - The epoch on which the trainer has currently reached.
- `log_enabled` _bool_ - Whether logging is enabled.
- `log_filepath` _os.path.relpath or None_ - Relative path to the log file.
- `logger` _logging.Logger_ - The logger object at INFO level used for logging during model training.

<a id="trainers.base_trainer.TorchModelTrainer.__init__"></a>

#### \_\_init\_\_

```python
def __init__(model: torch.nn.Module,
             n_epochs: int,
             optimizer: torch.optim.Optimizer,
             loss_fn: torch.nn.Module,
             scheduler: Optional[torch.optim.lr_scheduler.LRScheduler] = None,
             device: str = "cpu",
             use_tqdm: bool = True,
             log_enabled: bool = True,
             log_filepath: Optional[str] = None)
```

**Arguments**:

- `model` _torch.nn.Module_ - The torch model to be trained.
- `n_epochs` _int_ - Number of training epochs.
- `optimizer` _torch.optim.Optimizer_ - The optimizer used for training the model.
- `loss_fn` _torch.nn.Module_ - The loss function used for training.
- `scheduler` _torch.optim.lr_scheduler.LRScheduler_ - The scheduler used for adjusting the learning rate during training. Default is None.
- `device` _str, optional_ - The device on which to train the model. Default is 'cpu'.
- `use_tqdm` _bool, optional_ - Whether to use tqdm for progress bars. Default is True.
- `log_enabled` _bool, optional_ - Whether logging is enabled. Default is True.
- `log_filepath` _str or None, optional_ - Path to the log file. If None, logging is not saved to a file. Default is None.

<a id="trainers.base_trainer.TorchModelTrainer.train"></a>

#### train

```python
@abstractmethod
def train(train_loader, val_loader=None)
```

Abstract method for training the model.

**Arguments**:

  train_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]):
  DataLoader for the training dataset, providing batches of training data.
  val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader], optional):
  DataLoader for the validation dataset, providing batches of validation data.
  

**Returns**:

  None
  

**Raises**:

- `NotImplementedError` - If this method is not implemented in a subclass.

<a id="trainers.base_trainer.TorchModelTrainer.evaluate"></a>

#### evaluate

```python
@abstractmethod
def evaluate(val_loader)
```

Abstract method for evaluating the model.

**Arguments**:

  val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]):
  DataLoader for the evaluation dataset, providing batches of data to evaluate model performance.
  

**Returns**:

  None
  

**Raises**:

- `NotImplementedError` - If this method is not implemented in a subclass.

