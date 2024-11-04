<a id="seeding"></a>

# seeding

<a id="seeding.hash_seed"></a>

#### hash\_seed

```python
def hash_seed(seed: Optional[int] = None, max_bytes: int = 8) -> int
```

Any given evaluation is likely to have many PRNG's active at
once. (Most commonly, because the environment is running in
multiple processes.) There's literature indicating that having
linear correlations between seeds of multiple PRNG's can correlate
the outputs:
http://blogs.unity3d.com/2015/01/07/a-primer-on-repeatable-random-numbers/
http://stackoverflow.com/questions/1554958/how-different-do-random-seeds-need-to-be
http://dl.acm.org/citation.cfm?id=1276928
Thus, for sanity we hash the seeds before using them. (This scheme
is likely not crypto-strength, but it should be good enough to get
rid of simple correlations.)

**Arguments**:

  ----
- `seed` - None seeds from an operating system specific randomness source.
- `max_bytes` - Maximum number of bytes to use in the hashed seed.

<a id="seeding.create_seed"></a>

#### create\_seed

```python
def create_seed(a: Optional[Union[int, str]] = None,
                max_bytes: int = 8) -> int
```

Create a strong random seed. Otherwise, Python 2 would seed using
the system time, which might be non-robust especially in the
presence of concurrency.

**Arguments**:

  ----
- `a` - None seeds from an operating system specific randomness source.
- `max_bytes` - Maximum number of bytes to use in the seed.

<a id="pytorch_utils"></a>

# pytorch\_utils

Pytorch Utilities.
This file contains utilities that compute Datastractures adn other for Pytorch.

<a id="pytorch_utils.to_torch_graph_data_and_y"></a>

#### to\_torch\_graph\_data\_and\_y

```python
def to_torch_graph_data_and_y(g, y)
```

Returns torch graph data from jaqpot graph_data and adds y

<a id="pytorch_utils.to_torch_graph_data"></a>

#### to\_torch\_graph\_data

```python
def to_torch_graph_data(g)
```

Returns torch graph data from jaqpot graph_data without endpoint

<a id="pytorch_utils.to_torch_graph_data_array_and_regr_y"></a>

#### to\_torch\_graph\_data\_array\_and\_regr\_y

```python
def to_torch_graph_data_array_and_regr_y(mol_g, y)
```

Returns torch graph data from array of jaqpot graph_data and y

<a id="pytorch_utils.to_torch_graph_data_array_and_class_y"></a>

#### to\_torch\_graph\_data\_array\_and\_class\_y

```python
def to_torch_graph_data_array_and_class_y(mol_g, y)
```

Returns torch graph data from array of jaqpot graph_data and y

<a id="pytorch_utils.to_torch_graph_data_array"></a>

#### to\_torch\_graph\_data\_array

```python
def to_torch_graph_data_array(mol_g)
```

Returns torch graph data from array of jaqpot graph_data

<a id="geometry_utils"></a>

# geometry\_utils

Geometric utility functions for 3D geometry.

<a id="geometry_utils.unit_vector"></a>

#### unit\_vector

```python
def unit_vector(vector: np.ndarray) -> np.ndarray
```

Returns the unit vector of the vector.

Parameters
----------
vector: np.ndarray
  A numpy array of shape `(3,)`, where `3` is (x,y,z).

Returns
-------
np.ndarray
  A numpy array of shape `(3,)`. The unit vector of the input vector.

<a id="geometry_utils.angle_between"></a>

#### angle\_between

```python
def angle_between(vector_i: np.ndarray, vector_j: np.ndarray) -> float
```

Returns the angle in radians between vectors "vector_i" and "vector_j"
Note that this function always returns the smaller of the two angles between
the vectors (value between 0 and pi).

Parameters
----------
vector_i: np.ndarray
  A numpy array of shape `(3,)`, where `3` is (x,y,z).
vector_j: np.ndarray
  A numpy array of shape `(3,)`, where `3` is (x,y,z).

Returns
-------
np.ndarray
  The angle in radians between the two vectors.

Examples
--------
>>> print("%0.06f" % angle_between((1, 0, 0), (0, 1, 0)))
1.570796
>>> print("%0.06f" % angle_between((1, 0, 0), (1, 0, 0)))
0.000000
>>> print("%0.06f" % angle_between((1, 0, 0), (-1, 0, 0)))
3.141593

<a id="geometry_utils.generate_random_unit_vector"></a>

#### generate\_random\_unit\_vector

```python
def generate_random_unit_vector() -> np.ndarray
```

Generate a random unit vector on the sphere S^2.
Citation: http://mathworld.wolfram.com/SpherePointPicking.html
Pseudocode:
  a. Choose random theta \element [0, 2*pi]
  b. Choose random z \element [-1, 1]
  c. Compute output vector u: (x,y,z) = (sqrt(1-z^2)*cos(theta), sqrt(1-z^2)*sin(theta),z)

Returns
-------
u: np.ndarray
  A numpy array of shape `(3,)`. u is an unit vector

<a id="geometry_utils.generate_random_rotation_matrix"></a>

#### generate\_random\_rotation\_matrix

```python
def generate_random_rotation_matrix() -> np.ndarray
```

Generates a random rotation matrix.
1. Generate a random unit vector u, randomly sampled from the
   unit sphere (see function generate_random_unit_vector()
   for details)
2. Generate a second random unit vector v
  a. If absolute value of u \dot v > 0.99, repeat.
     (This is important for numerical stability. Intuition: we
     want them to be as linearly independent as possible or
     else the orthogonalized version of v will be much shorter
     in magnitude compared to u. I assume in Stack they took
     this from Gram-Schmidt orthogonalization?)
  b. v" = v - (u \dot v)*u, i.e. subtract out the component of
     v that's in u's direction
  c. normalize v" (this isn"t in Stack but I assume it must be
     done)
3. find w = u \cross v"
4. u, v", and w will form the columns of a rotation matrix, R.
   The intuition is that u, v" and w are, respectively, what
   the standard basis vectors e1, e2, and e3 will be mapped
   to under the transformation.

Returns
-------
R: np.ndarray
  A numpy array of shape `(3, 3)`. R is a rotation matrix.

<a id="geometry_utils.rotate_molecules"></a>

#### rotate\_molecules

```python
def rotate_molecules(mol_coordinates_list)
```

Rotates provided molecular coordinates.
Pseudocode:
1. Generate random rotation matrix. This matrix applies a random
   transformation to any 3-vector such that, were the random transformation
   repeatedly applied, it would randomly sample along the surface of a sphere
   with radius equal to the norm of the given 3-vector cf.
   _generate_random_rotation_matrix() for details
2. Apply R to all atomic coordinatse.
3. Return rotated molecule

<a id="geometry_utils.is_angle_within_cutoff"></a>

#### is\_angle\_within\_cutoff

```python
def is_angle_within_cutoff(vector_i: np.ndarray, vector_j: np.ndarray,
                           angle_cutoff: float) -> bool
```

A utility function to compute whether two vectors are within a cutoff from 180 degrees apart.

Parameters
----------
vector_i: np.ndarray
  A numpy array of shape (3,)`, where `3` is (x,y,z).
vector_j: np.ndarray
  A numpy array of shape `(3,)`, where `3` is (x,y,z).
cutoff: float
  The deviation from 180 (in degrees)

Returns
-------
bool
  Whether two vectors are within a cutoff from 180 degrees apart

<a id="geometry_utils.compute_centroid"></a>

#### compute\_centroid

```python
def compute_centroid(coordinates: np.ndarray) -> np.ndarray
```

Compute the (x,y,z) centroid of provided coordinates

Parameters
----------
coordinates: np.ndarray
  A numpy array of shape `(N, 3)`, where `N` is the number of atoms.

Returns
-------
centroid: np.ndarray
  A numpy array of shape `(3,)`, where `3` is (x,y,z).

<a id="geometry_utils.compute_protein_range"></a>

#### compute\_protein\_range

```python
def compute_protein_range(coordinates: np.ndarray) -> np.ndarray
```

Compute the protein range of provided coordinates

Parameters
----------
coordinates: np.ndarray
  A numpy array of shape `(N, 3)`, where `N` is the number of atoms.

Returns
-------
protein_range: np.ndarray
  A numpy array of shape `(3,)`, where `3` is (x,y,z).

<a id="geometry_utils.subtract_centroid"></a>

#### subtract\_centroid

```python
def subtract_centroid(coordinates: np.ndarray,
                      centroid: np.ndarray) -> np.ndarray
```

Subtracts centroid from each coordinate.
Subtracts the centroid, a numpy array of dim 3, from all coordinates
of all atoms in the molecule
Note that this update is made in place to the array it's applied to.

Parameters
----------
coordinates: np.ndarray
  A numpy array of shape `(N, 3)`, where `N` is the number of atoms.
centroid: np.ndarray
  A numpy array of shape `(3,)`

Returns
-------
coordinates: np.ndarray
  A numpy array of shape `(3,)`, where `3` is (x,y,z).

<a id="geometry_utils.compute_pairwise_distances"></a>

#### compute\_pairwise\_distances

```python
def compute_pairwise_distances(first_coordinate: np.ndarray,
                               second_coordinate: np.ndarray) -> np.ndarray
```

Computes pairwise distances between two molecules.
Takes an input (m, 3) and (n, 3) numpy arrays of 3D coords of
two molecules respectively, and outputs an m x n numpy
array of pairwise distances in Angstroms between the first and
second molecule. entry (i,j) is dist between the i"th
atom of first molecule and the j"th atom of second molecule.

Parameters
----------
first_coordinate: np.ndarray
  A numpy array of shape `(m, 3)`, where `m` is the number of atoms.
second_coordinate: np.ndarray
  A numpy array of shape `(n, 3)`, where `n` is the number of atoms.

Returns
-------
pairwise_distances: np.ndarray
  A numpy array of shape `(m, n)`

<a id="__init__"></a>

# \_\_init\_\_

<a id="types"></a>

# types

<a id="data_utils"></a>

# data\_utils

<a id="data_utils.pad_array"></a>

#### pad\_array

```python
def pad_array(x: np.ndarray,
              shape: Union[Tuple, int],
              fill: float = 0.0,
              both: bool = False) -> np.ndarray
```

Pad an array with a fill value.

Parameters
----------
x: np.ndarray
  A numpy array.
shape: Tuple or int
  Desired shape. If int, all dimensions are padded to that size.
fill: float, optional (default 0.0)
  The padded value.
both: bool, optional (default False)
  If True, split the padding on both sides of each axis. If False,
  padding is applied to the end of each axis.

Returns
-------
np.ndarray
  A padded numpy array

<a id="data_utils.get_data_dir"></a>

#### get\_data\_dir

```python
def get_data_dir() -> str
```

Get the DeepChem data directory.

Returns
-------
str
  The default path to store DeepChem data. If you want to
  change this path, please set your own path to `DEEPCHEM_DATA_DIR`
  as an environment variable.

<a id="data_utils.download_url"></a>

#### download\_url

```python
def download_url(url: str,
                 dest_dir: str = get_data_dir(),
                 name: Optional[str] = None)
```

Download a file to disk.

Parameters
----------
url: str
  The URL to download from
dest_dir: str
  The directory to save the file in
name: str
  The file name to save it as.  If omitted, it will try to extract a file name from the URL

<a id="data_utils.untargz_file"></a>

#### untargz\_file

```python
def untargz_file(file: str,
                 dest_dir: str = get_data_dir(),
                 name: Optional[str] = None)
```

Untar and unzip a .tar.gz file to disk.

Parameters
----------
file: str
  The filepath to decompress
dest_dir: str
  The directory to save the file in
name: str
  The file name to save it as.  If omitted, it will use the file name

<a id="data_utils.unzip_file"></a>

#### unzip\_file

```python
def unzip_file(file: str,
               dest_dir: str = get_data_dir(),
               name: Optional[str] = None)
```

Unzip a .zip file to disk.

Parameters
----------
file: str
  The filepath to decompress
dest_dir: str
  The directory to save the file in
name: str
  The directory name to unzip it to.  If omitted, it will use the file name

<a id="rdkit_utils"></a>

# rdkit\_utils

RDKit Utilities.
This file contains utilities that compute useful properties of
molecules. Some of these are simple cleanup utilities, and
others are more sophisticated functions that detect chemical
properties of molecules.

<a id="rdkit_utils.get_xyz_from_mol"></a>

#### get\_xyz\_from\_mol

```python
def get_xyz_from_mol(mol)
```

Extracts a numpy array of coordinates from a molecules.
Returns a `(N, 3)` numpy array of 3d coords of given rdkit molecule

Parameters
----------
mol: rdkit Molecule
  Molecule to extract coordinates for

Returns
-------
Numpy ndarray of shape `(N, 3)` where `N = mol.GetNumAtoms()`.

<a id="rdkit_utils.add_hydrogens_to_mol"></a>

#### add\_hydrogens\_to\_mol

```python
def add_hydrogens_to_mol(mol, is_protein=False)
```

Add hydrogens to a molecule object

Parameters
----------
mol: Rdkit Mol
  Molecule to hydrogenate
is_protein: bool, optional (default False)
  Whether this molecule is a protein.

Returns
-------
Rdkit Mol
Note
----
This function requires RDKit and PDBFixer to be installed.

<a id="rdkit_utils.apply_pdbfixer"></a>

#### apply\_pdbfixer

```python
def apply_pdbfixer(mol,
                   add_missing=True,
                   hydrogenate=True,
                   pH=7.4,
                   remove_heterogens=True,
                   is_protein=True)
```

Apply PDBFixer to a molecule to try to clean it up.

Parameters
----------
mol: Rdkit Mol
  Molecule to clean up.
add_missing: bool, optional
  If true, add in missing residues and atoms
hydrogenate: bool, optional
  If true, add hydrogens at specified pH
pH: float, optional
  The pH at which hydrogens will be added if `hydrogenate==True`. Set to 7.4 by default.
remove_heterogens: bool, optional
  Often times, PDB files come with extra waters and salts attached.
  If this field is set, remove these heterogens.
is_protein: bool, optional
  If false, then don't remove heterogens (since this molecule is
  itself a heterogen).

Returns
-------
Rdkit Mol
Note
----
This function requires RDKit and PDBFixer to be installed.

<a id="rdkit_utils.compute_charges"></a>

#### compute\_charges

```python
def compute_charges(mol)
```

Attempt to compute Gasteiger Charges on Mol
This also has the side effect of calculating charges on mol.  The
mol passed into this function has to already have been sanitized

Parameters
----------
mol: rdkit molecule

Returns
-------
No return since updates in place.
Note
----
This function requires RDKit to be installed.

<a id="rdkit_utils.load_complex"></a>

#### load\_complex

```python
def load_complex(molecular_complex: OneOrMany[str],
                 add_hydrogens: bool = True,
                 calc_charges: bool = True,
                 sanitize: bool = True) -> List[Tuple[np.ndarray, RDKitMol]]
```

Loads a molecular complex.
Given some representation of a molecular complex, returns a list of
tuples, where each tuple contains (xyz coords, rdkit object) for
that constituent molecule in the complex.
For now, assumes that molecular_complex is a tuple of filenames.

Parameters
----------
molecular_complex: list or str
  If list, each entry should be a filename for a constituent
  molecule in complex. If str, should be the filename of a file that
  holds the full complex.
add_hydrogens: bool, optional
  If true, add hydrogens via pdbfixer
calc_charges: bool, optional
  If true, add charges via rdkit
sanitize: bool, optional
  If true, sanitize molecules via rdkit

Returns
-------
List of tuples (xyz, mol)
Note
----
This function requires RDKit to be installed.

<a id="rdkit_utils.load_molecule"></a>

#### load\_molecule

```python
def load_molecule(molecule_file,
                  add_hydrogens=False,
                  calc_charges=False,
                  sanitize=True,
                  is_protein=False)
```

Converts molecule file to (xyz-coords, obmol object)
Given molecule_file, returns a tuple of xyz coords of molecule
and an rdkit object representing that molecule in that order `(xyz,
rdkit_mol)`. This ordering convention is used in the code in a few
places.

Parameters
----------
molecule_file: str
  filename for molecule
add_hydrogens: bool, optional (default True)
  If True, add hydrogens via pdbfixer
calc_charges: bool, optional (default True)
  If True, add charges via rdkit
sanitize: bool, optional (default False)
  If True, sanitize molecules via rdkit
is_protein: bool, optional (default False)
  If True`, this molecule is loaded as a protein. This flag will
  affect some of the cleanup procedures applied.

Returns
-------
Tuple (xyz, mol) if file contains single molecule. Else returns a
list of the tuples for the separate molecules in this list.
Note
----
This function requires RDKit to be installed.

<a id="rdkit_utils.write_molecule"></a>

#### write\_molecule

```python
def write_molecule(mol, outfile, is_protein=False)
```

Write molecule to a file
This function writes a representation of the provided molecule to
the specified `outfile`. Doesn't return anything.

Parameters
----------
mol: rdkit Mol
  Molecule to write
outfile: str
  Filename to write mol to
is_protein: bool, optional
  Is this molecule a protein?
Note
----
This function requires RDKit to be installed.

Raises
------
ValueError: if `outfile` isn't of a supported format.

<a id="rdkit_utils.merge_molecules_xyz"></a>

#### merge\_molecules\_xyz

```python
def merge_molecules_xyz(xyzs)
```

Merges coordinates of multiple molecules.

Parameters
----------
xyzs: List
  List of numpy arrays each of shape `(N_i, 3)` where `N_i` is the number of atoms in the i-th atom.

<a id="rdkit_utils.merge_molecules"></a>

#### merge\_molecules

```python
def merge_molecules(molecules)
```

Helper method to merge two molecules.

Parameters
----------
molecules: list
  List of rdkit molecules

Returns
-------
merged: rdkit molecule

<a id="rdkit_utils.compute_all_ecfp"></a>

#### compute\_all\_ecfp

```python
def compute_all_ecfp(mol: RDKitMol,
                     indices: Optional[Set[int]] = None,
                     degree: int = 2) -> Dict[int, str]
```

Obtain molecular fragment for all atoms emanating outward to given degree.
For each fragment, compute SMILES string (for now) and hash to
an int. Return a dictionary mapping atom index to hashed
SMILES.

Parameters
----------
mol: rdkit Molecule
  Molecule to compute ecfp fragments on
indices: Optional[Set[int]]
  List of atom indices for molecule. Default is all indices. If
  specified will only compute fragments for specified atoms.
degree: int
  Graph degree to use when computing ECFP fingerprints

Returns
-------
dict
  Dictionary mapping atom index to hashed smiles.

<a id="rdkit_utils.compute_ecfp_features"></a>

#### compute\_ecfp\_features

```python
def compute_ecfp_features(mol, ecfp_degree=2, ecfp_power=11)
```

Computes ECFP features for provided rdkit molecule.

Parameters
----------
mol: rdkit molecule
  Molecule to featurize.
ecfp_degree: int
  ECFP radius
ecfp_power: int
  Number of bits to store ECFP features (2^ecfp_power will be length of
  ECFP array)

Returns
-------
ecfp_array: np.ndarray
  Returns an array of size 2^ecfp_power where array at index i has a 1 if
  that ECFP fragment is found in the molecule and array at index j has a 0
  if ECFP fragment not in molecule.

<a id="rdkit_utils.compute_contact_centroid"></a>

#### compute\_contact\_centroid

```python
def compute_contact_centroid(molecular_complex: Any,
                             cutoff: float = 4.5) -> np.ndarray
```

Computes the (x,y,z) centroid of the contact regions of this molecular complex.
For a molecular complex, it's necessary for various featurizations
that compute voxel grids to find a reasonable center for the
voxelization. This function computes the centroid of all the contact
atoms, defined as an atom that's within `cutoff` Angstroms of an
atom from a different molecule.

Parameters
----------
molecular_complex: Object
  A representation of a molecular complex, produced by
  `rdkit_util.load_complex`.
cutoff: float, optional
  The distance in Angstroms considered for computing contacts.

<a id="rdkit_utils.reduce_molecular_complex_to_contacts"></a>

#### reduce\_molecular\_complex\_to\_contacts

```python
def reduce_molecular_complex_to_contacts(fragments: List,
                                         cutoff: float = 4.5) -> List
```

Reduce a molecular complex to only those atoms near a contact.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren't close to contact regions. This
function takes in a molecular complex and returns a new molecular
complex representation that contains only contact atoms. The contact
atoms are computed by calling `get_contact_atom_indices` under the
hood.

Parameters
----------
fragments: List
  As returned by `rdkit_util.load_complex`, a list of tuples of
  `(coords, mol)` where `coords` is a `(N_atoms, 3)` array and `mol`
  is the rdkit molecule object.
cutoff: float
  The cutoff distance in angstroms.

Returns
-------
A list of length `len(molecular_complex)`. Each entry in this list
is a tuple of `(coords, MolecularShim)`. The coords is stripped down
to `(N_contact_atoms, 3)` where `N_contact_atoms` is the number of
contact atoms for this complex. `MolecularShim` is used since it's
tricky to make a RDKit sub-molecule.

<a id="rdkit_utils.compute_ring_center"></a>

#### compute\_ring\_center

```python
def compute_ring_center(mol, ring_indices)
```

Computes 3D coordinates of a center of a given ring.

Parameters
----------
mol: rdkit.rdchem.Mol
  Molecule containing a ring
ring_indices: array-like
  Indices of atoms forming a ring

Returns
-------
ring_centroid: np.ndarray
  Position of a ring center

<a id="rdkit_utils.get_contact_atom_indices"></a>

#### get\_contact\_atom\_indices

```python
def get_contact_atom_indices(fragments: List, cutoff: float = 4.5) -> List
```

Compute the atoms close to contact region.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren't close to contact regions. This
function computes pairwise distances between all pairs of molecules
in the molecular complex. If an atom is within cutoff distance of
any atom on another molecule in the complex, it is regarded as a
contact atom. Otherwise it is trimmed.

Parameters
----------
fragments: List
  As returned by `rdkit_util.load_complex`, a list of tuples of
  `(coords, mol)` where `coords` is a `(N_atoms, 3)` array and `mol`
  is the rdkit molecule object.
cutoff: float
  The cutoff distance in angstroms.

Returns
-------
A list of length `len(molecular_complex)`. Each entry in this list
is a list of atom indices from that molecule which should be kept, in
sorted order.

<a id="rdkit_utils.get_mol_subset"></a>

#### get\_mol\_subset

```python
def get_mol_subset(coords, mol, atom_indices_to_keep)
```

Strip a subset of the atoms in this molecule

Parameters
----------
coords: Numpy ndarray
  Must be of shape (N, 3) and correspond to coordinates of mol.
mol: Rdkit mol or `MolecularFragment`
  The molecule to strip
atom_indices_to_keep: list
  List of the indices of the atoms to keep. Each index is a unique
  number between `[0, N)`.

Returns
-------
A tuple of (coords, mol_frag) where coords is a Numpy array of
coordinates with hydrogen coordinates. mol_frag is a
`MolecularFragment`.

<a id="rdkit_utils.compute_ring_normal"></a>

#### compute\_ring\_normal

```python
def compute_ring_normal(mol, ring_indices)
```

Computes normal to a plane determined by a given ring.

Parameters
----------
mol: rdkit.rdchem.Mol
  Molecule containing a ring
ring_indices: array-like
  Indices of atoms forming a ring

Returns
-------
normal: np.ndarray
  Normal vector

<a id="rdkit_utils.compute_all_pairs_shortest_path"></a>

#### compute\_all\_pairs\_shortest\_path

```python
def compute_all_pairs_shortest_path(
        mol) -> Dict[Tuple[int, int], Tuple[int, int]]
```

Computes the All pair shortest between every pair of nodes
in terms of Rdkit Atom indexes.

Parameters
----------
mol: rdkit.rdchem.Mol
  Molecule containing a ring

Returns
-------
paths_dict: Dict representing every atom-atom pair as key in Rdkit index
and value as the shortest path between each atom pair in terms of Atom index.

<a id="rdkit_utils.compute_pairwise_ring_info"></a>

#### compute\_pairwise\_ring\_info

```python
def compute_pairwise_ring_info(mol)
```

Computes all atom-atom pair belong to same ring with
its ring size and its aromaticity.

Parameters
----------
mol: rdkit.rdchem.Mol
  Molecule containing a ring

Returns
-------
rings_dict: Key consisting of all node-node pair sharing the same ring
and value as a tuple of size of ring and its aromaticity.

<a id="fragment_utils"></a>

# fragment\_utils

A collection of utilities for dealing with Molecular Fragments

<a id="fragment_utils.AtomShim"></a>

## AtomShim Objects

```python
class AtomShim(object)
```

This is a shim object wrapping an atom.
We use this class instead of raw RDKit atoms since manipulating a
large number of rdkit Atoms seems to result in segfaults. Wrapping
the basic information in an AtomShim seems to avoid issues.

<a id="fragment_utils.AtomShim.__init__"></a>

#### \_\_init\_\_

```python
def __init__(atomic_num: int, partial_charge: float, atom_coords: np.ndarray)
```

Initialize this object

Parameters
----------
atomic_num: int
  Atomic number for this atom.
partial_charge: float
  The partial Gasteiger charge for this atom
atom_coords: np.ndarray
  Of shape (3,) with the coordinates of this atom

<a id="fragment_utils.AtomShim.GetAtomicNum"></a>

#### GetAtomicNum

```python
def GetAtomicNum() -> int
```

Returns atomic number for this atom.

Returns
-------
int
  Atomic number for this atom.

<a id="fragment_utils.AtomShim.GetPartialCharge"></a>

#### GetPartialCharge

```python
def GetPartialCharge() -> float
```

Returns partial charge for this atom.

Returns
-------
float
  A partial Gasteiger charge for this atom.

<a id="fragment_utils.AtomShim.GetCoords"></a>

#### GetCoords

```python
def GetCoords() -> np.ndarray
```

Returns 3D coordinates for this atom as numpy array.

Returns
-------
np.ndarray
  Numpy array of shape `(3,)` with coordinates for this atom.

<a id="fragment_utils.MolecularFragment"></a>

## MolecularFragment Objects

```python
class MolecularFragment(object)
```

A class that represents a fragment of a molecule.
It's often convenient to represent a fragment of a molecule. For
example, if two molecules form a molecular complex, it may be useful
to create two fragments which represent the subsets of each molecule
that's close to the other molecule (in the contact region).
Ideally, we'd be able to do this in RDKit direct, but manipulating
molecular fragments doesn't seem to be supported functionality.

Examples
--------
>>> import numpy as np
>>> from rdkit import Chem
>>> mol = Chem.MolFromSmiles("C")
>>> coords = np.array([[0.0, 0.0, 0.0]])
>>> atom = mol.GetAtoms()[0]
>>> fragment = MolecularFragment([atom], coords)

<a id="fragment_utils.MolecularFragment.__init__"></a>

#### \_\_init\_\_

```python
def __init__(atoms: Sequence[RDKitAtom], coords: np.ndarray)
```

Initialize this object.

Parameters
----------
atoms: Iterable[rdkit.Chem.rdchem.Atom]
  Each entry in this list should be a RDKit Atom.
coords: np.ndarray
  Array of locations for atoms of shape `(N, 3)` where `N ==
  len(atoms)`.

<a id="fragment_utils.MolecularFragment.GetAtoms"></a>

#### GetAtoms

```python
def GetAtoms() -> List[AtomShim]
```

Returns the list of atoms

Returns
-------
List[AtomShim]
  list of atoms in this fragment.

<a id="fragment_utils.MolecularFragment.GetNumAtoms"></a>

#### GetNumAtoms

```python
def GetNumAtoms() -> int
```

Returns the number of atoms

Returns
-------
int
  Number of atoms in this fragment.

<a id="fragment_utils.MolecularFragment.GetCoords"></a>

#### GetCoords

```python
def GetCoords() -> np.ndarray
```

Returns 3D coordinates for this fragment as numpy array.

Returns
-------
np.ndarray
  A numpy array of shape `(N, 3)` with coordinates for this fragment.
  Here, N is the number of atoms.

<a id="fragment_utils.get_partial_charge"></a>

#### get\_partial\_charge

```python
def get_partial_charge(atom: Union[RDKitAtom, AtomShim]) -> float
```

Get partial charge of a given atom (rdkit Atom object)

Parameters
----------
atom: rdkit.Chem.rdchem.Atom or AtomShim
  Either a rdkit.Atom object or `AtomShim`

Returns
-------
float
  A partial Gasteiger charge of a given atom.

Notes
-----
This function requires RDKit to be installed.

Examples
--------
>>> from rdkit import Chem
>>> mol = Chem.MolFromSmiles("CC")
>>> atom = mol.GetAtoms()[0]
>>> get_partial_charge(atom)
0.0

<a id="fragment_utils.merge_molecular_fragments"></a>

#### merge\_molecular\_fragments

```python
def merge_molecular_fragments(
        molecules: List[MolecularFragment]) -> Optional[MolecularFragment]
```

Helper method to merge two molecular fragments.

Parameters
----------
molecules: List[MolecularFragment]
  List of `MolecularFragment` objects.

Returns
-------
Optional[MolecularFragment]
  Returns a merged `MolecularFragment`

<a id="fragment_utils.get_mol_subset"></a>

#### get\_mol\_subset

```python
def get_mol_subset(
        coords: np.ndarray, mol: Union[RDKitMol, MolecularFragment],
        atom_indices_to_keep: List[int]
) -> Tuple[np.ndarray, MolecularFragment]
```

Strip a subset of the atoms in this molecule

Parameters
----------
coords: np.ndarray
  Must be of shape (N, 3) and correspond to coordinates of mol.
mol: rdkit.Chem.rdchem.Mol or MolecularFragment
  The molecule to strip
atom_indices_to_keep: list
  List of the indices of the atoms to keep. Each index is a unique
  number between `[0, N)`.

Returns
-------
Tuple[np.ndarray, MolecularFragment]
  A tuple of `(coords, mol_frag)` where `coords` is a numpy array of
  coordinates with hydrogen coordinates. `mol_frag` is a `MolecularFragment`.

Notes
-----
This function requires RDKit to be installed.

<a id="fragment_utils.strip_hydrogens"></a>

#### strip\_hydrogens

```python
def strip_hydrogens(
    coords: np.ndarray, mol: Union[RDKitMol, MolecularFragment]
) -> Tuple[np.ndarray, MolecularFragment]
```

Strip the hydrogens from input molecule

Parameters
----------
coords: np.ndarray
  The coords must be of shape (N, 3) and correspond to coordinates of mol.
mol: rdkit.Chem.rdchem.Mol or MolecularFragment
  The molecule to strip

Returns
-------
Tuple[np.ndarray, MolecularFragment]
  A tuple of `(coords, mol_frag)` where `coords` is a numpy array of
  coordinates with hydrogen coordinates. `mol_frag` is a `MolecularFragment`.

Notes
-----
This function requires RDKit to be installed.

<a id="fragment_utils.get_contact_atom_indices"></a>

#### get\_contact\_atom\_indices

```python
def get_contact_atom_indices(fragments: List[Tuple[np.ndarray, RDKitMol]],
                             cutoff: float = 4.5) -> List[List[int]]
```

Compute that atoms close to contact region.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren't close to contact regions. This
function computes pairwise distances between all pairs of molecules
in the molecular complex. If an atom is within cutoff distance of
any atom on another molecule in the complex, it is regarded as a
contact atom. Otherwise it is trimmed.

Parameters
----------
fragments: List[Tuple[np.ndarray, rdkit.Chem.rdchem.Mol]]
  As returned by `rdkit_utils.load_complex`, a list of tuples of
  `(coords, mol)` where `coords` is a `(N_atoms, 3)` array and `mol`
  is the rdkit molecule object.
cutoff: float, optional (default 4.5)
  The cutoff distance in angstroms.

Returns
-------
List[List[int]]
  A list of length `len(molecular_complex)`. Each entry in this list
  is a list of atom indices from that molecule which should be kept, in
  sorted order.

<a id="fragment_utils.reduce_molecular_complex_to_contacts"></a>

#### reduce\_molecular\_complex\_to\_contacts

```python
def reduce_molecular_complex_to_contacts(
        fragments: List[Tuple[np.ndarray, RDKitMol]],
        cutoff: float = 4.5) -> List[Tuple[np.ndarray, MolecularFragment]]
```

Reduce a molecular complex to only those atoms near a contact.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren't close to contact regions. This
function takes in a molecular complex and returns a new molecular
complex representation that contains only contact atoms. The contact
atoms are computed by calling `get_contact_atom_indices` under the
hood.

Parameters
----------
fragments: List[Tuple[np.ndarray, rdkit.Chem.rdchem.Mol]]
  As returned by `rdkit_utils.load_complex`, a list of tuples of
  `(coords, mol)` where `coords` is a `(N_atoms, 3)` array and `mol`
  is the rdkit molecule object.
cutoff: float
  The cutoff distance in angstroms.

Returns
-------
List[Tuple[np.ndarray, MolecularFragment]]
  A list of length `len(molecular_complex)`. Each entry in this list
  is a tuple of `(coords, MolecularFragment)`. The coords is stripped
  down to `(N_contact_atoms, 3)` where `N_contact_atoms` is the number
  of contact atoms for this complex. `MolecularFragment` is used since
  it's tricky to make a RDKit sub-molecule.

<a id="fragment_utils.compute_charges"></a>

#### compute\_charges

```python
def compute_charges(mol)
```

Attempt to compute Gasteiger Charges on Mol
This also has the side effect of calculating charges on mol.  The
mol passed into this function has to already have been sanitized

Parameters
----------
mol: rdkit molecule

Returns
-------
No return since updates in place.
Note
----
This function requires RDKit to be installed.

<a id="installed_packages"></a>

# installed\_packages

<a id="installed_packages.get_installed_packages"></a>

#### get\_installed\_packages

```python
def get_installed_packages() -> dict
```

Retrieves a dictionary of installed packages and their versions using pip.freeze.

Returns
-------
    dict: A dictionary with package names as keys and versions as values.

<a id="url_utils"></a>

# url\_utils

<a id="url_utils.add_subdomain"></a>

#### add\_subdomain

```python
def add_subdomain(url, subdomain)
```

**Arguments**:

- `url`: 
- `subdomain`: 

<a id="molecule_feature_utils"></a>

# molecule\_feature\_utils

Utilities for constructing node features or bond features.
Some functions are based on chainer-chemistry or dgl-lifesci.
Repositories:
- https://github.com/chainer/chainer-chemistry
- https://github.com/awslabs/dgl-lifesci

<a id="molecule_feature_utils.one_hot_encode"></a>

#### one\_hot\_encode

```python
def one_hot_encode(val: Union[int, str],
                   allowable_set: Union[List[str], List[int]],
                   include_unknown_set: bool = False) -> List[float]
```

One hot encoder for elements of a provided set.

Examples
--------
>>> one_hot_encode("a", ["a", "b", "c"])
[1.0, 0.0, 0.0]
>>> one_hot_encode(2, [0, 1, 2])
[0.0, 0.0, 1.0]
>>> one_hot_encode(3, [0, 1, 2])
[0.0, 0.0, 0.0]
>>> one_hot_encode(3, [0, 1, 2], True)
[0.0, 0.0, 0.0, 1.0]

Parameters
----------
val: int or str
  The value must be present in `allowable_set`.
allowable_set: List[int] or List[str]
  List of allowable quantities.
include_unknown_set: bool, default False
  If true, the index of all values not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  An one-hot vector of val.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

Raises
------
ValueError
  If include_unknown_set is False and `val` is not in `allowable_set`.

<a id="molecule_feature_utils.get_atom_type_one_hot"></a>

#### get\_atom\_type\_one\_hot

```python
def get_atom_type_one_hot(atom: RDKitAtom,
                          allowable_set: List[str] = DEFAULT_ATOM_TYPE_SET,
                          include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of an atom type.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[str]
  The atom types to consider. The default set is
  `["C", "N", "O", "F", "P", "S", "Cl", "Br", "I"]`.
include_unknown_set: bool, default True
  If true, the index of all atom not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  An one-hot vector of atom types.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.construct_hydrogen_bonding_info"></a>

#### construct\_hydrogen\_bonding\_info

```python
def construct_hydrogen_bonding_info(mol: RDKitMol) -> List[Tuple[int, str]]
```

Construct hydrogen bonding infos about a molecule.

Parameters
----------
mol: rdkit.Chem.rdchem.Mol
  RDKit mol object

Returns
-------
List[Tuple[int, str]]
  A list of tuple `(atom_index, hydrogen_bonding_type)`.
  The `hydrogen_bonding_type` value is "Acceptor" or "Donor".

<a id="molecule_feature_utils.get_atom_num_radical_electrons"></a>

#### get\_atom\_num\_radical\_electrons

```python
def get_atom_num_radical_electrons(atom: RDKitAtom)
```

Get the number of radical electrons for an atom.

Parameters
----------
atom : rdkit.Chem.rdchem.Atom
    RDKit atom instance.

Returns
-------
list
    List containing one int only.

See Also
--------
atom_num_radical_electrons_one_hot

<a id="molecule_feature_utils.get_atom_is_aromatic"></a>

#### get\_atom\_is\_aromatic

```python
def get_atom_is_aromatic(atom: RDKitAtom)
```

Get whether the atom is aromatic.

Parameters
----------
atom : rdkit.Chem.rdchem.Atom
    RDKit atom instance.

Returns
-------
list
    List containing one bool only.

See Also
--------
atom_is_aromatic_one_hot

<a id="molecule_feature_utils.get_atom_is_chiral_center"></a>

#### get\_atom\_is\_chiral\_center

```python
def get_atom_is_chiral_center(atom: RDKitAtom)
```

Get whether the atom is chiral center

Parameters
----------
atom : rdkit.Chem.rdchem.Atom
    RDKit atom instance.

Returns
-------
list
    List containing one bool only.

<a id="molecule_feature_utils.get_atom_hydrogen_bonding_one_hot"></a>

#### get\_atom\_hydrogen\_bonding\_one\_hot

```python
def get_atom_hydrogen_bonding_one_hot(
        atom: RDKitAtom, hydrogen_bonding: List[Tuple[int,
                                                      str]]) -> List[float]
```

Get an one-hot feat about whether an atom accepts electrons or donates electrons.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
hydrogen_bonding: List[Tuple[int, str]]
  The return value of `construct_hydrogen_bonding_info`.
  The value is a list of tuple `(atom_index, hydrogen_bonding)` like (1, "Acceptor").

Returns
-------
List[float]
  A one-hot vector of the ring size type. The first element
  indicates "Donor", and the second element indicates "Acceptor".

<a id="molecule_feature_utils.get_atom_is_in_aromatic_one_hot"></a>

#### get\_atom\_is\_in\_aromatic\_one\_hot

```python
def get_atom_is_in_aromatic_one_hot(atom: RDKitAtom) -> List[float]
```

Get ans one-hot feature about whether an atom is in aromatic system or not.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object

Returns
-------
List[float]
  A vector of whether an atom is in aromatic system or not.

<a id="molecule_feature_utils.get_atom_hybridization_one_hot"></a>

#### get\_atom\_hybridization\_one\_hot

```python
def get_atom_hybridization_one_hot(
        atom: RDKitAtom,
        allowable_set: List[str] = DEFAULT_HYBRIDIZATION_SET,
        include_unknown_set: bool = False) -> List[float]
```

Get an one-hot feature of hybridization type.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[str]
  The hybridization types to consider. The default set is `["SP", "SP2", "SP3"]`
include_unknown_set: bool, default False
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  An one-hot vector of the hybridization type.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_atom_total_num_Hs_one_hot"></a>

#### get\_atom\_total\_num\_Hs\_one\_hot

```python
def get_atom_total_num_Hs_one_hot(
        atom: RDKitAtom,
        allowable_set: List[int] = DEFAULT_TOTAL_NUM_Hs_SET,
        include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of the number of hydrogens which an atom has.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[int]
  The number of hydrogens to consider. The default set is `[0, 1, ..., 4]`
include_unknown_set: bool, default True
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of the number of hydrogens which an atom has.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_atom_chirality_one_hot"></a>

#### get\_atom\_chirality\_one\_hot

```python
def get_atom_chirality_one_hot(atom: RDKitAtom) -> List[float]
```

Get an one-hot feature about an atom chirality type.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object

Returns
-------
List[float]
  A one-hot vector of the chirality type. The first element
  indicates "R", and the second element indicates "S".

<a id="molecule_feature_utils.get_atom_formal_charge"></a>

#### get\_atom\_formal\_charge

```python
def get_atom_formal_charge(atom: RDKitAtom) -> List[float]
```

Get a formal charge of an atom.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object

Returns
-------
List[float]
  A vector of the formal charge.

<a id="molecule_feature_utils.get_atom_formal_charge_one_hot"></a>

#### get\_atom\_formal\_charge\_one\_hot

```python
def get_atom_formal_charge_one_hot(
        atom: RDKitAtom,
        allowable_set: List[int] = DEFAULT_FORMAL_CHARGE_SET,
        include_unknown_set: bool = True) -> List[float]
```

Get one hot encoding of formal charge of an atom.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[int]
  The degree to consider. The default set is `[-2, -1, ..., 2]`
include_unknown_set: bool, default True
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A vector of the formal charge.

<a id="molecule_feature_utils.get_atom_partial_charge"></a>

#### get\_atom\_partial\_charge

```python
def get_atom_partial_charge(atom: RDKitAtom) -> List[float]
```

Get a partial charge of an atom.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object

Returns
-------
List[float]
  A vector of the parital charge.

Notes
-----
Before using this function, you must calculate `GasteigerCharge`
like `AllChem.ComputeGasteigerCharges(mol)`.

<a id="molecule_feature_utils.get_atom_total_degree_one_hot"></a>

#### get\_atom\_total\_degree\_one\_hot

```python
def get_atom_total_degree_one_hot(
        atom: RDKitAtom,
        allowable_set: List[int] = DEFAULT_TOTAL_DEGREE_SET,
        include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of the degree which an atom has.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[int]
  The degree to consider. The default set is `[0, 1, ..., 5]`
include_unknown_set: bool, default True
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of the degree which an atom has.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_atom_degree_one_hot"></a>

#### get\_atom\_degree\_one\_hot

```python
def get_atom_degree_one_hot(
        atom: RDKitAtom,
        allowable_set: List[int] = DEFAULT_TOTAL_DEGREE_SET,
        include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of the degree which an atom has.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[int]
  The degree to consider. The default set is `[0, 1, ..., 5]`
include_unknown_set: bool, default True
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of the degree which an atom has.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_atom_implicit_valence_one_hot"></a>

#### get\_atom\_implicit\_valence\_one\_hot

```python
def get_atom_implicit_valence_one_hot(
        atom: RDKitAtom,
        allowable_set: List[int] = DEFAULT_ATOM_IMPLICIT_VALENCE_SET,
        include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of implicit valence of an atom.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[int]
  Atom implicit valence to consider. The default set is `[0, 1, ..., 6]`
include_unknown_set: bool, default True
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of implicit valence an atom has.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_atom_explicit_valence_one_hot"></a>

#### get\_atom\_explicit\_valence\_one\_hot

```python
def get_atom_explicit_valence_one_hot(
        atom: RDKitAtom,
        allowable_set: List[int] = DEFAULT_ATOM_EXPLICIT_VALENCE_SET,
        include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of explicit valence of an atom.

Parameters
----------
atom: rdkit.Chem.rdchem.Atom
  RDKit atom object
allowable_set: List[int]
  Atom explicit valence to consider. The default set is `[1, ..., 6]`
include_unknown_set: bool, default True
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of explicit valence an atom has.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_bond_type_one_hot"></a>

#### get\_bond\_type\_one\_hot

```python
def get_bond_type_one_hot(bond: RDKitBond,
                          allowable_set: List[str] = DEFAULT_BOND_TYPE_SET,
                          include_unknown_set: bool = False) -> List[float]
```

Get an one-hot feature of bond type.

Parameters
----------
bond: rdkit.Chem.rdchem.Bond
  RDKit bond object
allowable_set: List[str]
  The bond types to consider. The default set is `["SINGLE", "DOUBLE", "TRIPLE", "AROMATIC"]`.
include_unknown_set: bool, default False
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of the bond type.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_bond_is_in_same_ring_one_hot"></a>

#### get\_bond\_is\_in\_same\_ring\_one\_hot

```python
def get_bond_is_in_same_ring_one_hot(bond: RDKitBond) -> List[float]
```

Get an one-hot feature about whether atoms of a bond is in the same ring or not.

Parameters
----------
bond: rdkit.Chem.rdchem.Bond
  RDKit bond object

Returns
-------
List[float]
  A one-hot vector of whether a bond is in the same ring or not.

<a id="molecule_feature_utils.get_bond_is_conjugated_one_hot"></a>

#### get\_bond\_is\_conjugated\_one\_hot

```python
def get_bond_is_conjugated_one_hot(bond: RDKitBond) -> List[float]
```

Get an one-hot feature about whether a bond is conjugated or not.

Parameters
----------
bond: rdkit.Chem.rdchem.Bond
  RDKit bond object

Returns
-------
List[float]
  A one-hot vector of whether a bond is conjugated or not.

<a id="molecule_feature_utils.get_bond_stereo_one_hot"></a>

#### get\_bond\_stereo\_one\_hot

```python
def get_bond_stereo_one_hot(bond: RDKitBond,
                            allowable_set: List[str] = DEFAULT_BOND_STEREO_SET,
                            include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of the stereo configuration of a bond.

Parameters
----------
bond: rdkit.Chem.rdchem.Bond
  RDKit bond object
allowable_set: List[str]
  The stereo configuration types to consider.
  The default set is `["STEREONONE", "STEREOANY", "STEREOZ", "STEREOE"]`.
include_unknown_set: bool, default True
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of the stereo configuration of a bond.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="molecule_feature_utils.get_bond_graph_distance_one_hot"></a>

#### get\_bond\_graph\_distance\_one\_hot

```python
def get_bond_graph_distance_one_hot(
        bond: RDKitBond,
        graph_dist_matrix: np.ndarray,
        allowable_set: List[int] = DEFAULT_GRAPH_DISTANCE_SET,
        include_unknown_set: bool = True) -> List[float]
```

Get an one-hot feature of graph distance.

Parameters
----------
bond: rdkit.Chem.rdchem.Bond
  RDKit bond object
graph_dist_matrix: np.ndarray
  The return value of `Chem.GetDistanceMatrix(mol)`. The shape is `(num_atoms, num_atoms)`.
allowable_set: List[int]
  The graph distance types to consider. The default set is `[1, 2, ..., 7]`.
include_unknown_set: bool, default False
  If true, the index of all types not in `allowable_set` is `len(allowable_set)`.

Returns
-------
List[float]
  A one-hot vector of the graph distance.
  If `include_unknown_set` is False, the length is `len(allowable_set)`.
  If `include_unknown_set` is True, the length is `len(allowable_set) + 1`.

<a id="pdbqt_utils"></a>

# pdbqt\_utils

Utilities for handling PDBQT files.

<a id="pdbqt_utils.pdbqt_to_pdb"></a>

#### pdbqt\_to\_pdb

```python
def pdbqt_to_pdb(filename: Optional[str] = None,
                 pdbqt_data: Optional[List[str]] = None) -> str
```

Extracts the PDB part of a pdbqt file as a string.
Either `filename` or `pdbqt_data` must be provided. This function
strips PDBQT charge information from the provided input.

Parameters
----------
filename: str, optional  (default None)
  Filename of PDBQT file
pdbqt_data: List[str], optional (default None)
  Raw list of lines containing data from PDBQT file.

Returns
-------
pdb_block: str
  String containing the PDB portion of pdbqt file.

<a id="pdbqt_utils.convert_protein_to_pdbqt"></a>

#### convert\_protein\_to\_pdbqt

```python
def convert_protein_to_pdbqt(mol: RDKitMol, outfile: str) -> None
```

Convert a protein PDB file into a pdbqt file.
Writes the extra PDBQT terms directly to `outfile`.

Parameters
----------
mol: rdkit.Chem.rdchem.Mol
  Protein molecule
outfile: str
  filename which already has a valid pdb representation of mol

<a id="pdbqt_utils.convert_mol_to_pdbqt"></a>

#### convert\_mol\_to\_pdbqt

```python
def convert_mol_to_pdbqt(mol: RDKitMol, outfile: str) -> None
```

Writes the provided ligand molecule to specified file in pdbqt format.
Creates a torsion tree and write to pdbqt file. The torsion tree
represents rotatable bonds in the molecule.

Parameters
----------
mol: rdkit.Chem.rdchem.Mol
  The molecule whose value is stored in pdb format in outfile
outfile: str
  Filename for a valid pdb file with the extention .pdbqt

Notes
-----
This function requires NetworkX to be installed.

