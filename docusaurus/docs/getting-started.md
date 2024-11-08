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

## Deploy your first model

```python
import pandas as pd
from sklearn.linear_model import LogisticRegression
from jaqpotpy.datasets import JaqpotpyDataset
from jaqpotpy.models import SklearnModel
from jaqpotpy import Jaqpot

# Sample data
data = pd.DataFrame({
    'feature1': [1, 2, 3, 4, 5],
    'feature2': [2.1, 3.2, 4.3, 5.4, 6.5],
    'target': [0, 1, 0, 1, 0]
})

# Create dataset for binary classification
dataset = JaqpotpyDataset(
    df=data,
    x_cols=['feature1', 'feature2'],  # Feature columns
    y_cols=['target'],                # Target column
    task='binary_classification'      # Specify the task type
)

# Τrain a model
model = SklearnModel(
    model =LogisticRegression(),
    dataset = dataset
)
model.fit()

# Upload Model on Jaqpot
jaqpot = Jaqpot()
jaqpot.login()
jaqpot_model.deploy_on_jaqpot(
    jaqpot=jaqpot,
    name="My first Jaqpot Model",
    description="This is my first attempt to train and upload a Jaqpot model.",
    visibility="PRIVATE",
)
```

## Success!

Voila! Your first model is now online on Jaqpot! Kudos to you, awesome modeler, for taking the first step toward your modeling journey! 🚀🌟


