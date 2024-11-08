# Creating a dataset

This example demonstrates how to create a Molecular Graph Neural Network dataset with `jaqpotpy`. We utilize a dataset containing SMILES representations of molecules and their associated activity values to predict molecular activity.

## Import Required Libraries

We first import the necessary libraries:

```python
import torch
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
from jaqpotpy.datasets import SmilesGraphDataset
```

## Load the Data
We create a sample dataset containing SMILES strings and their corresponding target values. This example uses a regression task dataset.

```python
smiles_list = [
    "CC(=O)OC1=CC=CC=C1C(=O)O",  # Aspirin
    "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",  # Caffeine
    "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O",  # Ibuprofen
    "CC(C)CCCC(C)C1CCC2C1(CCC3C2CCC4=C3CC=C4)O",  # Cholesterol
    "OC[C@H]1OC(=O)C(O)=C1O"  # Vitamin C (Ascorbic acid)
]
y = [0, 1, 0, 1, 1]
```

## Featurization
To convert the SMILES strings into graph-based features, we use the `SmilesGraphFeaturizer`. This featurizer can include edge features and supports various atom and bond features.

### Default featurizer
We create an instance of `SmilesGraphFeaturizer` and configure it with default settings for graph features (nodes and edges).
```python
featurizer = SmilesGraphFeaturizer(include_edge_features=True)
featurizer.set_default_config()
```

#### Custom hardcoded features
Node features and their coresponding values can be hardcoded by user if it is supported by the featurizer. Name of features and feature values should be provided for one hot encoding
Names of features and their RDKit functions can be obtained with:
```python
featurizer.SUPPORTED_ATOM_FEATURES()
featurizer.SUPPORTED_BOND_FEATURES()
```
```python
featurizer = SmilesGraphFeaturizer(include_edge_features=True)
# First argument is the feature name
# Secnd argument is the feature possible values
featurizer.add_atom_feature("symbol", ["C", "O", "N", "F", "Cl", "Br", "I"])
featurizer.add_atom_feature("total_num_hs", [0, 1, 2, 3, 4])
# If possible values are not provided, the feature is not one one-hot encoded
featurizer.add_atom_feature("formal_charge")
```

## Dataset Preparation
We create datasets for training, validation, and testing using the featurizer. The datasets include the SMILES strings, target values, and the configured featurizer.

```python
dataset = SmilesGraphDataset(
    smiles=smiles, y=y, featurizer=featurizer
)
```

### Precompute Featurization
For small datasets, it is recommended to precompute the featurization to save time during training.

```python
dataset.precompute_featurization()
```

