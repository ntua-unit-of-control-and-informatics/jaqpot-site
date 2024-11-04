<a id="base_classes"></a>

# base\_classes

<a id="base_classes.AbstractFeaturizer"></a>

## AbstractFeaturizer Objects

```python
class AbstractFeaturizer(object)
```

Abstract class for calculating a set of features for a datapoint.
This class is abstract.

<a id="base_classes.AbstractFeaturizer.featurize"></a>

#### featurize

```python
def featurize(datapoints: Iterable[Any],
              log_every_n: int = 1000,
              **kwargs) -> np.ndarray
```

Calculate features for datapoints.

Parameters
----------
datapoints: Iterable[Any]
  A sequence of objects that you'd like to featurize. Subclassses of
  `Featurizer` should instantiate the `_featurize` method that featurizes
  objects in the sequence.
log_every_n: int, default 1000
  Logs featurization progress every `log_every_n` steps.

Returns
-------
np.ndarray
  A numpy array containing a featurized representation of `datapoints`.

<a id="base_classes.AbstractFeaturizer.__call__"></a>

#### \_\_call\_\_

```python
def __call__(datapoints: Iterable[Any], **kwargs)
```

Calculate features for datapoints.
`**kwargs` will get passed directly to `Featurizer.featurize`

Parameters
----------
datapoints: Iterable[Any]
  Any blob of data you like. Subclasss should instantiate this.

<a id="base_classes.AbstractFeaturizer.__repr__"></a>

#### \_\_repr\_\_

```python
def __repr__() -> str
```

Convert self to repr representation.

Returns
-------
str
  The string represents the class.

Examples
--------
>>> import jaqpotpy as jt
>>> jt.descriptors.CircularFingerprint(size=1024, radius=4)
CircularFingerprint[radius=4, size=1024, chiral=False, bonds=True, features=False, sparse=False, smiles=False]
>>> jt.descriptors.CGCNNFeaturizer()
CGCNNFeaturizer[radius=8.0, max_neighbors=12, step=0.2]

<a id="base_classes.AbstractFeaturizer.__str__"></a>

#### \_\_str\_\_

```python
def __str__() -> str
```

Convert self to str representation.

Returns
-------
str
  The string represents the class.

<a id="base_classes.MolecularFeaturizer"></a>

## MolecularFeaturizer Objects

```python
class MolecularFeaturizer(AbstractFeaturizer)
```

Abstract class for calculating a set of features for a
molecule. Τhε MolecularFeaturizer uses SMILES strings to represent
small molecules. All other featurizers which are subclasses of
this class should plan to process input which comes as smiles
strings. Child classes need to implement the _featurize method for
calculating features for a single molecule.

.. [1] Ramsundar-et-al-2019,. "Deep Learning for the Life Sciences."
O'Reilly Media (2019):.
.. [2] https://github.com/deepchem/deepchem

**Notes**:

  ----
  The subclasses of this class require RDKit to be installed.

<a id="base_classes.MolecularFeaturizer.featurize"></a>

#### featurize

```python
def featurize(datapoints,
              convert_nan: bool = True,
              log_every_n=1000,
              **kwargs) -> np.ndarray
```

Calculate features for molecules.
Parameters: datapoints--> SMILES string
Returns:features--> np.ndarray

<a id="base_classes.MolecularFeaturizer.featurize_dataframe"></a>

#### featurize\_dataframe

```python
def featurize_dataframe(datapoints,
                        convert_nan: bool = True,
                        log_every_n=1000,
                        **kwargs) -> Any
```

Calculate features for molecules.

Parameters
----------
datapoints:  SMILES string
log_every_n: int, default 1000
  Logging messages reported every `log_every_n` samples.

Returns
-------
features: pd.Dataframe()
  A pandas Dataframe containing a featurized representation of `datapoints`.

<a id="base_classes.get_print_threshold"></a>

#### get\_print\_threshold

```python
def get_print_threshold() -> int
```

Return the printing threshold for datasets.
The print threshold is the number of elements from ids/tasks to
print when printing representations of `Dataset` objects.

Returns
-------
threshold: int
  Number of elements that will be printed

<a id="__init__"></a>

# \_\_init\_\_

<a id="tokenizer"></a>

# tokenizer

<a id="tokenizer.smiles_tokenizer"></a>

# tokenizer.smiles\_tokenizer

<a id="tokenizer.smiles_tokenizer.SmilesVectorizer"></a>

## SmilesVectorizer Objects

```python
class SmilesVectorizer(object)
```

SMILES vectorizer and devectorizer, with support for SMILES enumeration (atom order randomization)

as data augmentation

**Arguments**:

- `charset`: string containing the characters for the vectorization
can also be generated via the .fit() method
- `pad`: Length of the vectorization
- `leftpad`: Add spaces to the left of the SMILES
- `isomericSmiles`: Generate SMILES containing information about stereogenic centers
- `augment`: Enumerate the SMILES during transform
- `canonical`: use canonical SMILES during transform (overrides enum)
- `binary`: Use RDKit binary strings instead of molecule objects

<a id="tokenizer.smiles_tokenizer.SmilesVectorizer.setdims"></a>

#### setdims

```python
def setdims()
```

Calculates and sets the output dimensions of the vectorized molecules from the current settings

<a id="tokenizer.smiles_tokenizer.SmilesVectorizer.fit"></a>

#### fit

```python
def fit(mols, extra_chars=[])
```

Performs extraction of the charset and length of a SMILES datasets and sets self.maxlength and self.charset

**Arguments**:

- `smiles`: Numpy array or Pandas series containing smiles as strings
- `extra_chars`: List of extra chars to add to the charset (e.g. "\\" when "/" is present)

<a id="tokenizer.smiles_tokenizer.SmilesVectorizer.randomize_smiles"></a>

#### randomize\_smiles

```python
def randomize_smiles(smiles)
```

Perform a randomization of a SMILES string
must be RDKit sanitizable

<a id="tokenizer.smiles_tokenizer.SmilesVectorizer.randomize_mol"></a>

#### randomize\_mol

```python
def randomize_mol(mol)
```

Performs a randomization of the atom order of an RDKit molecule

<a id="tokenizer.smiles_tokenizer.SmilesVectorizer.transform"></a>

#### transform

```python
def transform(mols, augment=None, canonical=None)
```

Perform an enumeration (atom order randomization) and vectorization of a Numpy array of RDkit molecules

**Arguments**:

- `mols`: The RDKit molecules to transform in a list or array
- `augment`: Override the objects .augment setting
- `canonical`: Override the objects .canonical setting

<a id="tokenizer.smiles_tokenizer.SmilesVectorizer.reverse_transform"></a>

#### reverse\_transform

```python
def reverse_transform(vect, strip=True)
```

Performs a conversion of a vectorized SMILES to a SMILES strings

charset must be the same as used for vectorization.

**Arguments**:

- `vect`: Numpy array of vectorized SMILES.
- `strip`: Strip start and end tokens from the SMILES string

<a id="graph"></a>

# graph

<a id="graph.graph_featurizer"></a>

# graph.graph\_featurizer

<a id="graph.graph_featurizer.SmilesGraphFeaturizer"></a>

## SmilesGraphFeaturizer Objects

```python
class SmilesGraphFeaturizer()
```

Featurizes SMILES strings into graph data suitable for graph neural networks (GNNs).
This class processes SMILES strings to generate atom and bond feature vectors, along
with adjacency matrices, to create graph representations for use in GNN-based models.

**Attributes**:

- `SUPPORTED_ATOM_FEATURES` _dict_ - Defines allowable atom features and their extraction methods.
- `SUPPORTED_BOND_FEATURES` _dict_ - Defines allowable bond features and their extraction methods.
- `NON_ONE_HOT_ENCODED` _list_ - List of features not subjected to one-hot encoding.
  

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.__init__"></a>

#### \_\_init\_\_

```python
def __init__(include_edge_features=True)
```

Initializes the featurizer with optional inclusion of edge features.

**Arguments**:

- `include_edge_features` _bool_ - Flag to determine if edge features should be added.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.add_atom_feature"></a>

#### add\_atom\_feature

```python
def add_atom_feature(atom_feature, allowable_set=None)
```

Adds a custom atom feature with an optional allowable set.

**Arguments**:

- `atom_feature` _str_ - Name of the atom feature.
- `allowable_set` _list, optional_ - List of allowable values for the feature.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.add_bond_feature"></a>

#### add\_bond\_feature

```python
def add_bond_feature(bond_feature, allowable_set=None)
```

Adds a custom bond feature with an optional allowable set.

**Arguments**:

- `bond_feature` _str_ - Name of the bond feature.
- `allowable_set` _list, optional_ - List of allowable values for the feature.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.get_default_atom_allowable_set"></a>

#### get\_default\_atom\_allowable\_set

```python
def get_default_atom_allowable_set(atom_feature)
```

Retrieves the default allowable set for a specified atom feature.

**Arguments**:

- `atom_feature` _str_ - Name of the atom feature.
  

**Returns**:

- `list` - Default allowable set for the feature.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.get_default_bond_allowable_set"></a>

#### get\_default\_bond\_allowable\_set

```python
def get_default_bond_allowable_set(bond_feature)
```

Retrieves the default allowable set for a specified bond feature.

**Arguments**:

- `bond_feature` _str_ - Name of the bond feature.
  

**Returns**:

- `list` - Default allowable set for the feature.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.sort_allowable_sets"></a>

#### sort\_allowable\_sets

```python
def sort_allowable_sets()
```

Sorts allowable sets for atom and bond features to ensure consistency.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.set_default_config"></a>

#### set\_default\_config

```python
def set_default_config()
```

Resets the feature configuration to default settings.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.get_num_node_features"></a>

#### get\_num\_node\_features

```python
def get_num_node_features()
```

Returns the number of features per atom node.

**Returns**:

- `int` - Number of atom features.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.get_num_edge_features"></a>

#### get\_num\_edge\_features

```python
def get_num_edge_features()
```

Returns the number of features per bond edge.

**Returns**:

- `int` - Number of bond features.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.__call__"></a>

#### \_\_call\_\_

```python
def __call__(*args, **kwargs)
```

Enables the class instance to be callable, likely for direct featurization of SMILES.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.featurize"></a>

#### featurize

```python
def featurize(sm, y=None)
```

Converts a SMILES string to a graph representation.

**Arguments**:

- `sm` _str_ - SMILES string of the molecule.
- `y` _optional_ - Target value associated with the SMILES.
  

**Returns**:

- `torch_geometric.data.Data` - Graph representation with node and edge features.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.get_dict"></a>

#### get\_dict

```python
def get_dict()
```

Returns a dictionary representation of the featurizer's settings and feature sets.

**Returns**:

- `dict` - Featurizer configuration and feature sets.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.load_dict"></a>

#### load\_dict

```python
def load_dict(feat_dict)
```

Loads settings and feature sets from a dictionary.

**Arguments**:

- `feat_dict` _dict_ - Dictionary containing featurizer settings and feature sets.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.__repr__"></a>

#### \_\_repr\_\_

```python
def __repr__()
```

Returns a detailed string representation of the featurizer for debugging.

**Returns**:

- `str` - String representation of the featurizer.

<a id="graph.graph_featurizer.SmilesGraphFeaturizer.__str__"></a>

#### \_\_str\_\_

```python
def __str__()
```

Returns a concise string representation of the featurizer.

**Returns**:

- `str` - String representation of the featurizer.

<a id="molecular"></a>

# molecular

<a id="molecular.topological_fingerprints"></a>

# molecular.topological\_fingerprints

Topological fingerprints.

<a id="molecular.topological_fingerprints.TopologicalFingerprint"></a>

## TopologicalFingerprint Objects

```python
class TopologicalFingerprint(MolecularFeaturizer)
```

Circular (Morgan) fingerprints.
Extended Connectivity Circular Fingerprints compute a bag-of-words style
representation of a molecule by breaking it into local neighborhoods and
hashing into a bit vector of the specified size. It is used specifically
for structure-activity modelling. See [1]_ for more details.

**References**:

  ----------
  .. [1] Rogers, David, and Mathew Hahn. "Extended-connectivity fingerprints."
  Journal of chemical information and modeling 50.5 (2010): 742-754.
  

**Notes**:

  ----
  This class requires RDKit to be installed.
  

**Examples**:

  --------
  >>> import jaqpotpy as jt
  >>> from rdkit import Chem
  >>> smiles = ['C1=CC=CC=C1']
  >>> # Example 1: (size = 2048, radius = 4)
  >>> featurizer = jt.descriptors.TopologicalFingerprint(size=2048, radius=4)
  >>> features = featurizer.featurize(smiles)

<a id="molecular.topological_fingerprints.TopologicalFingerprint.__init__"></a>

#### \_\_init\_\_

```python
def __init__(radius: int = 2,
             size: int = 2048,
             chiral: bool = False,
             bonds: bool = True,
             features: bool = False)
```

Parameters
----------
radius: int, optional (default 2)
Fingerprint radius.
size: int, optional (default 2048)
Length of generated bit vector.
chiral: bool, optional (default False)
Whether to consider chirality in fingerprint generation.
bonds: bool, optional (default True)
Whether to consider bond order in fingerprint generation.
features: bool, optional (default False)
Whether to use feature information instead of atom information; see
RDKit docs for more info.

<a id="molecular.mordred"></a>

# molecular.mordred

<a id="molecular.mordred.MordredDescriptors"></a>

## MordredDescriptors Objects

```python
class MordredDescriptors(MolecularFeaturizer)
```

Mordred descriptors.
descriptors: List[str]
List of Mordred descriptor names used in this class.

**References**:

  ----------
  .. [1] Moriwaki, Hirotomo, et al. "Mordred: a molecular descriptor calculator."
  Journal of cheminformatics 10.1 (2018): 4.
  .. [2] http://mordred-descriptor.github.io/documentation/master/descriptors.html
  
  

**Examples**:

  --------
  >>> import jaqpotpy as jt
  >>> smiles = ['CC(=O)OC1=CC=CC=C1C(=O)O']
  >>> featurizer = jt.descriptors.MordredDescriptors()
  >>> features = featurizer.featurize(smiles)

<a id="molecular.mordred.MordredDescriptors.__init__"></a>

#### \_\_init\_\_

```python
def __init__(ignore_3D: bool = True)
```

Parameters
----------
ignore_3D: bool, optional (default True)
  Whether to use 3D information or not.

<a id="molecular.mordred.MordredDescriptors.featurize_dataframe"></a>

#### featurize\_dataframe

```python
def featurize_dataframe(datapoints,
                        convert_nan: bool = True,
                        log_every_n=1000,
                        **kwargs) -> pd.DataFrame
```

Calculate Mordred descriptors.
Parameters: datapoints --> list of SMILES
Returns: df --> pd.DataFrame
- If ignore_3D is True, the length is 1613.
- If ignore_3D is False, the length is 1826.

<a id="molecular.maccs_keys_fingerprints"></a>

# molecular.maccs\_keys\_fingerprints

<a id="molecular.maccs_keys_fingerprints.MACCSKeysFingerprint"></a>

## MACCSKeysFingerprint Objects

```python
class MACCSKeysFingerprint(MolecularFeaturizer)
```

MACCS Keys Fingerprint.
The MACCS (Molecular ACCess System) keys are one of the most commonly used structural keys.

**Examples**:

  --------
  >>> import jaqpotpy as jp
  >>> smiles = 'CC(=O)OC1=CC=CC=C1C(=O)O'
  >>> featurizer = jp.descriptors.molecular.MACCSKeysFingerprint()
  >>> features = featurizer.featurize([smiles])
  >>> type(features[0])
  >>> features[0].shape
  (167,)
  

**References**:

  ----------
  .. [1] Durant, Joseph L., et al. "Reoptimization of MDL keys for use in drug discovery."
  Journal of chemical information and computer sciences 42.6 (2002): 1273-1280.
  .. [2] https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py
  

**Notes**:

  ----
  This class requires RDKit to be installed.

<a id="molecular.maccs_keys_fingerprints.MACCSKeysFingerprint.__init__"></a>

#### \_\_init\_\_

```python
def __init__()
```

Initialize this featurizer.

<a id="molecular.rdkit"></a>

# molecular.rdkit

Basic molecular features.

<a id="molecular.rdkit.RDKitDescriptors"></a>

## RDKitDescriptors Objects

```python
class RDKitDescriptors(MolecularFeaturizer)
```

RDKit descriptors.

**Examples**:

  --------
  >>> import jaqpotpy as jt
  >>> smiles = ['CC(=O)OC1=CC=CC=C1C(=O)O']
  >>> featurizer = dc.feat.RDKitDescriptors()
  >>> features = featurizer.featurize(smiles)

<a id="molecular.rdkit.RDKitDescriptors.__init__"></a>

#### \_\_init\_\_

```python
def __init__(use_fragment=True, ipc_avg=True)
```

Initialize this featurizer.

Parameters
----------
use_fragment: bool, optional (default True)
  If True, the return value includes the fragment binary descriptors like 'fr_XXX'.
ipc_avg: bool, optional (default True)
  If True, the IPC descriptor calculates with avg=True option.
  Please see this issue: https://github.com/rdkit/rdkit/issues/1527.

<a id="molecular.rdkit.RDKitDescriptors.featurize_dataframe"></a>

#### featurize\_dataframe

```python
def featurize_dataframe(datapoints,
                        convert_nan: bool = False,
                        log_every_n=1000,
                        **kwargs) -> pd.DataFrame
```

Calculate Mordred descriptors.
Parameters: datapoints --> list of SMILES
Returns: df --> pd.DataFrame
- If ignore_3D is True, the length is 1613.
- If ignore_3D is False, the length is 1826.

