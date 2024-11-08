# Creating a Molecular Graph Dataset with JaqpotPy

This example demonstrates how to create a Molecular Graph Neural Network dataset with `jaqpotpy`. We utilize a dataset containing SMILES representations of molecules and their associated activity values to predict molecular activity..

## Prerequisites

Ensure you have the following Python packages installed:

- `jaqpotpy` 
- `rdkit` (Optionally for featurization) 

## Import Required Libraries

We first import the necessary libraries:

```python
import torch
from torch_geometric.loader import DataLoader
import pandas as pd
from jaqpotpy import Jaqpot
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
from jaqpotpy.datasets import SmilesGraphDataset
```

## Load the Data
We load a sample dataset containing SMILES strings and their corresponding activity values. This example uses a regression task dataset.

## Featurization
To convert the SMILES strings into graph-based features, we use the `SmilesGraphFeaturizer`. This featurizer can include edge features and supports various atom and bond features.

### Create a Graph Featurizer
We create an instance of `SmilesGraphFeaturizer` and configure it with default settings. Additionally, we add custom atom features.

#### Default features
```python
# Initialize featurizer and include edge features
featurizer = SmilesGraphFeaturizer(include_edge_features=True)
# Set default configuration for node and edge features
featurizer.set_default_config()
# Add custom atom features
featurizer.add_atom_feature("symbol", ["C", "O", "N", "F", "Cl", "Br", "I"])
featurizer.add_atom_feature("total_num_hs", [0, 1, 2, 3, 4])
featurizer.add_atom_feature("formal_charge")
# Bond features can also be added similarly if needed
```

#### Custom hardcoded features
```python
# Initialize featurizer and include edge features
featurizer = SmilesGraphFeaturizer(include_edge_features=True)
# Add custom atom features
featurizer.add_atom_feature("symbol", ["C", "O", "N", "F", "Cl", "Br", "I"])
featurizer.add_atom_feature("total_num_hs", [0, 1, 2, 3, 4])
featurizer.add_atom_feature("formal_charge")
# Bond features can also be added similarly if needed
```

## Dataset Preparation
We create datasets for training, validation, and testing using the featurizer. The datasets include the SMILES strings, target values, and the configured featurizer.

```python
# Create datasets for training, validation, and testing
train_dataset = SmilesGraphDataset(
    smiles=train_smiles, y=train_y, featurizer=featurizer
)
val_dataset = SmilesGraphDataset(smiles=val_smiles, y=val_y, featurizer=featurizer)
test_dataset = SmilesGraphDataset(smiles=test_smiles, y=test_y, featurizer=featurizer)
```

### Precompute Featurization
For small datasets, it is recommended to precompute the featurization to save time during training.

```python
# Precompute featurization for efficiency
train_dataset.precompute_featurization()
val_dataset.precompute_featurization()
test_dataset.precompute_featurization()
```

