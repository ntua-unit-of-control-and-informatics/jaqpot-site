# jaqpotpy.utils package

## Submodules

## jaqpotpy.utils.data_utils module

### jaqpotpy.utils.data_utils.download_url(url: str, dest_dir: str = '/var/folders/zm/zlhqbnd17qjfg31h8x42fqw00000gn/T', name: str | None = None)

Download a file to disk.
Parameters
———-
url: str

> The URL to download from

dest_dir: str
: The directory to save the file in

name: str
: The file name to save it as.  If omitted, it will try to extract a file name from the URL

### jaqpotpy.utils.data_utils.get_data_dir() → str

Get the DeepChem data directory.
Returns
——-
str

> The default path to store DeepChem data. If you want to
> change this path, please set your own path to DEEPCHEM_DATA_DIR
> as an environment variable.

### jaqpotpy.utils.data_utils.pad_array(x: ndarray, shape: Tuple | int, fill: float = 0.0, both: bool = False) → ndarray

Pad an array with a fill value.
Parameters
———-
x: np.ndarray

> A numpy array.

shape: Tuple or int
: Desired shape. If int, all dimensions are padded to that size.

fill: float, optional (default 0.0)
: The padded value.

both: bool, optional (default False)
: If True, split the padding on both sides of each axis. If False,
  padding is applied to the end of each axis.

### Returns

np.ndarray
: A padded numpy array

### jaqpotpy.utils.data_utils.untargz_file(file: str, dest_dir: str = '/var/folders/zm/zlhqbnd17qjfg31h8x42fqw00000gn/T', name: str | None = None)

Untar and unzip a .tar.gz file to disk.
Parameters
———-
file: str

> The filepath to decompress

dest_dir: str
: The directory to save the file in

name: str
: The file name to save it as.  If omitted, it will use the file name

### jaqpotpy.utils.data_utils.unzip_file(file: str, dest_dir: str = '/var/folders/zm/zlhqbnd17qjfg31h8x42fqw00000gn/T', name: str | None = None)

Unzip a .zip file to disk.
Parameters
———-
file: str

> The filepath to decompress

dest_dir: str
: The directory to save the file in

name: str
: The directory name to unzip it to.  If omitted, it will use the file name

## jaqpotpy.utils.fragment_utils module

A collection of utilities for dealing with Molecular Fragments

### *class* jaqpotpy.utils.fragment_utils.AtomShim(atomic_num: int, partial_charge: float, atom_coords: ndarray)

Bases: `object`

This is a shim object wrapping an atom.
We use this class instead of raw RDKit atoms since manipulating a
large number of rdkit Atoms seems to result in segfaults. Wrapping
the basic information in an AtomShim seems to avoid issues.

#### GetAtomicNum() → int

Returns atomic number for this atom.
Returns
——-
int

> Atomic number for this atom.

#### GetCoords() → ndarray

Returns 3D coordinates for this atom as numpy array.
Returns
——-
np.ndarray

> Numpy array of shape (3,) with coordinates for this atom.

#### GetPartialCharge() → float

Returns partial charge for this atom.
Returns
——-
float

> A partial Gasteiger charge for this atom.

### *class* jaqpotpy.utils.fragment_utils.MolecularFragment(atoms: Sequence[Any], coords: ndarray)

Bases: `object`

A class that represents a fragment of a molecule.
It’s often convenient to represent a fragment of a molecule. For
example, if two molecules form a molecular complex, it may be useful
to create two fragments which represent the subsets of each molecule
that’s close to the other molecule (in the contact region).
Ideally, we’d be able to do this in RDKit direct, but manipulating
molecular fragments doesn’t seem to be supported functionality.
Examples
——–
>>> import numpy as np
>>> from rdkit import Chem
>>> mol = Chem.MolFromSmiles(“C”)
>>> coords = np.array([[0.0, 0.0, 0.0]])
>>> atom = mol.GetAtoms()[0]
>>> fragment = MolecularFragment([atom], coords)

#### GetAtoms() → List[[AtomShim](#jaqpotpy.utils.fragment_utils.AtomShim)]

Returns the list of atoms
Returns
——-
List[AtomShim]

> list of atoms in this fragment.

#### GetCoords() → ndarray

Returns 3D coordinates for this fragment as numpy array.
Returns
——-
np.ndarray

> A numpy array of shape (N, 3) with coordinates for this fragment.
> Here, N is the number of atoms.

#### GetNumAtoms() → int

Returns the number of atoms
Returns
——-
int

> Number of atoms in this fragment.

### *exception* jaqpotpy.utils.fragment_utils.MoleculeLoadException(\*args, \*\*kwargs)

Bases: `Exception`

### jaqpotpy.utils.fragment_utils.compute_charges(mol)

Attempt to compute Gasteiger Charges on Mol
This also has the side effect of calculating charges on mol.  The
mol passed into this function has to already have been sanitized
Parameters
———-
mol: rdkit molecule
Returns
——-
No return since updates in place.
Note
—-
This function requires RDKit to be installed.

### jaqpotpy.utils.fragment_utils.get_contact_atom_indices(fragments: List[Tuple[ndarray, Any]], cutoff: float = 4.5) → List[List[int]]

Compute that atoms close to contact region.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren’t close to contact regions. This
function computes pairwise distances between all pairs of molecules
in the molecular complex. If an atom is within cutoff distance of
any atom on another molecule in the complex, it is regarded as a
contact atom. Otherwise it is trimmed.
Parameters
———-
fragments: List[Tuple[np.ndarray, rdkit.Chem.rdchem.Mol]]

> As returned by rdkit_utils.load_complex, a list of tuples of
> (coords, mol) where coords is a (N_atoms, 3) array and mol
> is the rdkit molecule object.

cutoff: float, optional (default 4.5)
: The cutoff distance in angstroms.

### Returns

List[List[int]]
: A list of length len(molecular_complex). Each entry in this list
  is a list of atom indices from that molecule which should be kept, in
  sorted order.

### jaqpotpy.utils.fragment_utils.get_mol_subset(coords: ndarray, mol: Any | [MolecularFragment](#jaqpotpy.utils.fragment_utils.MolecularFragment), atom_indices_to_keep: List[int]) → Tuple[ndarray, [MolecularFragment](#jaqpotpy.utils.fragment_utils.MolecularFragment)]

Strip a subset of the atoms in this molecule
Parameters
———-
coords: np.ndarray

> Must be of shape (N, 3) and correspond to coordinates of mol.

mol: rdkit.Chem.rdchem.Mol or MolecularFragment
: The molecule to strip

atom_indices_to_keep: list
: List of the indices of the atoms to keep. Each index is a unique
  number between [0, N).

### Returns

Tuple[np.ndarray, MolecularFragment]
: A tuple of (coords, mol_frag) where coords is a numpy array of
  coordinates with hydrogen coordinates. mol_frag is a MolecularFragment.

### Notes

This function requires RDKit to be installed.

### jaqpotpy.utils.fragment_utils.get_partial_charge(atom: Any | [AtomShim](#jaqpotpy.utils.fragment_utils.AtomShim)) → float

Get partial charge of a given atom (rdkit Atom object)
Parameters
———-
atom: rdkit.Chem.rdchem.Atom or AtomShim

> Either a rdkit.Atom object or AtomShim

### Returns

float
: A partial Gasteiger charge of a given atom.

### Notes

This function requires RDKit to be installed.
Examples
——–
>>> from rdkit import Chem
>>> mol = Chem.MolFromSmiles(“CC”)
>>> atom = mol.GetAtoms()[0]
>>> get_partial_charge(atom)
0.0

### jaqpotpy.utils.fragment_utils.merge_molecular_fragments(molecules: List[[MolecularFragment](#jaqpotpy.utils.fragment_utils.MolecularFragment)]) → [MolecularFragment](#jaqpotpy.utils.fragment_utils.MolecularFragment) | None

Helper method to merge two molecular fragments.
Parameters
———-
molecules: List[MolecularFragment]

> List of MolecularFragment objects.

### Returns

Optional[MolecularFragment]
: Returns a merged MolecularFragment

### jaqpotpy.utils.fragment_utils.reduce_molecular_complex_to_contacts(fragments: List[Tuple[ndarray, Any]], cutoff: float = 4.5) → List[Tuple[ndarray, [MolecularFragment](#jaqpotpy.utils.fragment_utils.MolecularFragment)]]

Reduce a molecular complex to only those atoms near a contact.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren’t close to contact regions. This
function takes in a molecular complex and returns a new molecular
complex representation that contains only contact atoms. The contact
atoms are computed by calling get_contact_atom_indices under the
hood.
Parameters
———-
fragments: List[Tuple[np.ndarray, rdkit.Chem.rdchem.Mol]]

> As returned by rdkit_utils.load_complex, a list of tuples of
> (coords, mol) where coords is a (N_atoms, 3) array and mol
> is the rdkit molecule object.

cutoff: float
: The cutoff distance in angstroms.

### Returns

List[Tuple[np.ndarray, MolecularFragment]]
: A list of length len(molecular_complex). Each entry in this list
  is a tuple of (coords, MolecularFragment). The coords is stripped
  down to (N_contact_atoms, 3) where N_contact_atoms is the number
  of contact atoms for this complex. MolecularFragment is used since
  it’s tricky to make a RDKit sub-molecule.

### jaqpotpy.utils.fragment_utils.strip_hydrogens(coords: ndarray, mol: Any | [MolecularFragment](#jaqpotpy.utils.fragment_utils.MolecularFragment)) → Tuple[ndarray, [MolecularFragment](#jaqpotpy.utils.fragment_utils.MolecularFragment)]

Strip the hydrogens from input molecule
Parameters
———-
coords: np.ndarray

> The coords must be of shape (N, 3) and correspond to coordinates of mol.

mol: rdkit.Chem.rdchem.Mol or MolecularFragment
: The molecule to strip

### Returns

Tuple[np.ndarray, MolecularFragment]
: A tuple of (coords, mol_frag) where coords is a numpy array of
  coordinates with hydrogen coordinates. mol_frag is a MolecularFragment.

### Notes

This function requires RDKit to be installed.

## jaqpotpy.utils.geometry_utils module

Geometric utility functions for 3D geometry.

### jaqpotpy.utils.geometry_utils.angle_between(vector_i: ndarray, vector_j: ndarray) → float

Returns the angle in radians between vectors “vector_i” and “vector_j”
Note that this function always returns the smaller of the two angles between
the vectors (value between 0 and pi).
Parameters
———-
vector_i: np.ndarray

> A numpy array of shape (3,), where 3 is (x,y,z).

vector_j: np.ndarray
: A numpy array of shape (3,), where 3 is (x,y,z).

### Returns

np.ndarray
: The angle in radians between the two vectors.

### Examples

```pycon
>>> print("%0.06f" % angle_between((1, 0, 0), (0, 1, 0)))
1.570796
>>> print("%0.06f" % angle_between((1, 0, 0), (1, 0, 0)))
0.000000
>>> print("%0.06f" % angle_between((1, 0, 0), (-1, 0, 0)))
3.141593
```

### jaqpotpy.utils.geometry_utils.compute_centroid(coordinates: ndarray) → ndarray

Compute the (x,y,z) centroid of provided coordinates
Parameters
———-
coordinates: np.ndarray

> A numpy array of shape (N, 3), where N is the number of atoms.

### Returns

centroid: np.ndarray
: A numpy array of shape (3,), where 3 is (x,y,z).

### jaqpotpy.utils.geometry_utils.compute_pairwise_distances(first_coordinate: ndarray, second_coordinate: ndarray) → ndarray

Computes pairwise distances between two molecules.
Takes an input (m, 3) and (n, 3) numpy arrays of 3D coords of
two molecules respectively, and outputs an m x n numpy
array of pairwise distances in Angstroms between the first and
second molecule. entry (i,j) is dist between the i”th
atom of first molecule and the j”th atom of second molecule.
Parameters
———-
first_coordinate: np.ndarray

> A numpy array of shape (m, 3), where m is the number of atoms.

second_coordinate: np.ndarray
: A numpy array of shape (n, 3), where n is the number of atoms.

### Returns

pairwise_distances: np.ndarray
: A numpy array of shape (m, n)

### jaqpotpy.utils.geometry_utils.compute_protein_range(coordinates: ndarray) → ndarray

Compute the protein range of provided coordinates
Parameters
———-
coordinates: np.ndarray

> A numpy array of shape (N, 3), where N is the number of atoms.

### Returns

protein_range: np.ndarray
: A numpy array of shape (3,), where 3 is (x,y,z).

### jaqpotpy.utils.geometry_utils.generate_random_rotation_matrix() → ndarray

Generates a random rotation matrix.
1. Generate a random unit vector u, randomly sampled from the

> unit sphere (see function generate_random_unit_vector()
> for details)
1. Generate a second random unit vector v

> 1. If absolute value of u dot v > 0.99, repeat.
>    (This is important for numerical stability. Intuition: we
>    want them to be as linearly independent as possible or
>    else the orthogonalized version of v will be much shorter
>    in magnitude compared to u. I assume in Stack they took
>    this from Gram-Schmidt orthogonalization?)
> 2. v” = v - (u dot v)\*u, i.e. subtract out the component of
>    v that’s in u’s direction
> 3. normalize v” (this isn”t in Stack but I assume it must be
>    done)
1. find w = u cross v”
2. u, v”, and w will form the columns of a rotation matrix, R.
   The intuition is that u, v” and w are, respectively, what
   the standard basis vectors e1, e2, and e3 will be mapped
   to under the transformation.

### Returns

R: np.ndarray
: A numpy array of shape (3, 3). R is a rotation matrix.

### jaqpotpy.utils.geometry_utils.generate_random_unit_vector() → ndarray

Generate a random unit vector on the sphere S^2.
Citation: [http://mathworld.wolfram.com/SpherePointPicking.html](http://mathworld.wolfram.com/SpherePointPicking.html)
Pseudocode:

> 1. Choose random theta element [0, 2\*pi]
> 2. Choose random z element [-1, 1]
> 3. Compute output vector u: (x,y,z) = (sqrt(1-z^2)\*cos(theta), sqrt(1-z^2)\*sin(theta),z)

### Returns

u: np.ndarray
: A numpy array of shape (3,). u is an unit vector

### jaqpotpy.utils.geometry_utils.is_angle_within_cutoff(vector_i: ndarray, vector_j: ndarray, angle_cutoff: float) → bool

A utility function to compute whether two vectors are within a cutoff from 180 degrees apart.
Parameters
———-
vector_i: np.ndarray

> A numpy array of shape (3,)\`, where 3 is (x,y,z).

vector_j: np.ndarray
: A numpy array of shape (3,), where 3 is (x,y,z).

cutoff: float
: The deviation from 180 (in degrees)

### Returns

bool
: Whether two vectors are within a cutoff from 180 degrees apart

### jaqpotpy.utils.geometry_utils.rotate_molecules(mol_coordinates_list)

Rotates provided molecular coordinates.
Pseudocode:
1. Generate random rotation matrix. This matrix applies a random

> transformation to any 3-vector such that, were the random transformation
> repeatedly applied, it would randomly sample along the surface of a sphere
> with radius equal to the norm of the given 3-vector cf.
> \_generate_random_rotation_matrix() for details
1. Apply R to all atomic coordinatse.
2. Return rotated molecule

### jaqpotpy.utils.geometry_utils.subtract_centroid(coordinates: ndarray, centroid: ndarray) → ndarray

Subtracts centroid from each coordinate.
Subtracts the centroid, a numpy array of dim 3, from all coordinates
of all atoms in the molecule
Note that this update is made in place to the array it’s applied to.
Parameters
———-
coordinates: np.ndarray

> A numpy array of shape (N, 3), where N is the number of atoms.

centroid: np.ndarray
: A numpy array of shape (3,)

### Returns

coordinates: np.ndarray
: A numpy array of shape (3,), where 3 is (x,y,z).

### jaqpotpy.utils.geometry_utils.unit_vector(vector: ndarray) → ndarray

Returns the unit vector of the vector.
Parameters
———-
vector: np.ndarray

> A numpy array of shape (3,), where 3 is (x,y,z).

### Returns

np.ndarray
: A numpy array of shape (3,). The unit vector of the input vector.

## jaqpotpy.utils.installed_packages module

## jaqpotpy.utils.molecule_feature_utils module

Utilities for constructing node features or bond features.
Some functions are based on chainer-chemistry or dgl-lifesci.
Repositories:
- [https://github.com/chainer/chainer-chemistry](https://github.com/chainer/chainer-chemistry)
- [https://github.com/awslabs/dgl-lifesci](https://github.com/awslabs/dgl-lifesci)

### jaqpotpy.utils.molecule_feature_utils.construct_hydrogen_bonding_info(mol: Any) → List[Tuple[int, str]]

Construct hydrogen bonding infos about a molecule.
Parameters
———
mol: rdkit.Chem.rdchem.Mol

> RDKit mol object

### Returns

List[Tuple[int, str]]
: A list of tuple (atom_index, hydrogen_bonding_type).
  The hydrogen_bonding_type value is “Acceptor” or “Donor”.

### jaqpotpy.utils.molecule_feature_utils.get_atom_chirality_one_hot(atom: Any) → List[float]

Get an one-hot feature about an atom chirality type.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

### Returns

List[float]
: A one-hot vector of the chirality type. The first element
  indicates “R”, and the second element indicates “S”.

### jaqpotpy.utils.molecule_feature_utils.get_atom_degree_one_hot(atom: Any, allowable_set: List[int] = [0, 1, 2, 3, 4, 5], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of the degree which an atom has.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[int]
: The degree to consider. The default set is [0, 1, …, 5]

include_unknown_set: bool, default True
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of the degree which an atom has.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_atom_explicit_valence_one_hot(atom: Any, allowable_set: List[int] = [1, 2, 3, 4, 5, 6], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of explicit valence of an atom.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[int]
: Atom explicit valence to consider. The default set is [1, …, 6]

include_unknown_set: bool, default True
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of explicit valence an atom has.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_atom_formal_charge(atom: Any) → List[float]

Get a formal charge of an atom.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

### Returns

List[float]
: A vector of the formal charge.

### jaqpotpy.utils.molecule_feature_utils.get_atom_formal_charge_one_hot(atom: Any, allowable_set: List[int] = [-2, -1, 0, 1, 2], include_unknown_set: bool = True) → List[float]

Get one hot encoding of formal charge of an atom.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[int]
: The degree to consider. The default set is [-2, -1, …, 2]

include_unknown_set: bool, default True
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A vector of the formal charge.

### jaqpotpy.utils.molecule_feature_utils.get_atom_hybridization_one_hot(atom: Any, allowable_set: List[str] = ['SP', 'SP2', 'SP3'], include_unknown_set: bool = False) → List[float]

Get an one-hot feature of hybridization type.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[str]
: The hybridization types to consider. The default set is [“SP”, “SP2”, “SP3”]

include_unknown_set: bool, default False
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: An one-hot vector of the hybridization type.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_atom_hydrogen_bonding_one_hot(atom: Any, hydrogen_bonding: List[Tuple[int, str]]) → List[float]

Get an one-hot feat about whether an atom accepts electrons or donates electrons.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

hydrogen_bonding: List[Tuple[int, str]]
: The return value of construct_hydrogen_bonding_info.
  The value is a list of tuple (atom_index, hydrogen_bonding) like (1, “Acceptor”).

### Returns

List[float]
: A one-hot vector of the ring size type. The first element
  indicates “Donor”, and the second element indicates “Acceptor”.

### jaqpotpy.utils.molecule_feature_utils.get_atom_implicit_valence_one_hot(atom: Any, allowable_set: List[int] = [0, 1, 2, 3, 4, 5, 6], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of implicit valence of an atom.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[int]
: Atom implicit valence to consider. The default set is [0, 1, …, 6]

include_unknown_set: bool, default True
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of implicit valence an atom has.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_atom_is_aromatic(atom: Any)

Get whether the atom is aromatic.
Parameters
———-
atom : rdkit.Chem.rdchem.Atom

> RDKit atom instance.

### Returns

list
: List containing one bool only.

### See Also

atom_is_aromatic_one_hot

### jaqpotpy.utils.molecule_feature_utils.get_atom_is_chiral_center(atom: Any)

Get whether the atom is chiral center
Parameters
———-
atom : rdkit.Chem.rdchem.Atom

> RDKit atom instance.

### Returns

list
: List containing one bool only.

### jaqpotpy.utils.molecule_feature_utils.get_atom_is_in_aromatic_one_hot(atom: Any) → List[float]

Get ans one-hot feature about whether an atom is in aromatic system or not.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

### Returns

List[float]
: A vector of whether an atom is in aromatic system or not.

### jaqpotpy.utils.molecule_feature_utils.get_atom_num_radical_electrons(atom: Any)

Get the number of radical electrons for an atom.
Parameters
———-
atom : rdkit.Chem.rdchem.Atom

> RDKit atom instance.

### Returns

list
: List containing one int only.

### See Also

atom_num_radical_electrons_one_hot

### jaqpotpy.utils.molecule_feature_utils.get_atom_partial_charge(atom: Any) → List[float]

Get a partial charge of an atom.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

### Returns

List[float]
: A vector of the parital charge.

### Notes

Before using this function, you must calculate GasteigerCharge
like AllChem.ComputeGasteigerCharges(mol).

### jaqpotpy.utils.molecule_feature_utils.get_atom_total_degree_one_hot(atom: Any, allowable_set: List[int] = [0, 1, 2, 3, 4, 5], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of the degree which an atom has.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[int]
: The degree to consider. The default set is [0, 1, …, 5]

include_unknown_set: bool, default True
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of the degree which an atom has.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_atom_total_num_Hs_one_hot(atom: Any, allowable_set: List[int] = [0, 1, 2, 3, 4], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of the number of hydrogens which an atom has.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[int]
: The number of hydrogens to consider. The default set is [0, 1, …, 4]

include_unknown_set: bool, default True
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of the number of hydrogens which an atom has.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_atom_type_one_hot(atom: Any, allowable_set: List[str] = ['C', 'N', 'O', 'F', 'P', 'S', 'Cl', 'Br', 'I'], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of an atom type.
Parameters
———
atom: rdkit.Chem.rdchem.Atom

> RDKit atom object

allowable_set: List[str]
: The atom types to consider. The default set is
  [“C”, “N”, “O”, “F”, “P”, “S”, “Cl”, “Br”, “I”].

include_unknown_set: bool, default True
: If true, the index of all atom not in allowable_set is len(allowable_set).

### Returns

List[float]
: An one-hot vector of atom types.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_bond_graph_distance_one_hot(bond: Any, graph_dist_matrix: ndarray, allowable_set: List[int] = [1, 2, 3, 4, 5, 6, 7], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of graph distance.
Parameters
———
bond: rdkit.Chem.rdchem.Bond

> RDKit bond object

graph_dist_matrix: np.ndarray
: The return value of Chem.GetDistanceMatrix(mol). The shape is (num_atoms, num_atoms).

allowable_set: List[int]
: The graph distance types to consider. The default set is [1, 2, …, 7].

include_unknown_set: bool, default False
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of the graph distance.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_bond_is_conjugated_one_hot(bond: Any) → List[float]

Get an one-hot feature about whether a bond is conjugated or not.
Parameters
———
bond: rdkit.Chem.rdchem.Bond

> RDKit bond object

### Returns

List[float]
: A one-hot vector of whether a bond is conjugated or not.

### jaqpotpy.utils.molecule_feature_utils.get_bond_is_in_same_ring_one_hot(bond: Any) → List[float]

Get an one-hot feature about whether atoms of a bond is in the same ring or not.
Parameters
———
bond: rdkit.Chem.rdchem.Bond

> RDKit bond object

### Returns

List[float]
: A one-hot vector of whether a bond is in the same ring or not.

### jaqpotpy.utils.molecule_feature_utils.get_bond_stereo_one_hot(bond: Any, allowable_set: List[str] = ['STEREONONE', 'STEREOANY', 'STEREOZ', 'STEREOE'], include_unknown_set: bool = True) → List[float]

Get an one-hot feature of the stereo configuration of a bond.
Parameters
———
bond: rdkit.Chem.rdchem.Bond

> RDKit bond object

allowable_set: List[str]
: The stereo configuration types to consider.
  The default set is [“STEREONONE”, “STEREOANY”, “STEREOZ”, “STEREOE”].

include_unknown_set: bool, default True
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of the stereo configuration of a bond.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.get_bond_type_one_hot(bond: Any, allowable_set: List[str] = ['SINGLE', 'DOUBLE', 'TRIPLE', 'AROMATIC'], include_unknown_set: bool = False) → List[float]

Get an one-hot feature of bond type.
Parameters
———
bond: rdkit.Chem.rdchem.Bond

> RDKit bond object

allowable_set: List[str]
: The bond types to consider. The default set is [“SINGLE”, “DOUBLE”, “TRIPLE”, “AROMATIC”].

include_unknown_set: bool, default False
: If true, the index of all types not in allowable_set is len(allowable_set).

### Returns

List[float]
: A one-hot vector of the bond type.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### jaqpotpy.utils.molecule_feature_utils.one_hot_encode(val: int | str, allowable_set: List[str] | List[int], include_unknown_set: bool = False) → List[float]

One hot encoder for elements of a provided set.
Examples
——–
>>> one_hot_encode(“a”, [“a”, “b”, “c”])
[1.0, 0.0, 0.0]
>>> one_hot_encode(2, [0, 1, 2])
[0.0, 0.0, 1.0]
>>> one_hot_encode(3, [0, 1, 2])
[0.0, 0.0, 0.0]
>>> one_hot_encode(3, [0, 1, 2], True)
[0.0, 0.0, 0.0, 1.0]
Parameters
———-
val: int or str

> The value must be present in allowable_set.

allowable_set: List[int] or List[str]
: List of allowable quantities.

include_unknown_set: bool, default False
: If true, the index of all values not in allowable_set is len(allowable_set).

### Returns

List[float]
: An one-hot vector of val.
  If include_unknown_set is False, the length is len(allowable_set).
  If include_unknown_set is True, the length is len(allowable_set) + 1.

### Raises

ValueError
: If include_unknown_set is False and val is not in allowable_set.

## jaqpotpy.utils.pdbqt_utils module

Utilities for handling PDBQT files.

### jaqpotpy.utils.pdbqt_utils.convert_mol_to_pdbqt(mol: Any, outfile: str) → None

Writes the provided ligand molecule to specified file in pdbqt format.
Creates a torsion tree and write to pdbqt file. The torsion tree
represents rotatable bonds in the molecule.
Parameters
———-
mol: rdkit.Chem.rdchem.Mol

> The molecule whose value is stored in pdb format in outfile

outfile: str
: Filename for a valid pdb file with the extention .pdbqt

### Notes

This function requires NetworkX to be installed.

### jaqpotpy.utils.pdbqt_utils.convert_protein_to_pdbqt(mol: Any, outfile: str) → None

Convert a protein PDB file into a pdbqt file.
Writes the extra PDBQT terms directly to outfile.
Parameters
———-
mol: rdkit.Chem.rdchem.Mol

> Protein molecule

outfile: str
: filename which already has a valid pdb representation of mol

### jaqpotpy.utils.pdbqt_utils.pdbqt_to_pdb(filename: str | None = None, pdbqt_data: List[str] | None = None) → str

Extracts the PDB part of a pdbqt file as a string.
Either filename or pdbqt_data must be provided. This function
strips PDBQT charge information from the provided input.
Parameters
———-
filename: str, optional  (default None)

> Filename of PDBQT file

pdbqt_data: List[str], optional (default None)
: Raw list of lines containing data from PDBQT file.

### Returns

pdb_block: str
: String containing the PDB portion of pdbqt file.

## jaqpotpy.utils.pytorch_utils module

Pytorch Utilities.
This file contains utilities that compute Datastractures adn other for Pytorch.

### jaqpotpy.utils.pytorch_utils.to_torch_graph_data(g)

Returns torch graph data from jaqpot graph_data without endpoint

### jaqpotpy.utils.pytorch_utils.to_torch_graph_data_and_y(g, y)

Returns torch graph data from jaqpot graph_data and adds y

### jaqpotpy.utils.pytorch_utils.to_torch_graph_data_array(mol_g)

Returns torch graph data from array of jaqpot graph_data

### jaqpotpy.utils.pytorch_utils.to_torch_graph_data_array_and_class_y(mol_g, y)

Returns torch graph data from array of jaqpot graph_data and y

### jaqpotpy.utils.pytorch_utils.to_torch_graph_data_array_and_regr_y(mol_g, y)

Returns torch graph data from array of jaqpot graph_data and y

## jaqpotpy.utils.rdkit_utils module

RDKit Utilities.
This file contains utilities that compute useful properties of
molecules. Some of these are simple cleanup utilities, and
others are more sophisticated functions that detect chemical
properties of molecules.

### jaqpotpy.utils.rdkit_utils.add_hydrogens_to_mol(mol, is_protein=False)

Add hydrogens to a molecule object
Parameters
———-
mol: Rdkit Mol

> Molecule to hydrogenate

is_protein: bool, optional (default False)
: Whether this molecule is a protein.

### Returns

Rdkit Mol
Note
—-
This function requires RDKit and PDBFixer to be installed.

### jaqpotpy.utils.rdkit_utils.apply_pdbfixer(mol, add_missing=True, hydrogenate=True, pH=7.4, remove_heterogens=True, is_protein=True)

Apply PDBFixer to a molecule to try to clean it up.
Parameters
———-
mol: Rdkit Mol

> Molecule to clean up.

add_missing: bool, optional
: If true, add in missing residues and atoms

hydrogenate: bool, optional
: If true, add hydrogens at specified pH

pH: float, optional
: The pH at which hydrogens will be added if hydrogenate==True. Set to 7.4 by default.

remove_heterogens: bool, optional
: Often times, PDB files come with extra waters and salts attached.
  If this field is set, remove these heterogens.

is_protein: bool, optional
: If false, then don’t remove heterogens (since this molecule is
  itself a heterogen).

### Returns

Rdkit Mol
Note
—-
This function requires RDKit and PDBFixer to be installed.

### jaqpotpy.utils.rdkit_utils.compute_all_ecfp(mol: Any, indices: Set[int] | None = None, degree: int = 2) → Dict[int, str]

Obtain molecular fragment for all atoms emanating outward to given degree.
For each fragment, compute SMILES string (for now) and hash to
an int. Return a dictionary mapping atom index to hashed
SMILES.
Parameters
———-
mol: rdkit Molecule

> Molecule to compute ecfp fragments on

indices: Optional[Set[int]]
: List of atom indices for molecule. Default is all indices. If
  specified will only compute fragments for specified atoms.

degree: int
: Graph degree to use when computing ECFP fingerprints

### Returns

dict
: Dictionary mapping atom index to hashed smiles.

### jaqpotpy.utils.rdkit_utils.compute_all_pairs_shortest_path(mol) → Dict[Tuple[int, int], Tuple[int, int]]

Computes the All pair shortest between every pair of nodes
in terms of Rdkit Atom indexes.
Parameters:
———–
mol: rdkit.rdchem.Mol

> Molecule containing a ring

### Returns:

paths_dict: Dict representing every atom-atom pair as key in Rdkit index
and value as the shortest path between each atom pair in terms of Atom index.

### jaqpotpy.utils.rdkit_utils.compute_charges(mol)

Attempt to compute Gasteiger Charges on Mol
This also has the side effect of calculating charges on mol.  The
mol passed into this function has to already have been sanitized
Parameters
———-
mol: rdkit molecule
Returns
——-
No return since updates in place.
Note
—-
This function requires RDKit to be installed.

### jaqpotpy.utils.rdkit_utils.compute_contact_centroid(molecular_complex: Any, cutoff: float = 4.5) → ndarray

Computes the (x,y,z) centroid of the contact regions of this molecular complex.
For a molecular complex, it’s necessary for various featurizations
that compute voxel grids to find a reasonable center for the
voxelization. This function computes the centroid of all the contact
atoms, defined as an atom that’s within cutoff Angstroms of an
atom from a different molecule.
Parameters
———-
molecular_complex: Object

> A representation of a molecular complex, produced by
> rdkit_util.load_complex.

cutoff: float, optional
: The distance in Angstroms considered for computing contacts.

### jaqpotpy.utils.rdkit_utils.compute_ecfp_features(mol, ecfp_degree=2, ecfp_power=11)

Computes ECFP features for provided rdkit molecule.
Parameters
———-
mol: rdkit molecule

> Molecule to featurize.

ecfp_degree: int
: ECFP radius

ecfp_power: int
: Number of bits to store ECFP features (2^ecfp_power will be length of
  ECFP array)

### Returns

ecfp_array: np.ndarray
: Returns an array of size 2^ecfp_power where array at index i has a 1 if
  that ECFP fragment is found in the molecule and array at index j has a 0
  if ECFP fragment not in molecule.

### jaqpotpy.utils.rdkit_utils.compute_pairwise_ring_info(mol)

Computes all atom-atom pair belong to same ring with
its ring size and its aromaticity.
Parameters:
———–
mol: rdkit.rdchem.Mol

> Molecule containing a ring

### Returns:

rings_dict: Key consisting of all node-node pair sharing the same ring
and value as a tuple of size of ring and its aromaticity.

### jaqpotpy.utils.rdkit_utils.compute_ring_center(mol, ring_indices)

Computes 3D coordinates of a center of a given ring.
Parameters:
———–
mol: rdkit.rdchem.Mol

> Molecule containing a ring

ring_indices: array-like
: Indices of atoms forming a ring

### Returns:

ring_centroid: np.ndarray
: Position of a ring center

### jaqpotpy.utils.rdkit_utils.compute_ring_normal(mol, ring_indices)

Computes normal to a plane determined by a given ring.
Parameters:
———–
mol: rdkit.rdchem.Mol

> Molecule containing a ring

ring_indices: array-like
: Indices of atoms forming a ring

### Returns:

normal: np.ndarray
: Normal vector

### jaqpotpy.utils.rdkit_utils.get_contact_atom_indices(fragments: List, cutoff: float = 4.5) → List

Compute the atoms close to contact region.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren’t close to contact regions. This
function computes pairwise distances between all pairs of molecules
in the molecular complex. If an atom is within cutoff distance of
any atom on another molecule in the complex, it is regarded as a
contact atom. Otherwise it is trimmed.
Parameters
———-
fragments: List

> As returned by rdkit_util.load_complex, a list of tuples of
> (coords, mol) where coords is a (N_atoms, 3) array and mol
> is the rdkit molecule object.

cutoff: float
: The cutoff distance in angstroms.

### Returns

A list of length len(molecular_complex). Each entry in this list
is a list of atom indices from that molecule which should be kept, in
sorted order.

### jaqpotpy.utils.rdkit_utils.get_mol_subset(coords, mol, atom_indices_to_keep)

Strip a subset of the atoms in this molecule
Parameters
———-
coords: Numpy ndarray

> Must be of shape (N, 3) and correspond to coordinates of mol.

mol: Rdkit mol or MolecularFragment
: The molecule to strip

atom_indices_to_keep: list
: List of the indices of the atoms to keep. Each index is a unique
  number between [0, N).

### Returns

A tuple of (coords, mol_frag) where coords is a Numpy array of
coordinates with hydrogen coordinates. mol_frag is a
MolecularFragment.

### jaqpotpy.utils.rdkit_utils.get_xyz_from_mol(mol)

Extracts a numpy array of coordinates from a molecules.
Returns a (N, 3) numpy array of 3d coords of given rdkit molecule
Parameters
———-
mol: rdkit Molecule

> Molecule to extract coordinates for

### Returns

Numpy ndarray of shape (N, 3) where N = mol.GetNumAtoms().

### jaqpotpy.utils.rdkit_utils.load_complex(molecular_complex: str | Sequence[str], add_hydrogens: bool = True, calc_charges: bool = True, sanitize: bool = True) → List[Tuple[ndarray, Any]]

Loads a molecular complex.
Given some representation of a molecular complex, returns a list of
tuples, where each tuple contains (xyz coords, rdkit object) for
that constituent molecule in the complex.
For now, assumes that molecular_complex is a tuple of filenames.
Parameters
———-
molecular_complex: list or str

> If list, each entry should be a filename for a constituent
> molecule in complex. If str, should be the filename of a file that
> holds the full complex.

add_hydrogens: bool, optional
: If true, add hydrogens via pdbfixer

calc_charges: bool, optional
: If true, add charges via rdkit

sanitize: bool, optional
: If true, sanitize molecules via rdkit

### Returns

List of tuples (xyz, mol)
Note
—-
This function requires RDKit to be installed.

### jaqpotpy.utils.rdkit_utils.load_molecule(molecule_file, add_hydrogens=False, calc_charges=False, sanitize=True, is_protein=False)

Converts molecule file to (xyz-coords, obmol object)
Given molecule_file, returns a tuple of xyz coords of molecule
and an rdkit object representing that molecule in that order (xyz,
rdkit_mol). This ordering convention is used in the code in a few
places.
Parameters
———-
molecule_file: str

> filename for molecule

add_hydrogens: bool, optional (default True)
: If True, add hydrogens via pdbfixer

calc_charges: bool, optional (default True)
: If True, add charges via rdkit

sanitize: bool, optional (default False)
: If True, sanitize molecules via rdkit

is_protein: bool, optional (default False)
: If True\`, this molecule is loaded as a protein. This flag will
  affect some of the cleanup procedures applied.

### Returns

Tuple (xyz, mol) if file contains single molecule. Else returns a
list of the tuples for the separate molecules in this list.
Note
—-
This function requires RDKit to be installed.

### jaqpotpy.utils.rdkit_utils.merge_molecules(molecules)

Helper method to merge two molecules.
Parameters
———-
molecules: list

> List of rdkit molecules

### Returns

merged: rdkit molecule

### jaqpotpy.utils.rdkit_utils.merge_molecules_xyz(xyzs)

Merges coordinates of multiple molecules.
Parameters
———-
xyzs: List

> List of numpy arrays each of shape (N_i, 3) where N_i is the number of atoms in the i-th atom.

### jaqpotpy.utils.rdkit_utils.reduce_molecular_complex_to_contacts(fragments: List, cutoff: float = 4.5) → List

Reduce a molecular complex to only those atoms near a contact.
Molecular complexes can get very large. This can make it unwieldy to
compute functions on them. To improve memory usage, it can be very
useful to trim out atoms that aren’t close to contact regions. This
function takes in a molecular complex and returns a new molecular
complex representation that contains only contact atoms. The contact
atoms are computed by calling get_contact_atom_indices under the
hood.
Parameters
———-
fragments: List

> As returned by rdkit_util.load_complex, a list of tuples of
> (coords, mol) where coords is a (N_atoms, 3) array and mol
> is the rdkit molecule object.

cutoff: float
: The cutoff distance in angstroms.

### Returns

A list of length len(molecular_complex). Each entry in this list
is a tuple of (coords, MolecularShim). The coords is stripped down
to (N_contact_atoms, 3) where N_contact_atoms is the number of
contact atoms for this complex. MolecularShim is used since it’s
tricky to make a RDKit sub-molecule.

### jaqpotpy.utils.rdkit_utils.write_molecule(mol, outfile, is_protein=False)

Write molecule to a file
This function writes a representation of the provided molecule to
the specified outfile. Doesn’t return anything.
Parameters
———-
mol: rdkit Mol

> Molecule to write

outfile: str
: Filename to write mol to

is_protein: bool, optional
: Is this molecule a protein?

### Note

This function requires RDKit to be installed.
Raises
——
ValueError: if outfile isn’t of a supported format.

## jaqpotpy.utils.seeding module

### jaqpotpy.utils.seeding.RNG

alias of [`RandomNumberGenerator`](#jaqpotpy.utils.seeding.RandomNumberGenerator)

### *class* jaqpotpy.utils.seeding.RandomNumberGenerator

Bases: `Generator`

#### get_state(legacy=True)

Return a tuple representing the internal state of the generator.

For more details, see set_state.

### Parameters

legacy
: Flag indicating to return a legacy tuple state when the BitGenerator
  is MT19937, instead of a dict. Raises ValueError if the underlying
  bit generator is not an instance of MT19937.

### Returns

out
: If legacy is True, the returned tuple has the following items:
  <br/>
  1. the string ‘MT19937’.
  2. a 1-D array of 624 unsigned integer keys.
  3. an integer `pos`.
  4. an integer `has_gauss`.
  5. a float `cached_gaussian`.
  <br/>
  If legacy is False, or the BitGenerator is not MT19937, then
  state is returned as a dictionary.

### See Also

set_state

### Notes

set_state and get_state are not needed to work with any of the
random distributions in NumPy. If the internal state is manually altered,
the user should know exactly what he/she is doing.

#### rand(d0, d1, ..., dn)

Random values in a given shape.

#### NOTE
This is a convenience function for users porting code from Matlab,
and wraps random_sample. That function takes a
tuple to specify the size of the output, which is consistent with
other NumPy functions like numpy.zeros and numpy.ones.

Create an array of the given shape and populate it with
random samples from a uniform distribution
over `[0, 1)`.

### Parameters

d0, d1, …, dn
: The dimensions of the returned array, must be non-negative.
  If no argument is given a single Python float is returned.

### Returns

out
: Random values.

### See Also

random

### Examples

```pycon
>>> np.random.rand(3,2)
array([[ 0.14022471,  0.96360618],  #random
       [ 0.37601032,  0.25528411],  #random
       [ 0.49313049,  0.94909878]]) #random
```

#### randint(low, high=None, size=None, dtype=int)

Return random integers from low (inclusive) to high (exclusive).

Return random integers from the “discrete uniform” distribution of
the specified dtype in the “half-open” interval [low, high). If
high is None (the default), then results are from [0, low).

#### NOTE
New code should use the ~numpy.random.Generator.integers
method of a ~numpy.random.Generator instance instead;
please see the random-quick-start.

### Parameters

low
: Lowest (signed) integers to be drawn from the distribution (unless
  `high=None`, in which case this parameter is one above the
  *highest* such integer).

high
: If provided, one above the largest (signed) integer to be drawn
  from the distribution (see above for behavior if `high=None`).
  If array-like, must contain integer values

size
: Output shape.  If the given shape is, e.g., `(m, n, k)`, then
  `m * n * k` samples are drawn.  Default is None, in which case a
  single value is returned.

dtype
: Desired dtype of the result. Byteorder must be native.
  The default value is int.
  <br/>
  #### Versionadded
  Added in version 1.11.0.

### Returns

out
: size-shaped array of random integers from the appropriate
  distribution, or a single such random int if size not provided.

### See Also

random_integers
: interval [low, high], and 1 is the lowest value if high is
  omitted.

random.Generator.integers: which should be used for new code.

### Examples

```pycon
>>> np.random.randint(2, size=10)
array([1, 0, 0, 0, 1, 1, 0, 0, 1, 0]) # random
>>> np.random.randint(1, size=10)
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
```

Generate a 2 x 4 array of ints between 0 and 4, inclusive:

```pycon
>>> np.random.randint(5, size=(2, 4))
array([[4, 0, 2, 1], # random
       [3, 2, 2, 0]])
```

Generate a 1 x 3 array with 3 different upper bounds

```pycon
>>> np.random.randint(1, [3, 5, 10])
array([2, 2, 9]) # random
```

Generate a 1 by 3 array with 3 different lower bounds

```pycon
>>> np.random.randint([1, 5, 7], 10)
array([9, 8, 7]) # random
```

Generate a 2 by 4 array using broadcasting with dtype of uint8

```pycon
>>> np.random.randint([1, 3, 5, 7], [[10], [20]], dtype=np.uint8)
array([[ 8,  6,  9,  7], # random
       [ 1, 16,  9, 12]], dtype=uint8)
```

#### randn(d0, d1, ..., dn)

Return a sample (or samples) from the “standard normal” distribution.

#### NOTE
This is a convenience function for users porting code from Matlab,
and wraps standard_normal. That function takes a
tuple to specify the size of the output, which is consistent with
other NumPy functions like numpy.zeros and numpy.ones.

#### NOTE
New code should use the
~numpy.random.Generator.standard_normal
method of a ~numpy.random.Generator instance instead;
please see the random-quick-start.

If positive int_like arguments are provided, randn generates an array
of shape `(d0, d1, ..., dn)`, filled
with random floats sampled from a univariate “normal” (Gaussian)
distribution of mean 0 and variance 1. A single float randomly sampled
from the distribution is returned if no argument is provided.

### Parameters

d0, d1, …, dn
: The dimensions of the returned array, must be non-negative.
  If no argument is given a single Python float is returned.

### Returns

Z
: A `(d0, d1, ..., dn)`-shaped array of floating-point samples from
  the standard normal distribution, or a single such float if
  no parameters were supplied.

### See Also

standard_normal : Similar, but takes a tuple as its argument.
normal : Also accepts mu and sigma arguments.
random.Generator.standard_normal: which should be used for new code.

### Notes

For random samples from the normal distribution with mean `mu` and
standard deviation `sigma`, use:

```default
sigma * np.random.randn(...) + mu
```

### Examples

```pycon
>>> np.random.randn()
2.1923875335537315  # random
```

Two-by-four array of samples from the normal distribution with
mean 3 and standard deviation 2.5:

```pycon
>>> 3 + 2.5 * np.random.randn(2, 4)
array([[-4.49401501,  4.00950034, -1.81814867,  7.29718677],   # random
       [ 0.39924804,  4.68456316,  4.99394529,  4.84057254]])  # random
```


randint(low, high=None, size=None, dtype=int)

Return random integers from low (inclusive) to high (exclusive).

Return random integers from the “discrete uniform” distribution of
the specified dtype in the “half-open” interval [low, high). If
high is None (the default), then results are from [0, low).

#### NOTE
New code should use the ~numpy.random.Generator.integers
method of a ~numpy.random.Generator instance instead;
please see the random-quick-start.

### Parameters

low
: Lowest (signed) integers to be drawn from the distribution (unless
  `high=None`, in which case this parameter is one above the
  *highest* such integer).

high
: If provided, one above the largest (signed) integer to be drawn
  from the distribution (see above for behavior if `high=None`).
  If array-like, must contain integer values

size
: Output shape.  If the given shape is, e.g., `(m, n, k)`, then
  `m * n * k` samples are drawn.  Default is None, in which case a
  single value is returned.

dtype
: Desired dtype of the result. Byteorder must be native.
  The default value is int.
  <br/>
  #### Versionadded
  Added in version 1.11.0.

### Returns

out
: size-shaped array of random integers from the appropriate
  distribution, or a single such random int if size not provided.

### See Also

random_integers
: interval [low, high], and 1 is the lowest value if high is
  omitted.

random.Generator.integers: which should be used for new code.

### Examples

```pycon
>>> np.random.randint(2, size=10)
array([1, 0, 0, 0, 1, 1, 0, 0, 1, 0]) # random
>>> np.random.randint(1, size=10)
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
```

Generate a 2 x 4 array of ints between 0 and 4, inclusive:

```pycon
>>> np.random.randint(5, size=(2, 4))
array([[4, 0, 2, 1], # random
       [3, 2, 2, 0]])
```

Generate a 1 x 3 array with 3 different upper bounds

```pycon
>>> np.random.randint(1, [3, 5, 10])
array([2, 2, 9]) # random
```

Generate a 1 by 3 array with 3 different lower bounds

```pycon
>>> np.random.randint([1, 5, 7], 10)
array([9, 8, 7]) # random
```

Generate a 2 by 4 array using broadcasting with dtype of uint8

```pycon
>>> np.random.randint([1, 3, 5, 7], [[10], [20]], dtype=np.uint8)
array([[ 8,  6,  9,  7], # random
       [ 1, 16,  9, 12]], dtype=uint8)
```

#### random_sample(\*size)

rand(d0, d1, …, dn)

Random values in a given shape.

#### NOTE
This is a convenience function for users porting code from Matlab,
and wraps random_sample. That function takes a
tuple to specify the size of the output, which is consistent with
other NumPy functions like numpy.zeros and numpy.ones.

Create an array of the given shape and populate it with
random samples from a uniform distribution
over `[0, 1)`.

### Parameters

d0, d1, …, dn
: The dimensions of the returned array, must be non-negative.
  If no argument is given a single Python float is returned.

### Returns

out
: Random values.

### See Also

random

### Examples

```pycon
>>> np.random.rand(3,2)
array([[ 0.14022471,  0.96360618],  #random
       [ 0.37601032,  0.25528411],  #random
       [ 0.49313049,  0.94909878]]) #random
```

#### seed(seed=None)

Reseed the singleton RandomState instance.

### Notes

This is a convenience, legacy function that exists to support
older code that uses the singleton RandomState. Best practice
is to use a dedicated `Generator` instance rather than
the random variate generation methods exposed directly in
the random module.

### See Also

numpy.random.Generator

#### set_state(state)

Set the internal state of the generator from a tuple.

For use if one has reason to manually (re-)set the internal state of
the bit generator used by the RandomState instance. By default,
RandomState uses the “Mersenne Twister”<sup>[1](#id91)</sup> pseudo-random number
generating algorithm.

### Parameters

state
: The state tuple has the following items:
  <br/>
  1. the string ‘MT19937’, specifying the Mersenne Twister algorithm.
  2. a 1-D array of 624 unsigned integers `keys`.
  3. an integer `pos`.
  4. an integer `has_gauss`.
  5. a float `cached_gaussian`.
  <br/>
  If state is a dictionary, it is directly set using the BitGenerators
  state property.

### Returns

out
: Returns ‘None’ on success.

### See Also

get_state

### Notes

set_state and get_state are not needed to work with any of the
random distributions in NumPy. If the internal state is manually altered,
the user should know exactly what he/she is doing.

For backwards compatibility, the form (str, array of 624 uints, int) is
also accepted although it is missing some information about the cached
Gaussian value: `state = ('MT19937', keys, pos)`.

### References

* <a id='id91'>**[1]**</a> M. Matsumoto and T. Nishimura, “Mersenne Twister: A 623-dimensionally equidistributed uniform pseudorandom number generator,” *ACM Trans. on Modeling and Computer Simulation*, Vol. 8, No. 1, pp. 3-30, Jan. 1998.

### jaqpotpy.utils.seeding.create_seed(a: int | str | None = None, max_bytes: int = 8) → int

Create a strong random seed. Otherwise, Python 2 would seed using
the system time, which might be non-robust especially in the
presence of concurrency.
Args:

> a: None seeds from an operating system specific randomness source.
> max_bytes: Maximum number of bytes to use in the seed.

### jaqpotpy.utils.seeding.hash_seed(seed: int | None = None, max_bytes: int = 8) → int

Any given evaluation is likely to have many PRNG’s active at
once. (Most commonly, because the environment is running in
multiple processes.) There’s literature indicating that having
linear correlations between seeds of multiple PRNG’s can correlate
the outputs:
[http://blogs.unity3d.com/2015/01/07/a-primer-on-repeatable-random-numbers/](http://blogs.unity3d.com/2015/01/07/a-primer-on-repeatable-random-numbers/)
[http://stackoverflow.com/questions/1554958/how-different-do-random-seeds-need-to-be](http://stackoverflow.com/questions/1554958/how-different-do-random-seeds-need-to-be)
[http://dl.acm.org/citation.cfm?id=1276928](http://dl.acm.org/citation.cfm?id=1276928)
Thus, for sanity we hash the seeds before using them. (This scheme
is likely not crypto-strength, but it should be good enough to get
rid of simple correlations.)
Args:

> seed: None seeds from an operating system specific randomness source.
> max_bytes: Maximum number of bytes to use in the hashed seed.

### jaqpotpy.utils.seeding.np_random(seed: int | None = 42) → Tuple[[RandomNumberGenerator](#jaqpotpy.utils.seeding.RandomNumberGenerator), Any]

## jaqpotpy.utils.types module

## jaqpotpy.utils.url_utils module

## Module contents
