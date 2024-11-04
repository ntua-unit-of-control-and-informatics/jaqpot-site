<a id="__init__"></a>

# \_\_init\_\_

<a id="exceptions"></a>

# exceptions

<a id="exceptions.JaqpotApiException"></a>

## JaqpotApiException Objects

```python
class JaqpotApiException(Exception)
```

Base exception class for Jaqpot API-related errors.

<a id="exceptions.JaqpotPredictionFailureException"></a>

## JaqpotPredictionFailureException Objects

```python
class JaqpotPredictionFailureException(JaqpotApiException)
```

Exception raised when there is a failure with the prediction.

<a id="exceptions.JaqpotPredictionTimeoutException"></a>

## JaqpotPredictionTimeoutException Objects

```python
class JaqpotPredictionTimeoutException(Exception)
```

Exception raised when the prediction call times out.

