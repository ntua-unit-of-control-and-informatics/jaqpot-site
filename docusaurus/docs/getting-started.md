---
slug: /getting-started
sidebar_position: 2
title: Getting started
---

# Getting started

## Installation

You can install JaqpotPy using pip:

```bash
pip install jaqpotpy
```

## Quick start example

```python
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.datasets import make_regression
from jaqpotpy.datasets import JaqpotpyDataset
from jaqpotpy.models import SklearnModel
from sklearn.datasets import make_regression
from jaqpotpy.descriptors import RDKitDescriptors

X, y = make_regression(n_samples=10, n_features=2, noise=0.2, random_state=42)
df = pd.DataFrame(X, columns=["X1", "X2"])
df["target"] = y
df["smiles"] = [ "CC", "CCO", "CCC", "CCCl", "CCBr", "COC", "CCOCC", "CCCO", "CCCC", "CCCCCC",]


# Create a dataset with molecular descriptors
dataset = JaqpotpyDataset(
    df=df,
    x_cols=['X1', 'X2'],
    y_cols=['target'],
    smiles_cols=['smiles'],
    task='regression',
    featurizer=RDKitDescriptors()
)

# Τrain a model
model = SklearnModel(
    model =RandomForestRegressor(),
    dataset = dataset
)
model.fit()

```

## Success!

Voila! Your first model is now online on Jaqpot! Kudos to you, awesome modeler, for taking the first step toward your modeling journey! 🚀🌟


