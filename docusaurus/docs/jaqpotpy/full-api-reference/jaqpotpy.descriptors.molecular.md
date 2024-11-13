# jaqpotpy.descriptors.molecular package

## Submodules

## jaqpotpy.descriptors.molecular.maccs_keys_fingerprints module

### *class* jaqpotpy.descriptors.molecular.maccs_keys_fingerprints.MACCSKeysFingerprint

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

MACCS Keys Fingerprint.

The MACCS (Molecular ACCess System) keys are one of the most commonly used structural keys.

### Examples

```pycon
>>> import jaqpotpy as jp
>>> smiles = 'CC(=O)OC1=CC=CC=C1C(=O)O'
>>> featurizer = jp.descriptors.molecular.MACCSKeysFingerprint()
>>> features = featurizer.featurize([smiles])
>>> type(features[0])
<class 'numpy.ndarray'>
>>> features[0].shape
(167,)
```

### References

* <a id='id1'>**[1]**</a> Durant, Joseph L., et al. “Reoptimization of MDL keys for use in drug discovery.” Journal of chemical information and computer sciences 42.6 (2002): 1273-1280.
* <a id='id2'>**[2]**</a> [https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py](https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py)

### Note

This class requires RDKit to be installed.

#### featurize_dataframe(datapoints, convert_nan=False, log_every_n=1000, \*\*kwargs) → DataFrame

Featurize a list of SMILES strings into a pandas DataFrame.

#### Parameters

datapoints
: List of SMILES strings representing the molecules.

convert_nan
: Whether to convert NaNs in the resulting DataFrame, by default False.

log_every_n
: Log progress every n molecules, by default 1000.

#### Returns

pd.DataFrame
: DataFrame containing the MACCS keys fingerprints for the molecules.

## jaqpotpy.descriptors.molecular.mordred module

### *class* jaqpotpy.descriptors.molecular.mordred.MordredDescriptors(ignore_3D: bool = True)

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

Mordred descriptors.

### Attributes

descriptors: List[str]
: List of Mordred descriptor names used in this class.

### References

* <a id='id4'>**[1]**</a> Moriwaki, Hirotomo, et al. “Mordred: a molecular descriptor calculator.” Journal of cheminformatics 10.1 (2018): 4.
* <a id='id5'>**[2]**</a> [http://mordred-descriptor.github.io/documentation/master/descriptors.html](http://mordred-descriptor.github.io/documentation/master/descriptors.html)

### Examples

```pycon
>>> import jaqpotpy as jt
>>> smiles = ['CC(=O)OC1=CC=CC=C1C(=O)O']
>>> featurizer = jt.descriptors.MordredDescriptors()
>>> features = featurizer.featurize(smiles)
```

#### featurize_dataframe(datapoints, convert_nan: bool = True, log_every_n=1000, \*\*kwargs) → DataFrame

Calculate Mordred descriptors for a list of SMILES strings.

#### Parameters

datapoints: list of str
: List of SMILES strings representing the molecules.

convert_nan: bool, optional (default True)
: Whether to convert NaN values to -1000.0.

log_every_n: int, optional (default 1000)
: Log progress every n molecules.

#### Returns

pd.DataFrame
: DataFrame containing the Mordred descriptors for each molecule.
  If ignore_3D is True, the length is 1613.
  If ignore_3D is False, the length is 1826.

## jaqpotpy.descriptors.molecular.rdkit module

Basic molecular features.

### *class* jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors(use_fragment=True, ipc_avg=True)

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

RDKit descriptors.

### Examples

```pycon
>>> import jaqpotpy as jt
>>> smiles = ['CC(=O)OC1=CC=CC=C1C(=O)O']
>>> featurizer = jt.feat.RDKitDescriptors()
>>> features = featurizer.featurize(smiles)
```

#### featurize_dataframe(datapoints, convert_nan: bool = False, log_every_n=1000, \*\*kwargs) → DataFrame

Calculate RDKit descriptors for a list of SMILES strings.

#### Parameters

datapoints
: List of SMILES strings to featurize.

convert_nan
: If True, NaN values in the features will be converted.

log_every_n
: Log progress every n datapoints.

#### Returns

pd.DataFrame
: A DataFrame containing the calculated features.

#### get_desc_list()

Get the list of RDKit descriptors.

#### Returns

list
: A list of tuples containing descriptor names and their corresponding functions.

#### get_desc_names()

Get the names of RDKit descriptors.

#### Returns

list
: A list of descriptor names.

## jaqpotpy.descriptors.molecular.topological_fingerprints module

Topological fingerprints.

### *class* jaqpotpy.descriptors.molecular.topological_fingerprints.TopologicalFingerprint(radius: int = 2, size: int = 2048, chiral: bool = False, bonds: bool = True, features: bool = False)

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

Topological (Morgan) fingerprints.

Extended Connectivity Circular Fingerprints compute a bag-of-words style
representation of a molecule by breaking it into local neighborhoods and
hashing into a bit vector of the specified size. It is used specifically
for structure-activity modeling. See 

```
[1]_
```

 for more details.

### References

* <a id='id16'>**[1]**</a> Rogers, David, and Mathew Hahn. “Extended-connectivity fingerprints.” Journal of chemical information and modeling 50.5 (2010): 742-754.

### Note

This class requires RDKit to be installed.

### Examples

```pycon
>>> import jaqpotpy as jt
>>> from rdkit import Chem
>>> smiles = ['C1=CC=CC=C1']
>>> # Example 1: (size = 2048, radius = 4)
>>> featurizer = jt.descriptors.TopologicalFingerprint(size=2048, radius=4)
>>> features = featurizer.featurize(smiles)
```

#### featurize_dataframe(datapoints, convert_nan=False, log_every_n=1000, \*\*kwargs) → DataFrame

Featurize a list of molecules and return a DataFrame.

#### Parameters

datapoints
: List of molecules to featurize.

convert_nan
: Whether to convert NaN values.

log_every_n
: Log progress every n molecules.

#### Returns

pd.DataFrame
: DataFrame containing the featurized molecules.

## Module contents
