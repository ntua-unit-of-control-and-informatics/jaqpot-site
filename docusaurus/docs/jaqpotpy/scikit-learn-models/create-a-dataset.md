---
sidebar_position: 1
---

# Create a Dataset

This guide demonstrates how to create and work with datasets using `jaqpotpy`. The `JaqpotpyTabularDataset` class is versatile and can handle various types of data, including molecular representations (SMILES) and their descriptors.

## Basic Setup

First, import the necessary libraries:

```python
import pandas as pd
import numpy as np
from jaqpotpy.datasets import JaqpotpyTabularDataset
from jaqpotpy.descriptors import RDKitDescriptors, MordredDescriptors, TopologicalFingerprint, MACCSKeysFingerprint
```

## Creating a Basic Dataset

For a simple dataset without molecular descriptors:

```python
# Sample data
data = pd.DataFrame({
    'feature1': [1, 2, 3, 4, 5],
    'feature2': [2.1, 3.2, 4.3, 5.4, 6.5],
    'target': [0, 1, 0, 1, 0]
})

# Create dataset for binary classification
dataset = JaqpotpyTabularDataset(
    df=data,
    x_cols=['feature1', 'feature2'],  # Feature columns
    y_cols=['target'],                # Target column
    task='binary_classification'      # Specify the task type
)
```

## Creating a Dataset with SMILES and Molecular Descriptors

When working with molecular data, the column containing the SMILES, as well as the featurizer should be:

```python
# Sample data with SMILES
mol_data = pd.DataFrame({
    'smiles': ['CC', 'CCO', 'CCC', 'CCCl'],
    'temperature': [25, 30, 35, 40],
    'activity': [0.5, 0.7, 0.3, 0.9]
})

# Initialize a molecular descriptor calculator
rdkit_desc = RDKitDescriptors()

# Create dataset with molecular descriptors
mol_dataset = JaqpotpyTabularDataset(
    df=mol_data,
    x_cols=['temperature'],    # Additional feature columns
    y_cols=['activity'],       # Target column
    smiles_cols=['smiles'],    # SMILES column
    task='regression',         # Regression task
    featurizer=rdkit_desc      # Specify the descriptor calculator
)
```

## Available Task Types

JaqpotpyTabularDataset supports three types of machine learning tasks:

- `regression`: For predicting continuous values
- `binary_classification`: For two-class classification problems
- `multiclass_classification`: For classification with more than two classes

## Available Molecular Descriptors

Jaqpotpy offers four different molecular descriptor calculators:

```python
# RDKit descriptors
rdkit_desc = RDKitDescriptors()

# Mordred descriptors
mordred_desc = MordredDescriptors()

# Topological fingerprints
topo_fp = TopologicalFingerprint()

# MACCS keys fingerprints
maccs_fp = MACCSKeysFingerprint()
```

## Creating a Multiclass Classification Dataset

```python
# Sample data for multiclass classification
multi_data = pd.DataFrame({
    'smiles': ['CC', 'CCO', 'CCC', 'CCCl'],
    'feature1': [1, 2, 3, 4],
    'class': ['A', 'B', 'C', 'A']
})

# Using MACCS keys fingerprints
maccs_fp = MACCSKeysFingerprint()

multi_dataset = JaqpotpyTabularDataset(
    df=multi_data,
    x_cols=['feature1'],
    y_cols=['class'],
    smiles_cols=['smiles'],
    task='multiclass_classification',
    featurizer=maccs_fp
)
```

## Important Notes

1. The `smiles_cols` parameter is optional. If not provided, no molecular descriptors will be generated.
2. When using `smiles_cols`, a `featurizer` must be specified.
3. The `task` parameter must match your problem type:
   - Use `regression` for continuous targets
   - Use `binary_classification` for two-class problems
   - Use `multiclass_classification` for multiple classes
4. Feature columns (`x_cols`) can include both molecular and non-molecular features.
5. Target columns (`y_cols`) specify the variable(s) to be predicted.

This dataset object can then be used with the `Sklearn()` Jaqpotpy model classes for training and prediction tasks.
