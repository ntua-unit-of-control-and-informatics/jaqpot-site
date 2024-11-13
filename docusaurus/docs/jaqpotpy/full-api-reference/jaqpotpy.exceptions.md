# jaqpotpy.exceptions package

## Submodules

## jaqpotpy.exceptions.exceptions module

### *exception* jaqpotpy.exceptions.exceptions.JaqpotApiException(message, status_code=None)

Bases: `Exception`

Base exception class for Jaqpot API-related errors.

### *exception* jaqpotpy.exceptions.exceptions.JaqpotPredictionFailureException(message)

Bases: [`JaqpotApiException`](#jaqpotpy.exceptions.exceptions.JaqpotApiException)

Exception raised when there is a failure with the prediction.

### *exception* jaqpotpy.exceptions.exceptions.JaqpotPredictionTimeoutException(message)

Bases: `Exception`

Exception raised when the prediction call times out.

## Module contents
