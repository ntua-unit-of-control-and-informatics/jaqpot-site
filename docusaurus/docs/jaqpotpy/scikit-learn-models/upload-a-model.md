---
sidebar_position: 3
---

# Upload a Model on Jaqpot

This example demonstrates how to upload a trained model on Jaqpot using the `jaqpotpy` library. The code below shows the complete process, from generating a dataset to deploying the model on Jaqpot.

First, we generate a small regression dataset and create a DataFrame with the features and target:

```python
import pandas as pd
from sklearn.datasets import make_regression

# Generate a small regression dataset
X, y = make_regression(n_samples=100, n_features=4, noise=0.2, random_state=42)

# Create a DataFrame with the generated data
df = pd.DataFrame(X, columns=["X1", "X2", "X3", "X4"])
df["y"] = y
```

Next, we initialize a `JaqpotTabularDataset` with the DataFrame, specifying the feature columns, target column, and task type:

```python
from jaqpotpy.datasets import JaqpotTabularDataset

# Initialize a JaqpotTabularDataset with the DataFrame
dataset = JaqpotTabularDataset(
    df=df,
    x_cols=["X1", "X2", "X3", "X4"],
    y_cols=["y"],
    task="regression",
)
```

We then wrap the scikit-learn model with `Jaqpotpy`'s `SklearnModel` and fit the model to the dataset:

```python
from sklearn.linear_model import LinearRegression
from jaqpotpy.models import SklearnModel

# Wrap the scikit-learn model with Jaqpotpy's SklearnModel
jaqpot_model = SklearnModel(dataset=dataset, model=LinearRegression())

# Fit the model to the dataset
jaqpot_model.fit()
```

Finally, we upload the trained model to Jaqpot. To upload a model, a Jaqpot account is required. You can create one [here](https://app.jaqpot.org). After logging in to Jaqpot, we use the `deploy_on_jaqpot` method to upload the model, providing the model name, description, and visibility settings (PUBLIC or PRIVATE):

```python
from jaqpotpy import Jaqpot

# Upload the pretrained model on Jaqpot
jaqpot = Jaqpot()
jaqpot.login()
jaqpot_model.deploy_on_jaqpot(
    jaqpot=jaqpot,
    name="My first Jaqpot Model",
    description="This is my first attempt to train and upload a Jaqpot model.",
    visibility="PRIVATE",
)
```

In this final step, we first create an instance of the `Jaqpot` class and log in. Then, we call the `deploy_on_jaqpot` method on our model, passing in the `Jaqpot` instance along with the model name, description, and visibility settings. This process allows you to easily deploy your trained models on Jaqpot for further use and sharing.
