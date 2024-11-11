---
title: Python SDK
sidebar_position: 1
---

The jaqpotpy Python SDK provides a streamlined interface for interacting with Jaqpot's predictive models and services within Python environments. With this SDK, users can easily retrieve models, make predictions (both synchronously and asynchronously), manage datasets, and handle model sharing across organizations. The SDK simplifies the process of integrating Jaqpot's machine learning capabilities into Python applications, supporting both individual predictions and batch processing through CSV files.

## Authentication

Before using the SDK, you'll need to obtain API credentials from Jaqpot. To get your API keys:

1. Log in to app.jaqpot.org
2. Click on the account icon in the top right corner
3. Select "API keys" from the dropdown menu

**The API keys are valid for 6 months from their generation date. Please store these keys securely, as they cannot be retrieved from Jaqpot after initial generation. If your keys are lost or expired, you will need to generate new ones by following the same steps above.**

There are two methods to set up your API credentials as environment variables:

### Method 1: Direct Python Setup
The most straightforward way is to set the environment variables directly in your Python code:

```python
import os 
os.environ['JAQPOT_API_KEY] = 'your_api_key_here'
os.environ['JAQPOT_API_SECRET] = 'your_api_secret_here'
```

### Method 2: Using a .env file

Alternatively, you can create a `.env` file in your project directory with the following content:
```
JAQPOT_API_KEY='your_api_key_here'
JAQPOT_API_SECRET='your_api_secret_here'
```
Then load these variables in your Python code:

```python
from dotenv import load_dotenv
load_dotenv(".env") # Returns True if successful
```
Note: If `load_dotenv()` returns False, verify that your `.env` file is properly formatted and in the correct location.

### Initializing the Client

After setting up your environment variables, initialize the Jaqpot client:

```python
from jaqpotpy.api.jaqpot_api_client import JaqpotApiClient
jaqpot = JaqpotApiClient()
```

## Retrieve a model by ID

To retrieve a model by its ID, you can use the `get_model_by_id` method. Here is an example:

```python
model = jaqpot.get_model_by_id(model_id=1886)
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
prediction = jaqpot.predict_sync(model_id=1886, dataset=input_data)
print(prediction)
```

In this case, the program will wait until predict_sync returns the prediction results, which are then printed.

## Asynchronous prediction

To take an asynchronous prediction with a model, you can use the `predict_async` method. In asynchronous prediction, the http call doesn’t wait for the prediction to finish, allowing it to continue running other tasks. This is useful for longer predictions or when handling multiple requests. Use the predict_async method as follows:

```python
input_data = [{"SMILES": "CC", "X1": 1, "X2": 2, "Cat_col": "CAT_1"}]
prediction_dataset_id = jaqpot.predict_async(model_id=1886, dataset=input_data)
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
prediction = jaqpot.predict_with_csv_sync(model_id=1886, csv_path=csv_path)
print(prediction)
```