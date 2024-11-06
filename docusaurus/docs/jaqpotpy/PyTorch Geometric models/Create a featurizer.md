First step of creating molecular GNNs is to create a graph featurizer. You can choose to have a default configuration for the graph features or add your own custom features based on the RDKit Library feature names.

### Default features
```python
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
# Initialize a featurizer
# You can choose to include edge features or not
featurizer = SmilesGraphFeaturizer(include_edge_features = True)
# Obtain predefined features for both node and edge features
featurizer.set_default_config()
```

### Features from RDKit

For custom user features, Node and Edge features names must match the lists below:

#### Node features
- `symbol`
- `degree`
- `total_degree`
- `formal_charge`
- `num_radical_electrons`
- `hybridization`
- `is_aromatic`
- `is_in_ring`
- `total_num_hs`
- `num_explicit_hs`
- `num_implicit_hs`
- `_ChiralityPossible`
- `isotope`
- `total_valence`
- `explicit_valence`
- `implicit_valence`
- `chiral_tag`
- `mass`
#### Edge features

- `bond_type`
- `is_conjugated`
- `is_in_ring`
- `stereo`


```python
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
featurizer = SmilesGraphFeaturizer(include_edge_features = True)
# Add a node feature 
# The first argument corresponds to the feature (name must be exact from the list mentioned above)
# The second argument refers to the list of possible feature values (names must match RDKit names)
featurizer.add_atom_feature("symbol", ["C", "O", "N", "F", "Cl", "Br", "I"])
# If you don't want to one-hot-encode your features, simply bypass the second argument
featurizer.add_atom_feature("formal_charge")
# Add an edge feature the same way
featurizer.add_edge_feature("is_in_ring")
```