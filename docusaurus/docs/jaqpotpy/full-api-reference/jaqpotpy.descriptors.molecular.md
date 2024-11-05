# jaqpotpy.descriptors.molecular package

## Submodules

## jaqpotpy.descriptors.molecular.maccs_keys_fingerprints module

### *class* jaqpotpy.descriptors.molecular.maccs_keys_fingerprints.MACCSKeysFingerprint

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

MACCS Keys Fingerprint.
The MACCS (Molecular ACCess System) keys are one of the most commonly used structural keys.
Please confirm the details in <sup>[1](#id6)</sup>, 

```
[2]_
```

.
Examples
——–
>>> import jaqpotpy as jp
>>> smiles = ‘CC(=O)OC1=CC=CC=C1C(=O)O’
>>> featurizer = jp.descriptors.molecular.MACCSKeysFingerprint()
>>> features = featurizer.featurize([smiles])
>>> type(features[0])
<class ‘numpy.ndarray’>
>>> features[0].shape
(167,)
References
———-
.. [1] Durant, Joseph L., et al. “Reoptimization of MDL keys for use in drug discovery.”

> Journal of chemical information and computer sciences 42.6 (2002): 1273-1280.
* <a id='id3'>**[2]**</a> [https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py](https://github.com/rdkit/rdkit/blob/master/rdkit/Chem/MACCSkeys.py)

### Note

This class requires RDKit to be installed.

## jaqpotpy.descriptors.molecular.mordred module

### *class* jaqpotpy.descriptors.molecular.mordred.MordredDescriptors(ignore_3D: bool = True)

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

Mordred descriptors.
This class computes a list of chemical descriptors using Mordred.
Please see the details about all descriptors from <sup>[1](#id6)</sup>, 

```
[2]_
```

.
Attributes
———-
descriptors: List[str]

> List of Mordred descriptor names used in this class.

### References

* <a id='id6'>**[1]**</a> Moriwaki, Hirotomo, et al. “Mordred: a molecular descriptor calculator.” Journal of cheminformatics 10.1 (2018): 4.
* <a id='id7'>**[2]**</a> [http://mordred-descriptor.github.io/documentation/master/descriptors.html](http://mordred-descriptor.github.io/documentation/master/descriptors.html)

### Note

This class requires Mordred to be installed.
Examples
——–
>>> import jaqpotpy as jt
>>> smiles = [‘CC(=O)OC1=CC=CC=C1C(=O)O’]
>>> featurizer = jt.descriptors.MordredDescriptors(ignore_3D=True)
>>> features = featurizer.featurize(smiles)
>>> type(features[0])
<class ‘numpy.ndarray’>
>>> features[0].shape
(1613,)

## jaqpotpy.descriptors.molecular.rdkit module

Basic molecular features.

### *class* jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors(use_fragment=True, ipc_avg=True)

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

RDKit descriptors.
This class computes a list of chemical descriptors like
molecular weight, number of valence electrons, maximum and
minimum partial charge, etc using RDKit.
Attributes
———-
descriptors: List[str]

> List of RDKit descriptor names used in this class.

### Note

This class requires RDKit to be installed.
Examples
——–
>>> import jaqpotpy as jt
>>> smiles = [‘CC(=O)OC1=CC=CC=C1C(=O)O’]
>>> featurizer = dc.feat.RDKitDescriptors()
>>> features = featurizer.featurize(smiles)
>>> type(features[0])
<class ‘numpy.ndarray’>
>>> features[0].shape
(208,)

#### pick()

#### *classmethod* unpick(obj)

### *class* jaqpotpy.descriptors.molecular.rdkit.Wrapper(method_name, module_name)

Bases: `object`

## jaqpotpy.descriptors.molecular.topological_fingerprints module

Topological fingerprints.

### *class* jaqpotpy.descriptors.molecular.topological_fingerprints.TopologicalFingerprint(radius: int = 2, size: int = 2048, chiral: bool = False, bonds: bool = True, features: bool = False, sparse: bool = False, smiles: bool = False)

Bases: [`MolecularFeaturizer`](jaqpotpy.descriptors.md#jaqpotpy.descriptors.base_classes.MolecularFeaturizer)

Circular (Morgan) fingerprints.
Extended Connectivity Circular Fingerprints compute a bag-of-words style
representation of a molecule by breaking it into local neighborhoods and
hashing into a bit vector of the specified size. It is used specifically
for structure-activity modelling. See <sup>[1](#id6)</sup> for more details.
References
———-
.. [1] Rogers, David, and Mathew Hahn. “Extended-connectivity fingerprints.”

> Journal of chemical information and modeling 50.5 (2010): 742-754.

### Note

This class requires RDKit to be installed.
Examples
——–
>>> import jaqpotpy as jt
>>> from rdkit import Chem
>>> smiles = [‘C1=CC=CC=C1’]
>>> # Example 1: (size = 2048, radius = 4)
>>> featurizer = jt.descriptors.TopologicalFingerprint(size=2048, radius=4)
>>> features = featurizer.featurize(smiles)
>>> type(features[0])
<class ‘numpy.ndarray’>
>>> features[0].shape
(2048,)
>>> # Example 2: (size = 2048, radius = 4, sparse = True, smiles = True)
>>> featurizer = jt.descriptors.TopologicalFingerprint(size=2048, radius=8,
…                                          sparse=True, smiles=True)
>>> features = featurizer.featurize(smiles)
>>> type(features[0]) # dict containing fingerprints
<class ‘dict’>

## Module contents
