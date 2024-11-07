To demonstrate how to use the domain of applicability (DOA) with Jaqpotpy models, we will create a regression model using scikit-learn's Linear Regression and evaluate the DOA using Jaqpotpy's Leverage, BoundingBox, and MeanVar methods.

First, we generate a small regression dataset with 100 samples, each having 4 features and some noise. We then create a DataFrame with the features stored in columns "X1", "X2", "X3", "X4" and the target in column "y".

```python
import pandas as pd
from sklearn.datasets import make_regression
from jaqpotpy.datasets import JaqpotpyDataset
from sklearn.linear_model import LinearRegression
from jaqpotpy.models.sklearn import SklearnModel
from jaqpotpy.doa import Leverage, BoundingBox, MeanVar

X, y = make_regression(n_samples=100, n_features=4, noise=0.2, random_state=42)
df = pd.DataFrame(X, columns=["X1", "X2", "X3", "X4"])
df["y"] = y
```

Next, we initialize a `JaqpotpyDataset` with the DataFrame, specifying the feature columns and the target column, and define the task as regression.

```python
dataset = JaqpotpyDataset(
    df=df,
    x_cols=["X1", "X2", "X3", "X4"],
    y_cols=["y"],
    task="regression",
)
```

We then wrap the scikit-learn model with Jaqpotpy's `SklearnModel`, using Linear Regression as the regression model and specifying the DOA methods: Leverage, BoundingBox, and MeanVar.

```python
jaqpot_model = SklearnModel(
    dataset=dataset,
    model=LinearRegression(),
    doa=[Leverage(), BoundingBox(), MeanVar()],
)
```

After fitting the model to the dataset, we generate a small prediction dataset with 5 samples, each having 4 features, and create a DataFrame with the features.

```python
jaqpot_model.fit()
X_test, _ = make_regression(n_samples=5, n_features=4, noise=0.2, random_state=42)
df_test = pd.DataFrame(X_test, columns=["X1", "X2", "X3", "X4"])
```

We initialize a `JaqpotpyDataset` for prediction, specifying the feature columns and setting `y_cols` to `None` since we are predicting.

```python
test_dataset = JaqpotpyDataset(
    df=df_test,
    x_cols=["X1", "X2", "X3", "X4"],
    y_cols=None,
    task="regression",
)
```

Finally, we use the trained model to check if the test data are in or out of the domain of applicability. The `predict_doa` method also evaluates the domain of applicability for the predictions.

```python
doa_predictions = jaqpot_model.predict_doa(test_dataset)
print(doa_predictions)
```

This example demonstrates how to use Jaqpotpy to evaluate the domain of applicability for a regression model, ensuring that predictions are made within the reliable range of the model.
