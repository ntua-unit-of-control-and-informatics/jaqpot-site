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
from sklearn.ensemble import RandomForestRegressor
from jaqpotpy.datasets import JaqpotpyDataset
from jaqpotpy.models import SklearnModel
from jaqpotpy.descriptors import RDKitDescriptors


# Create a dataset
dataset = JaqpotpyDataset(
    df=your_data,
    x_cols=['x1', 'x2', 'x3'],
    y_cols=['target'],
    task='regression',
)

# Initialize and train a model
model = SklearnModel(
    model =RandomForestRegressor(),
    dataset = dataset
)
model.fit(dataset)

# Deploy to Jaqpot platform
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


