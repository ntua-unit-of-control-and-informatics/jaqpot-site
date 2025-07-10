# jaqpotpy.datasets package

## Subpackages

## Submodules

## jaqpotpy.datasets.dataset_base module

Dataset abstract classes

### *class* jaqpotpy.datasets.dataset_base.BaseDataset(df: DataFrame | None = None, path: str | None = None, y_cols: Iterable[str] | None = None, x_cols: Iterable[str] | None = None, task: ModelTask | None = None)

Bases: `ABC`

Abstract class for datasets. This class defines the common interface and basic functionality
for dataset manipulation and handling.

### Attributes

df
: The underlying DataFrame holding the dataset.

x_cols
: The columns to be used as features.

y_cols
: The columns to be used as labels.

\_task
: The task type (ModelTask.REGRESSION, ModelTask.BINARY_CLASSIFICATION, or ModelTask.MULTICLASS_CLASSIFICATION).

\_dataset_name
: The name of the dataset.

y
: The labels of the dataset.

X
: The features of the dataset.

#### *abstract* create()

Creates the dataset.

This method must be implemented by subclasses.

#### *property* dataset_name

Gets the dataset name.

#### Returns

str
: The dataset name.

#### df_astype(dtype, columns=None)

Convert the dataset to the specified data type.

Args:
: dtype: The data type to convert to.
  columns: The columns of the dataset

Returns:
: JaqpotTabularDataset: The dataset converted to the specified data type.

#### *classmethod* load(filename)

Loads a dataset from a file using pickle.

#### Parameters

filename
: The path to the file from which to load the dataset.

#### Returns

BaseDataset
: The loaded dataset.

#### save()

Saves the dataset to a file using pickle.

The dataset is saved with the name specified in \_dataset_name attribute.
If \_dataset_name is not set, it defaults to ‘jaqpot_dataset.jdata’.

#### *property* task

Gets the task type.

#### Returns

ModelTask
: The task type.

## jaqpotpy.datasets.graph_pyg_dataset module

### *class* jaqpotpy.datasets.graph_pyg_dataset.SmilesGraphDataset(smiles: list | None = None, y: list | None = None, featurizer: [SmilesGraphFeaturizer](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer) | None = None)

Bases: `Dataset`

A PyTorch Dataset class for handling SMILES strings as graph data suitable for training
graph neural networks. The class transforms SMILES strings into graph representations using
a specified featurizer and optionally supports target values for supervised learning tasks.

Attributes:
: smiles (list): A list of SMILES strings to be converted into graph data.
  y (list, optional): A list of target values associated with each SMILES string.
  featurizer (SmilesGraphFeaturizer): A featurizer to transform SMILES into graph representations.
  precomputed_features (list, optional): Precomputed graph features; remains None until precompute_featurization is called.

#### get_num_edge_features()

Returns the number of edge features (bond-level features) in each graph representation.

Returns:
: int: The number of features associated with each edge (bond).

#### get_num_node_features()

Returns the number of node features (atom-level features) in each graph representation.

Returns:
: int: The number of features associated with each node (atom).

#### precompute_featurization()

Precomputes the featurized graph representations of the SMILES strings in the dataset.

This method prepares the graph data in advance, which can improve efficiency when
accessing individual data samples. Each SMILES string is transformed into a graph
representation (and paired with its target value if available).

Sets:
: self.precomputed_features (list): A list of graph features precomputed for each SMILES.

## jaqpotpy.datasets.jaqpotpy_dataset module

## jaqpotpy.datasets.tokenizer_dataset module

### *class* jaqpotpy.datasets.tokenizer_dataset.SmilesSeqDataset(molecules, y, vectorizer)

Bases: `Dataset`

#### get_feature_dim()

## Module contents

### *class* jaqpotpy.datasets.JaqpotTabularDataset(df: DataFrame | None = None, path: str | None = None, y_cols: Iterable[str] | None = None, x_cols: Iterable[str] | None = None, smiles_cols: Iterable[str] | None = None, featurizers: List[[MolecularFeaturizer](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)] | None = None, task: ModelTask | None = None, verbose: bool = True, remove_inf_cols: bool = False, remove_inf_rows: bool = False)

Bases: [`BaseDataset`](#jaqpotpy.datasets.dataset_base.BaseDataset)

#### copy()

Create a copy of the dataset, including a deep copy of the underlying DataFrame
and all relevant attributes.

Returns:
: JaqpotTabularDataset: A copy of the dataset.

#### create()

Create the dataset by featurizing the SMILES columns and combining with other features.

#### *property* featurizer_name *: Iterable[Any]*

Get the names of the featurizers.

Returns:
: Iterable[Any]: The names of the featurizers.

#### select_features(FeatureSelector=None, SelectColumns=None, ExcludeColumns=None)

Select features using a feature selector or a selection list.

Args:
: FeatureSelector: An instance of a feature selector from sklearn.feature_selection.
  SelectColumns: A list of selected features.
  ExcludeColumns: A list of columns to exclude from feature selection.

Raises:
: ValueError: If both or neither of FeatureSelector and SelectColumns are provided.
  ValueError: If FeatureSelector is not a valid sklearn feature selector.
  ValueError: If any features in SelectColumns are not in the dataset.

### *class* jaqpotpy.datasets.SmilesGraphDataset(smiles: list | None = None, y: list | None = None, featurizer: [SmilesGraphFeaturizer](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer) | None = None)

Bases: `Dataset`

A PyTorch Dataset class for handling SMILES strings as graph data suitable for training
graph neural networks. The class transforms SMILES strings into graph representations using
a specified featurizer and optionally supports target values for supervised learning tasks.

Attributes:
: smiles (list): A list of SMILES strings to be converted into graph data.
  y (list, optional): A list of target values associated with each SMILES string.
  featurizer (SmilesGraphFeaturizer): A featurizer to transform SMILES into graph representations.
  precomputed_features (list, optional): Precomputed graph features; remains None until precompute_featurization is called.

#### get_num_edge_features()

Returns the number of edge features (bond-level features) in each graph representation.

Returns:
: int: The number of features associated with each edge (bond).

#### get_num_node_features()

Returns the number of node features (atom-level features) in each graph representation.

Returns:
: int: The number of features associated with each node (atom).

#### precompute_featurization()

Precomputes the featurized graph representations of the SMILES strings in the dataset.

This method prepares the graph data in advance, which can improve efficiency when
accessing individual data samples. Each SMILES string is transformed into a graph
representation (and paired with its target value if available).

Sets:
: self.precomputed_features (list): A list of graph features precomputed for each SMILES.

### *class* jaqpotpy.datasets.SmilesSeqDataset(molecules, y, vectorizer)

Bases: `Dataset`

#### get_feature_dim()
