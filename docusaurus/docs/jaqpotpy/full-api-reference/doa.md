<a id="__init__"></a>

# \_\_init\_\_

<a id="doa"></a>

# doa

<a id="doa.DOA"></a>

## DOA Objects

```python
class DOA(ABC)
```

Abstract class for DOA methods

<a id="doa.Leverage"></a>

## Leverage Objects

```python
class Leverage(DOA)
```

Leverage class for Domain of Applicability (DOA) calculation using leverage method.

**Attributes**:

- `_doa` _list_ - List to store leverage values.
- `_in_doa` _list_ - List to store boolean values indicating if data points are within DOA.
- `_data` _Union[np.array, pd.DataFrame]_ - Input data used for DOA calculation.
- `_doa_matrix` _np.array_ - Matrix used for leverage calculation.
- `_h_star` _float_ - Threshold value for leverage.
- `doa_attributes` _LeverageDoa_ - Attributes of the leverage DOA.
  Properties:
- `__name__` _str_ - Name of the DOA method.
- `doa_matrix` _np.array_ - Getter and setter for the DOA matrix.
- `h_star` _float_ - Getter and setter for the leverage threshold.

**Methods**:

- `__init__()` - Initializes the Leverage class.
- `__getitem__(key)` - Returns the key.
- `calculate_threshold()` - Calculates the leverage threshold (_h_star).
- `calculate_matrix()` - Calculates the DOA matrix (_doa_matrix) using the input data.
- `fit(X` - Union[np.array, pd.DataFrame]): Fits the model using the input data X.
- `predict(new_data` - Union[np.array, pd.DataFrame]) -> Iterable[Any]: Predicts if new data points are within DOA.
- `_validate_input(data` - Union[np.array, pd.DataFrame]): Validates and converts input data to numpy array if necessary.
- `get_attributes()` - Returns the attributes of the leverage DOA.

<a id="doa.MeanVar"></a>

## MeanVar Objects

```python
class MeanVar(DOA)
```

Implements Mean and Variance domain of applicability .
Initialized upon training data and holds the doa mean and the variance of the data.
Calculates the mean and variance for a new instance of data or array of data and decides if in AD.

