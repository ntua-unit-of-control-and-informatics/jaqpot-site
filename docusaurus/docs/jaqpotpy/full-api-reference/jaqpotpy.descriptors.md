# jaqpotpy.descriptors package

## Subpackages

* [jaqpotpy.descriptors.graph package](jaqpotpy.descriptors.graph.md)
  * [Submodules](jaqpotpy.descriptors.graph.md#submodules)
  * [jaqpotpy.descriptors.graph.graph_featurizer module](jaqpotpy.descriptors.graph.md#module-jaqpotpy.descriptors.graph.graph_featurizer)
    * [`SmilesGraphFeaturizer`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer)
      * [`SmilesGraphFeaturizer.NON_ONE_HOT_ENCODED`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.NON_ONE_HOT_ENCODED)
      * [`SmilesGraphFeaturizer.SUPPORTED_ATOM_FEATURES`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.SUPPORTED_ATOM_FEATURES)
      * [`SmilesGraphFeaturizer.SUPPORTED_BOND_FEATURES`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.SUPPORTED_BOND_FEATURES)
      * [`SmilesGraphFeaturizer.add_atom_feature()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.add_atom_feature)
      * [`SmilesGraphFeaturizer.add_bond_feature()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.add_bond_feature)
      * [`SmilesGraphFeaturizer.featurize()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.featurize)
      * [`SmilesGraphFeaturizer.get_default_atom_allowable_set()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.get_default_atom_allowable_set)
      * [`SmilesGraphFeaturizer.get_default_bond_allowable_set()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.get_default_bond_allowable_set)
      * [`SmilesGraphFeaturizer.get_dict()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.get_dict)
      * [`SmilesGraphFeaturizer.get_num_edge_features()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.get_num_edge_features)
      * [`SmilesGraphFeaturizer.get_num_node_features()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.get_num_node_features)
      * [`SmilesGraphFeaturizer.load_dict()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.load_dict)
      * [`SmilesGraphFeaturizer.set_default_config()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.set_default_config)
      * [`SmilesGraphFeaturizer.sort_allowable_sets()`](jaqpotpy.descriptors.graph.md#jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer.sort_allowable_sets)
  * [Module contents](jaqpotpy.descriptors.graph.md#module-jaqpotpy.descriptors.graph)
* [jaqpotpy.descriptors.molecular package](jaqpotpy.descriptors.molecular.md)
  * [Submodules](jaqpotpy.descriptors.molecular.md#submodules)
  * [jaqpotpy.descriptors.molecular.maccs_keys_fingerprints module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.maccs_keys_fingerprints)
    * [`MACCSKeysFingerprint`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.maccs_keys_fingerprints.MACCSKeysFingerprint)
      * [`MACCSKeysFingerprint.featurize_dataframe()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.maccs_keys_fingerprints.MACCSKeysFingerprint.featurize_dataframe)
  * [jaqpotpy.descriptors.molecular.mordred module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.mordred)
    * [`MordredDescriptors`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.mordred.MordredDescriptors)
      * [`MordredDescriptors.featurize_dataframe()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.mordred.MordredDescriptors.featurize_dataframe)
  * [jaqpotpy.descriptors.molecular.rdkit module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.rdkit)
    * [`RDKitDescriptors`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors)
      * [`RDKitDescriptors.featurize_dataframe()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors.featurize_dataframe)
      * [`RDKitDescriptors.get_desc_list()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors.get_desc_list)
      * [`RDKitDescriptors.get_desc_names()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors.get_desc_names)
  * [jaqpotpy.descriptors.molecular.topological_fingerprints module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.topological_fingerprints)
    * [`TopologicalFingerprint`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.topological_fingerprints.TopologicalFingerprint)
      * [`TopologicalFingerprint.featurize_dataframe()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.topological_fingerprints.TopologicalFingerprint.featurize_dataframe)
  * [Module contents](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular)
* [jaqpotpy.descriptors.tokenizer package](jaqpotpy.descriptors.tokenizer.md)
  * [Submodules](jaqpotpy.descriptors.tokenizer.md#submodules)
  * [jaqpotpy.descriptors.tokenizer.smiles_tokenizer module](jaqpotpy.descriptors.tokenizer.md#module-jaqpotpy.descriptors.tokenizer.smiles_tokenizer)
    * [`SmilesVectorizer`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer)
      * [`SmilesVectorizer.charset`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.charset)
      * [`SmilesVectorizer.fit()`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.fit)
      * [`SmilesVectorizer.maxlength`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.maxlength)
      * [`SmilesVectorizer.pad`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.pad)
      * [`SmilesVectorizer.randomize_mol()`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.randomize_mol)
      * [`SmilesVectorizer.randomize_smiles()`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.randomize_smiles)
      * [`SmilesVectorizer.reverse_transform()`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.reverse_transform)
      * [`SmilesVectorizer.setdims()`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.setdims)
      * [`SmilesVectorizer.transform()`](jaqpotpy.descriptors.tokenizer.md#jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer.transform)
  * [Module contents](jaqpotpy.descriptors.tokenizer.md#module-jaqpotpy.descriptors.tokenizer)

## Submodules

## jaqpotpy.descriptors.base_classes module

### *class* jaqpotpy.descriptors.base_classes.AbstractFeaturizer

Bases: `object`

Abstract class for calculating a set of features for a datapoint.
This class is abstract.

#### featurize(datapoints: Iterable[Any], log_every_n: int = 1000, \*\*kwargs) → ndarray

Calculate features for datapoints.

### Parameters

datapoints: Iterable[Any]
: A sequence of objects that you’d like to featurize. Subclassses of
  Featurizer should instantiate the \_featurize method that featurizes
  objects in the sequence.

log_every_n: int, default 1000
: Logs featurization progress every log_every_n steps.

### Returns

np.ndarray
: A numpy array containing a featurized representation of datapoints.

### *class* jaqpotpy.descriptors.base_classes.MolecularFeaturizer

Bases: [`AbstractFeaturizer`](#jaqpotpy.descriptors.base_classes.AbstractFeaturizer)

Abstract class for calculating a set of features for a
molecule. Τhε MolecularFeaturizer uses SMILES strings to represent
small molecules. All other featurizers which are subclasses of
this class should plan to process input which comes as smiles
strings. Child classes need to implement the \_featurize method for
calculating features for a single molecule.

* <a id='id1'>**[1]**</a> Ramsundar-et-al-2019,. “Deep Learning for the Life Sciences.” O’Reilly Media (2019):.
* <a id='id2'>**[2]**</a> [https://github.com/deepchem/deepchem](https://github.com/deepchem/deepchem)

### Note:

The subclasses of this class require RDKit to be installed.

#### featurize(datapoints, convert_nan: bool = True, log_every_n=1000, \*\*kwargs) → ndarray

Calculate features for molecules.
Parameters: datapoints–> SMILES string
Returns:features–> np.ndarray

#### featurize_dataframe(datapoints, convert_nan: bool = True, log_every_n=1000, \*\*kwargs) → Any

Calculate features for molecules.

#### Parameters

datapoints:  SMILES string
log_every_n: int, default 1000

> Logging messages reported every log_every_n samples.

#### Returns

features: pd.Dataframe()
: A pandas Dataframe containing a featurized representation of datapoints.

### jaqpotpy.descriptors.base_classes.get_print_threshold() → int

Return the printing threshold for datasets.
The print threshold is the number of elements from ids/tasks to
print when printing representations of Dataset objects.

### Returns

threshold: int
: Number of elements that will be printed

## Module contents
