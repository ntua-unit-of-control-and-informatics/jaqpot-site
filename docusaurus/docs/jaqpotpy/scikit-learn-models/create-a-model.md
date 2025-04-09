---
sidebar_position: 2
---

# Create a Model

This example demonstrates how to create a model using `jaqpotpy` with a scikit-learn model. The following code will guide you through generating a dataset, training a logistic regression model, and making predictions.

First, we import the necessary libraries:

```python
import pandas as pd
from sklearn.datasets import make_classification
from jaqpotpy.datasets import JaqpotTabularDataset
from sklearn.linear_model import LogisticRegression
from jaqpotpy.models import SklearnModel
```

Next, we generate a small binary classification dataset:

```python
X, y = make_classification(n_samples=100, n_features=4, random_state=42)
```

We then create a DataFrame with the features and target:

```python
df = pd.DataFrame(X, columns=["X1", "X2", "X3", "X4"])
df["y"] = y
```

Now, we initialize a `JaqpotTabularDataset` with the DataFrame:

```python
dataset = JaqpotTabularDataset(
    df=df,
    x_cols=["X1", "X2", "X3", "X4"],
    y_cols=["y"],
    task="binary_classification",
)
```

We wrap the scikit-learn model with Jaqpotpy's `SklearnModel`:

```python
jaqpot_model = SklearnModel(dataset=dataset, model=LogisticRegression())
```

Next, we fit the model to the dataset:

```python
jaqpot_model.fit()
```

We generate a small prediction dataset:

```python
X_test, _ = make_classification(n_samples=5, n_features=4, random_state=42)
```

We create a DataFrame with the features:

```python
df_test = pd.DataFrame(X_test, columns=["X1", "X2", "X3", "X4"])
```

We initialize a `JaqpotTabularDataset` for prediction:

```python
test_dataset = JaqpotTabularDataset(
    df=df_test,
    x_cols=["X1", "X2", "X3", "X4"],
    y_cols=None,
    task="binary_classification",
)
```

Finally, we use the trained model to predict the classes of the new data and the estimate their claissification probabilities and print the predictions:

```python
predictions = jaqpot_model.predict(test_dataset)
probabilities = jaqpot_model.predict_proba(test_dataset)
print(predictions)
```

This code snippet covers the entire process from dataset creation to model training and prediction using `jaqpotpy` and scikit-learn's `LogisticRegression`.
