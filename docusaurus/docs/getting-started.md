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

## Quick Start Example

```python
from sklearn.ensemble import RandomForestRegressor
from jaqpotpy.datasets import JaqpotpyDataset
from jaqpotpy.models import SklearnModel
from jaqpotpy.descriptors import RDKitDescriptors


# Create a dataset with molecular descriptors
dataset = JaqpotpyDataset(
    df=your_data,
    x_cols=['additional_features'],
    y_cols=['target'],
    smiles_cols=['smiles'],
    task='regression',
    featurizer=RDKitDescriptors()
)

# Initialize and train a model
model = SklearnModel(
    model =RandomForestRegressor(),
    dataset = dataset
)
model.fit(dataset)

# Deploy to Jaqpot platform
# Upload locally
jaqpot = Jaqpot()
jaqpot.login()
model.deploy_on_jaqpot(
    jaqpot=jaqpot,
    name="Demo model",
    description="This is my first Jaqpot model",
    visibility="PRIVATE",
)

```

## Success!

Voila! Your first model is now online on Jaqpot! Kudos to you, awesome modeler, for taking the first step toward your modeling journey! 🚀🌟


