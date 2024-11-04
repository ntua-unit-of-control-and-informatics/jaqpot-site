<a id="custom_one_hot_encoder"></a>

# custom\_one\_hot\_encoder

<a id="custom_one_hot_encoder.CustomOneHotEncoder"></a>

## CustomOneHotEncoder Objects

```python
class CustomOneHotEncoder(BaseEstimator, TransformerMixin)
```

A custom one-hot encoder for pandas DataFrames.

Parameters
----------
categorical_columns : list of str, optional
    List of column names to be treated as categorical and to be one-hot encoded.

<a id="custom_one_hot_encoder.CustomOneHotEncoder.fit"></a>

#### fit

```python
def fit(X, y=None)
```

Fit the encoder to the DataFrame.

Parameters
----------
X : pandas.DataFrame
    The input DataFrame to fit.
y : None
    Ignored. This parameter exists for compatibility with scikit-learn's interface.

Returns
-------
self : CustomOneHotEncoder
    Fitted encoder.

Raises
------
ValueError
    If `X` is not a pandas DataFrame.
    If a column name contains the protected separator.
    If a column indicated as `categorical`, contains float values.

<a id="custom_one_hot_encoder.CustomOneHotEncoder.transform"></a>

#### transform

```python
def transform(X)
```

Transform the DataFrame using the fitted encoder.

Parameters
----------
X : pandas.DataFrame
    The input DataFrame to transform.

Returns
-------
encoded_df : pandas.DataFrame
    The transformed DataFrame with one-hot encoded columns.

Raises
------
NotFittedError
    If the encoder is not fitted.
ValueError
    If `X` is not a pandas DataFrame.
    If `X` does not have the exact same columns as the DataFrame used for fitting.

<a id="custom_one_hot_encoder.CustomOneHotEncoder.__sklearn_is_fitted__"></a>

#### \_\_sklearn\_is\_fitted\_\_

```python
def __sklearn_is_fitted__()
```

Check if the estimator is fitted.

Returns
-------
bool
    True if the estimator is fitted, False otherwise.

<a id="__init__"></a>

# \_\_init\_\_

