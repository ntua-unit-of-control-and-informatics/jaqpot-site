# jaqpotpy.descriptors package

## Subpackages

* [jaqpotpy.descriptors.graph package](jaqpotpy.descriptors.graph.md)
  * [Submodules](jaqpotpy.descriptors.graph.md#submodules)
  * [jaqpotpy.descriptors.graph.graph_featurizer module](jaqpotpy.descriptors.graph.md#jaqpotpy-descriptors-graph-graph-featurizer-module)
  * [Module contents](jaqpotpy.descriptors.graph.md#module-jaqpotpy.descriptors.graph)
* [jaqpotpy.descriptors.molecular package](jaqpotpy.descriptors.molecular.md)
  * [Submodules](jaqpotpy.descriptors.molecular.md#submodules)
  * [jaqpotpy.descriptors.molecular.maccs_keys_fingerprints module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.maccs_keys_fingerprints)
    * [`MACCSKeysFingerprint`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.maccs_keys_fingerprints.MACCSKeysFingerprint)
  * [jaqpotpy.descriptors.molecular.mordred module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.mordred)
    * [`MordredDescriptors`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.mordred.MordredDescriptors)
  * [jaqpotpy.descriptors.molecular.rdkit module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.rdkit)
    * [`RDKitDescriptors`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors)
      * [`RDKitDescriptors.pick()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors.pick)
      * [`RDKitDescriptors.unpick()`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.RDKitDescriptors.unpick)
    * [`Wrapper`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.rdkit.Wrapper)
  * [jaqpotpy.descriptors.molecular.topological_fingerprints module](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular.topological_fingerprints)
    * [`TopologicalFingerprint`](jaqpotpy.descriptors.molecular.md#jaqpotpy.descriptors.molecular.topological_fingerprints.TopologicalFingerprint)
  * [Module contents](jaqpotpy.descriptors.molecular.md#module-jaqpotpy.descriptors.molecular)
* [jaqpotpy.descriptors.tokenizer package](jaqpotpy.descriptors.tokenizer.md)
  * [Submodules](jaqpotpy.descriptors.tokenizer.md#submodules)
  * [jaqpotpy.descriptors.tokenizer.smiles_tokenizer module](jaqpotpy.descriptors.tokenizer.md#jaqpotpy-descriptors-tokenizer-smiles-tokenizer-module)
  * [Module contents](jaqpotpy.descriptors.tokenizer.md#module-contents)

## Submodules

## jaqpotpy.descriptors.base_classes module

### *class* jaqpotpy.descriptors.base_classes.ComplexFeaturizer

Bases: [`Featurizer`](#jaqpotpy.descriptors.base_classes.Featurizer)

”
Abstract class for calculating features for mol/protein complexes.

#### featurize(datapoints: Iterable[Tuple[str, str]] | None = None, log_every_n: int = 100, \*\*kwargs) → ndarray

Calculate features for mol/protein complexes.
Parameters
———-
datapoints: Iterable[Tuple[str, str]]

> List of filenames (PDB, SDF, etc.) for ligand molecules and proteins.
> Each element should be a tuple of the form (ligand_filename,
> protein_filename).

### Returns

features: np.ndarray
: Array of features

### *class* jaqpotpy.descriptors.base_classes.DataframeFeaturizer

Bases: `object`

Abstract class for calculating a set of features for a datapoint.
This class is abstract and cannot be invoked directly. You’ll
likely only interact with this class if you’re a developer. In
that case, you might want to make a child class which
implements the \_featurize method for calculating features for
a single datapoints if you’d like to make a featurizer for a
new datatype.

> References
* <a id='id1'>**[2]**</a> [https://github.com/deepchem/deepchem](https://github.com/deepchem/deepchem)

#### featurize(datapoints: Iterable[Any], log_every_n: int = 1000, \*\*kwargs) → Any

Calculate features for datapoints.
Parameters
———-
datapoints: Iterable[Any]

> A sequence of objects that you’d like to featurize. Subclassses of
> Featurizer should instantiate the \_featurize method that featurizes
> objects in the sequence.

log_every_n: int, default 1000
: Logs featurization progress every log_every_n steps.

### Returns

np.ndarray
: A numpy array containing a featurized representation of datapoints.

### *class* jaqpotpy.descriptors.base_classes.Featurizer

Bases: `object`

Abstract class for calculating a set of features for a datapoint.
This class is abstract and cannot be invoked directly. You’ll
likely only interact with this class if you’re a developer. In
that case, you might want to make a child class which
implements the \_featurize method for calculating features for
a single datapoints if you’d like to make a featurizer for a
new datatype.

> References
* <a id='id3'>**[2]**</a> [https://github.com/deepchem/deepchem](https://github.com/deepchem/deepchem)

#### featurize(datapoints: Iterable[Any], log_every_n: int = 1000, \*\*kwargs) → ndarray

Calculate features for datapoints.
Parameters
———-
datapoints: Iterable[Any]

> A sequence of objects that you’d like to featurize. Subclassses of
> Featurizer should instantiate the \_featurize method that featurizes
> objects in the sequence.

log_every_n: int, default 1000
: Logs featurization progress every log_every_n steps.

### Returns

np.ndarray
: A numpy array containing a featurized representation of datapoints.

### *class* jaqpotpy.descriptors.base_classes.MaterialFeaturizer

Bases: [`Featurizer`](#jaqpotpy.descriptors.base_classes.Featurizer)

Abstract class for calculating a set of features for an
inorganic crystal composition.
The defining feature of a MaterialFeaturizer is that it
operates on 3D crystal materials.
Inorganic crystal compositions are represented by Pymatgen composition
objects. Featurizers for inorganic crystal compositions that are
subclasses of this class should plan to process input which comes as
Pymatgen composition objects.
This class is abstract and cannot be invoked directly. You’ll
likely only interact with this class if you’re a developer. Child
classes need to implement the \_featurize method for calculating
features for a single crystal composition.
Note
—-
Some subclasses of this class will require pymatgen and matminer to be
installed.

#### featurize(datapoints: List | Iterable[str], log_every_n: int = 1000, \*\*kwargs) → ndarray

Calculate features for crystal compositions.
Parameters
———-
datapoints: Iterable[str]

> Iterable sequence of composition strings, e.g. “MoS2”.

log_every_n: int, default 1000
: Logging messages reported every log_every_n samples.

### Returns

features: np.ndarray
: A numpy array containing a featurized representation of
  compositions.

#### featurize_dataframe(datapoints: List | Iterable[str], log_every_n=1000, \*\*kwargs) → DataFrame

Calculate features for materials.
Parameters
———-
pdb: string

> Either the path of a pdb file or the path to the folder with many pdb files.

log_every_n: int, default 1000
: Logging messages reported every log_every_n samples.

files: str
: Extention of the files - Type of representation of materials.

### Returns

features: pd.Dataframe()
: A pandas Dataframe containing a featurized representation of datapoints.

### *class* jaqpotpy.descriptors.base_classes.MolecularFeaturizer

Bases: [`Featurizer`](#jaqpotpy.descriptors.base_classes.Featurizer)

Abstract class for calculating a set of features for a
molecule.
The defining feature of a MolecularFeaturizer is that it
uses SMILES strings and RDKit molecule objects to represent
small molecules. All other featurizers which are subclasses of
this class should plan to process input which comes as smiles
strings or RDKit molecules.
Child classes need to implement the \_featurize method for
calculating features for a single molecule.

* <a id='id7'>**[1]**</a> Ramsundar-et-al-2019,. “Deep Learning for the Life Sciences.” O’Reilly Media (2019):.
* <a id='id8'>**[2]**</a> [https://github.com/deepchem/deepchem](https://github.com/deepchem/deepchem)

### Note

The subclasses of this class require RDKit to be installed.

#### featurize(datapoints, log_every_n=1000, \*\*kwargs) → ndarray

Calculate features for molecules.
Parameters
———-
datapoints: rdkit.Chem.rdchem.Mol / SMILES string / iterable

> RDKit Mol, or SMILES string or iterable sequence of RDKit mols/SMILES
> strings.

log_every_n: int, default 1000
: Logging messages reported every log_every_n samples.

#### Returns

features: np.ndarray
: A numpy array containing a featurized representation of datapoints.

#### featurize_dataframe(datapoints, log_every_n=1000, \*\*kwargs) → Any

Calculate features for molecules.
Parameters
———-
datapoints: rdkit.Chem.rdchem.Mol / SMILES string / iterable

> RDKit Mol, or SMILES string or iterable sequence of RDKit mols/SMILES
> strings.

log_every_n: int, default 1000
: Logging messages reported every log_every_n samples.

#### Returns

features: pd.Dataframe()
: A pandas Dataframe containing a featurized representation of datapoints.

### *class* jaqpotpy.descriptors.base_classes.ParserFeaturizer

Bases: [`Featurizer`](#jaqpotpy.descriptors.base_classes.Featurizer)

Abstract class for calculating a set of features for one or
a set of files. The defining feature of a ParserFeaturizer
is that it uses files to generate descriptors. All other
featurizers which are subclasses of this class
should plan to process input which comes as a parser of a file or
a folder with files. Child classes need to implement the
\_featurize method for calculating features for a single instance.

#### featurize(log_every_n=1000, \*\*kwargs) → ndarray

Calculate features for materials.
Parameters
———-
material: string

> Either the path of a pdb file or the path to the folder with many pdb files.

log_every_n: int, default 1000
: Logging messages reported every log_every_n samples.

files: str
: Extention of the files - Type of representation of materials

### Returns

features: np.ndarray
: A numpy array containing a featurized representation of datapoints.

#### featurize_dataframe(log_every_n=1000, \*\*kwargs) → Any

Calculate features for materials.
Parameters
———-
pdb: string

> Either the path of a pdb file or the path to the folder with many pdb files.

log_every_n: int, default 1000
: Logging messages reported every log_every_n samples.

files: str
: Extention of the files - Type of representation of materials.

### Returns

features: pd.Dataframe()
: A pandas Dataframe containing a featurized representation of datapoints.

### jaqpotpy.descriptors.base_classes.get_print_threshold() → int

Return the printing threshold for datasets.
The print threshold is the number of elements from ids/tasks to
print when printing representations of Dataset objects.
Returns
———-
threshold: int

> Number of elements that will be printed

## Module contents
