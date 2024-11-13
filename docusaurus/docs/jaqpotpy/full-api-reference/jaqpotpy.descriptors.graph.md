# jaqpotpy.descriptors.graph package

## Submodules

## jaqpotpy.descriptors.graph.graph_featurizer module

### *class* jaqpotpy.descriptors.graph.graph_featurizer.SmilesGraphFeaturizer(include_edge_features=True)

Bases: `object`

Featurizes SMILES strings into graph data suitable for graph neural networks (GNNs).
This class processes SMILES strings to generate atom and bond feature vectors, along
with adjacency matrices, to create graph representations for use in GNN-based models.

Attributes:
: SUPPORTED_ATOM_FEATURES (dict): Defines allowable atom features and their extraction methods.
  SUPPORTED_BOND_FEATURES (dict): Defines allowable bond features and their extraction methods.
  NON_ONE_HOT_ENCODED (list): List of features not subjected to one-hot encoding.

Args:

#### NON_ONE_HOT_ENCODED *= ['formal_charge', 'num_radical_electrons', 'is_aromatic', '_ChiralityPossible', 'is_conjugated', 'is_in_ring', 'mass']*

#### SUPPORTED_ATOM_FEATURES *= {'_ChiralityPossible': <function SmilesGraphFeaturizer.<lambda>>, 'chiral_tag': <function SmilesGraphFeaturizer.<lambda>>, 'degree': <function SmilesGraphFeaturizer.<lambda>>, 'explicit_valence': <function SmilesGraphFeaturizer.<lambda>>, 'formal_charge': <function SmilesGraphFeaturizer.<lambda>>, 'hybridization': <function SmilesGraphFeaturizer.<lambda>>, 'implicit_valence': <function SmilesGraphFeaturizer.<lambda>>, 'is_aromatic': <function SmilesGraphFeaturizer.<lambda>>, 'is_in_ring': <function SmilesGraphFeaturizer.<lambda>>, 'isotope': <function SmilesGraphFeaturizer.<lambda>>, 'mass': <function SmilesGraphFeaturizer.<lambda>>, 'num_explicit_hs': <function SmilesGraphFeaturizer.<lambda>>, 'num_implicit_hs': <function SmilesGraphFeaturizer.<lambda>>, 'num_radical_electrons': <function SmilesGraphFeaturizer.<lambda>>, 'symbol': <function SmilesGraphFeaturizer.<lambda>>, 'total_degree': <function SmilesGraphFeaturizer.<lambda>>, 'total_num_hs': <function SmilesGraphFeaturizer.<lambda>>, 'total_valence': <function SmilesGraphFeaturizer.<lambda>>}*

#### SUPPORTED_BOND_FEATURES *= {'bond_type': <function SmilesGraphFeaturizer.<lambda>>, 'is_conjugated': <function SmilesGraphFeaturizer.<lambda>>, 'is_in_ring': <function SmilesGraphFeaturizer.<lambda>>, 'stereo': <function SmilesGraphFeaturizer.<lambda>>}*

#### add_atom_feature(atom_feature, allowable_set=None)

Adds a custom atom feature with an optional allowable set.

Args:
: atom_feature (str): Name of the atom feature.
  allowable_set (list, optional): List of allowable values for the feature.

#### add_bond_feature(bond_feature, allowable_set=None)

Adds a custom bond feature with an optional allowable set.

Args:
: bond_feature (str): Name of the bond feature.
  allowable_set (list, optional): List of allowable values for the feature.

#### featurize(sm, y=None)

Converts a SMILES string to a graph representation.

Args:
: sm (str): SMILES string of the molecule.
  y (optional): Target value associated with the SMILES.

Returns:
: torch_geometric.data.Data: Graph representation with node and edge features.

#### get_default_atom_allowable_set(atom_feature)

Retrieves the default allowable set for a specified atom feature.

Args:
: atom_feature (str): Name of the atom feature.

Returns:
: list: Default allowable set for the feature.

#### get_default_bond_allowable_set(bond_feature)

Retrieves the default allowable set for a specified bond feature.

Args:
: bond_feature (str): Name of the bond feature.

Returns:
: list: Default allowable set for the feature.

#### get_dict()

Returns a dictionary representation of the featurizer’s settings and feature sets.

Returns:
: dict: Featurizer configuration and feature sets.

#### get_num_edge_features()

Returns the number of features per bond edge.

Returns:
: int: Number of bond features.

#### get_num_node_features()

Returns the number of features per atom node.

Returns:
: int: Number of atom features.

#### load_dict(feat_dict)

Loads settings and feature sets from a dictionary.

Args:
: feat_dict (dict): Dictionary containing featurizer settings and feature sets.

#### set_default_config()

Resets the feature configuration to default settings.

#### sort_allowable_sets()

Sorts allowable sets for atom and bond features to ensure consistency.

## Module contents
