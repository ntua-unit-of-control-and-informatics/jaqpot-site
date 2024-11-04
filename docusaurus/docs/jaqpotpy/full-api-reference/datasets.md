<a id="dataset_base"></a>

# dataset\_base

Dataset abstract classes

<a id="dataset_base.BaseDataset"></a>

## BaseDataset Objects

```python
class BaseDataset(ABC)
```

Abstract class for datasets. This class defines the common interface and basic functionality
for dataset manipulation and handling.

Attributes
----------
    df (pd.DataFrame): The underlying DataFrame holding the dataset.
    x_cols (Optional[Iterable[str]]): The columns to be used as features.
    y_cols (Optional[Iterable[str]]): The columns to be used as labels.
    _task (str): The task type, either 'regression' or 'classification'.
    _dataset_name (str): The name of the dataset.
    y (Iterable[str]): The labels of the dataset.
    X (Iterable[str]): The features of the dataset.

<a id="dataset_base.BaseDataset.create"></a>

#### create

```python
@abstractmethod
def create()
```

Creates the dataset.

<a id="dataset_base.BaseDataset.__get_X__"></a>

#### \_\_get\_X\_\_

```python
@abstractmethod
def __get_X__()
```

Returns the design matrix X.

<a id="dataset_base.BaseDataset.__get_Y__"></a>

#### \_\_get\_Y\_\_

```python
@abstractmethod
def __get_Y__()
```

Returns the response Y.

<a id="dataset_base.BaseDataset.__repr__"></a>

#### \_\_repr\_\_

```python
@abstractmethod
def __repr__() -> str
```

Returns a string representation of the dataset.

<a id="dataset_base.BaseDataset.__len__"></a>

#### \_\_len\_\_

```python
@abstractmethod
def __len__()
```

Returns the number of samples in the dataset.

<a id="dataset_base.BaseDataset.__get__"></a>

#### \_\_get\_\_

```python
@abstractmethod
def __get__(instance, owner)
```

Gets an attribute of the dataset.

<a id="dataset_base.BaseDataset.__getitem__"></a>

#### \_\_getitem\_\_

```python
@abstractmethod
def __getitem__(idx)
```

Gets a sample by index.

<a id="tokenizer_dataset"></a>

# tokenizer\_dataset

<a id="__init__"></a>

# \_\_init\_\_

<a id="graph_pyg_dataset"></a>

# graph\_pyg\_dataset

<a id="graph_pyg_dataset.SmilesGraphDataset"></a>

## SmilesGraphDataset Objects

```python
class SmilesGraphDataset(Dataset)
```

A PyTorch Dataset class for handling SMILES strings as graph data suitable for training
graph neural networks. The class transforms SMILES strings into graph representations using
a specified featurizer and optionally supports target values for supervised learning tasks.

**Attributes**:

- `smiles` _list_ - A list of SMILES strings to be converted into graph data.
- `y` _list, optional_ - A list of target values associated with each SMILES string.
- `featurizer` _SmilesGraphFeaturizer_ - A featurizer to transform SMILES into graph representations.
- `precomputed_features` _list, optional_ - Precomputed graph features; remains None until `precompute_featurization` is called.

<a id="graph_pyg_dataset.SmilesGraphDataset.__init__"></a>

#### \_\_init\_\_

```python
def __init__(smiles: list = None,
             y: Optional[list] = None,
             featurizer: Optional[SmilesGraphFeaturizer] = None)
```

Initializes the SmilesGraphDataset with SMILES strings, target values, and an optional featurizer.

**Arguments**:

- `smiles` _list_ - List of SMILES strings to be transformed into graphs.
- `y` _list, optional_ - List of target values for supervised learning tasks.
- `featurizer` _SmilesGraphFeaturizer, optional_ - A featurizer for converting SMILES into graphs;
  if not provided, a default featurizer is used.

<a id="graph_pyg_dataset.SmilesGraphDataset.precompute_featurization"></a>

#### precompute\_featurization

```python
def precompute_featurization()
```

Precomputes the featurized graph representations of the SMILES strings in the dataset.

This method prepares the graph data in advance, which can improve efficiency when
accessing individual data samples. Each SMILES string is transformed into a graph
representation (and paired with its target value if available).

Sets:
    self.precomputed_features (list): A list of graph features precomputed for each SMILES.

<a id="graph_pyg_dataset.SmilesGraphDataset.get_num_node_features"></a>

#### get\_num\_node\_features

```python
def get_num_node_features()
```

Returns the number of node features (atom-level features) in each graph representation.

**Returns**:

- `int` - The number of features associated with each node (atom).

<a id="graph_pyg_dataset.SmilesGraphDataset.get_num_edge_features"></a>

#### get\_num\_edge\_features

```python
def get_num_edge_features()
```

Returns the number of edge features (bond-level features) in each graph representation.

**Returns**:

- `int` - The number of features associated with each edge (bond).

<a id="graph_pyg_dataset.SmilesGraphDataset.__getitem__"></a>

#### \_\_getitem\_\_

```python
def __getitem__(idx)
```

Retrieves a featurized graph representation and target value (if available) for a specific index.

**Arguments**:

- `idx` _int_ - Index of the sample to retrieve.
  

**Returns**:

- `torch_geometric.data.Data` - A graph data object containing:
  - x (torch.Tensor): Node feature matrix with shape [num_nodes, num_node_features].
  - edge_index (LongTensor): Graph connectivity in COO format with shape [2, num_edges].
  - edge_attr (torch.Tensor, optional): Edge feature matrix with shape [num_edges, num_edge_features].
  - y (float, optional): Target value associated with the graph, if provided.
  - smiles (str): The SMILES string for the specific sample.

<a id="graph_pyg_dataset.SmilesGraphDataset.__len__"></a>

#### \_\_len\_\_

```python
def __len__()
```

Returns the total number of SMILES strings in the dataset, necessary for data loading operations.

**Returns**:

- `int` - The length of the dataset (number of SMILES strings).

<a id="graph_pyg_dataset.SmilesGraphDataset.__repr__"></a>

#### \_\_repr\_\_

```python
def __repr__() -> str
```

Returns a formal string representation of the SmilesGraphDataset object, indicating its class name.

**Returns**:

- `str` - Class name as the representation of the dataset object.

<a id="jaqpotpy_dataset"></a>

# jaqpotpy\_dataset

Dataset classes for molecular modelling

<a id="jaqpotpy_dataset.JaqpotpyDataset"></a>

## JaqpotpyDataset Objects

```python
class JaqpotpyDataset(BaseDataset)
```

A dataset class that can also support molecular descriptors. This class is
designed to handle datasets that include molecular structures represented by
SMILES strings and use molecular featurizers to generate features from these
structures. The class can also support ordinary datasets.

Attributes
----------
    df:
    path:
    y_cols:
    x_cols:
    smiles_col : The column containing SMILES strings.
    x_cols : The SMILES strings extracted from the DataFrame.

    featurizer: The featurizer used to generate molecular features. It can be one of the supported
                featurizers or a list of supported featurizers
    task : All feature columns after featurization.

<a id="jaqpotpy_dataset.JaqpotpyDataset.copy"></a>

#### copy

```python
def copy()
```

Create a copy of the dataset, including a deep copy of the underlying DataFrame
and all relevant attributes.

