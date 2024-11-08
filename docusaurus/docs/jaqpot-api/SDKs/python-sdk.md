---
title: Python SDK
sidebar_position: 1
---

```python
from jaqpotpy.api.jaqpot_api_client import JaqpotApiClient
jaqpot = JaqpotApiClient()
```

## Retrieve a model by ID

To retrieve a model by its ID, you can use the `get_model_by_id` method. Here is an example:

```python
model = jaqpot.get_model_by_id(model_id=1860)
print(model)
```

## Get shared models with organizations

To get the models that you share with Jaqpot organizations, you can use the `get_shared_models` method. Here is an example:

```python
shared_models = jaqpot.get_shared_models()
print(shared_models)
```

## Synchronous prediction

To take a synchronous prediction with a model, you can use the `predict_sync` method. In synchronous prediction, the http call waits until the prediction is complete before moving on. This is useful for quick predictions where you need an immediate result. Use the predict_sync method as shown below:

```python
input_data = [{"SMILES": "CC", "X1": 1, "X2": 2, "Cat_col": "CAT_1"}]
prediction = jaqpot.predict_sync(model_id=1853, dataset=input_data)
print(prediction)
```

In this case, the program will wait until predict_sync returns the prediction results, which are then printed.

## Asynchronous prediction

To take an asynchronous prediction with a model, you can use the `predict_async` method. In asynchronous prediction, the http call doesn’t wait for the prediction to finish, allowing it to continue running other tasks. This is useful for longer predictions or when handling multiple requests. Use the predict_async method as follows:

```python
input_data = [{"SMILES": "CC", "X1": 1, "X2": 2}]
prediction_dataset_id = jaqpot.predict_async(model_id=1812, dataset=input_data)
```

## Get a dataset by ID

To retrieve a dataset by its ID, you can use the `get_dataset_by_id` method. Here is an example:

```python
results = jaqpot.get_dataset_by_id(dataset_id=prediction_dataset_id)
print(results)
```

## Prediction with a model and a CSV File

To take a prediction with a model using a CSV file, you can use the `predict_with_csv_sync` method. Here is an example:

```python
csv_path = "ADD_A_CSV_PATH.csv"
prediction = jaqpot.predict_with_csv_sync(model_id=1812, csv_path=csv_path)
print(prediction)
```