---
sidebar_position: 1
title: Upload your first model
---
# Upload your first model

Welcome to the Jaqpot platform! This guide shows you how to deploy your first machine learning model using a simple logistic regression with the Jaqpot Python SDK.

```python
import pandas as pd
from sklearn.linear_model import LogisticRegression
import numpy as np

from jaqpotpy import Jaqpot
from jaqpotpy.datasets import JaqpotpyDataset
from jaqpotpy.models import SklearnModel

# create a pandas dataframe for your model dataset
data = {
    "X1": [0.5, 1, 1.5, 3, 2, 1],
    "X2": [1.5, 1, 0.5, 0.5, 2, 2.5],
    "RESULT": [0, 0, 1, 1, 1, 1],
}

df = pd.DataFrame(data)

y_cols = ["RESULT"]
x_cols = ["X1", "X2"]

# input your data to a jaqpot dataset
dataset = JaqpotpyDataset(
    df=df, y_cols=y_cols, x_cols=x_cols, task="BINARY_CLASSIFICATION"
)

# train your model
lr_model = LogisticRegression()

model = SklearnModel(dataset=dataset, doa=None, model=lr_model)
model.fit()

# upload your model on jaqpot
jaqpot = Jaqpot()
jaqpot.login() # follow the instructions here to login to the jaqpot platform
model.deploy_on_jaqpot(
    jaqpot=jaqpot,
    name="Alex logistic regression",
    description="Test logistic regression",
    visibility="PRIVATE",
)


## Success!

Voila! Your first model is now online on Jaqpot! Kudos to you, awesome modeler, for taking the first step toward your modeling journey! 🚀🌟
