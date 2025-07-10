---
title: Python SDK
sidebar_position: 1
---

The [Jaqpot Python SDK](https://pypi.org/project/jaqpot-python-sdk/) provides a streamlined interface for interacting with Jaqpot's predictive models and services within Python environments. With this SDK, users can easily retrieve models, make predictions (both synchronously and asynchronously), manage datasets, and handle model sharing across organizations. The SDK simplifies the process of integrating Jaqpot's machine learning capabilities into Python applications, supporting both individual predictions and batch processing through CSV files.

## Installation

Install using pip:
```shell
pip install jaqpot-python-sdk
```

## Authentication

Before using the SDK, you'll need to obtain API credentials from Jaqpot. To get your API keys:

1. Log in to app.jaqpot.org
2. Click on the account icon in the top right corner
3. Select "API keys" from the dropdown menu

**The API keys are valid for 6 months from their generation date. Please store these keys securely, as they cannot be retrieved from Jaqpot after initial generation. If your keys are lost or expired, you will need to generate new ones by following the same steps above.**

:::tip
Always ensure you're handling API credentials securely and avoid exposing them in your code or version control systems.
:::

There are multiple ways to set up your API credentials as environment variables for Jaqpotpy. Here are presented 2 common methods. Using these methods, your API credentials will be automatically loaded and set as HTTP headers (`X-Api-Key` and `X-Api-Secret`) required for authentication with the Jaqpot service.

### Method 1: Using Environment Variables directly
You can set environment variables before running your script:

```python
# Linux/MacOS
export JAQPOT_API_KEY='your_api_key_here'
export JAQPOT_API_SECRET='your_api_secret_here'
python your_script.py

# Windows (Command Prompt)
set JAQPOT_API_KEY=your_api_key_here
set JAQPOT_API_SECRET=your_api_secret_here
python your_script.py
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
**Note 1**: If `load_dotenv()` returns False, verify that your `.env` file is properly formatted and in the correct location.

**Note 2**: Remember to add `.env` to your .gitignore file to keep your credentials secure.

### Method 3: Direct API key authentication

For **Jupyter notebook environments** or similar interactive sessions where you can securely handle credentials, you can directly initialize the JaqpotApiClient with your API keys:


```python
from jaqpot_python_sdk.jaqpot_api_client import JaqpotApiClient
from google.colab import userdata
jaqpot_api_key = userdata.get('JAQPOT_API_KEY')
jaqpot_api_secret = userdata.get('JAQPOT_API_SECRET')

JaqpotApiClient(api_key=jaqpot_api_key, api_secret=jaqpot_api_secret)
```

### Initializing the Client

After setting up your environment variables, initialize the Jaqpot client:

```python
from jaqpot_python_sdk.jaqpot_api_client import JaqpotApiClient

jaqpot_api_client = JaqpotApiClient()
```

## Retrieve a model by ID

To retrieve a model by its ID, you can use the `get_model_by_id` method. Here is an example:

```python
model = jaqpot_api_client.get_model_by_id(model_id=1886)
print(model)
```

## Get shared models with organizations

To get the models that you share with Jaqpot organizations, you can use the `get_shared_models` method. Here is an example:

```python
shared_models = jaqpot_api_client.get_shared_models()
print(shared_models)
```

## Synchronous prediction

To take a synchronous prediction with a model, you can use the `predict_sync` method. In synchronous prediction, the http call waits until the prediction is complete before moving on. This is useful for quick predictions where you need an immediate result. Use the predict_sync method as shown below:

```python
input_data = [{"SMILES": "CC", "X1": 1, "X2": 2, "Cat_col": "CAT_1"}]
prediction = jaqpot_api_client.predict_sync(model_id=1886, dataset=input_data)
print(prediction)
```

In this case, the program will wait until predict_sync returns the prediction results, which are then printed.

## Asynchronous prediction

To take an asynchronous prediction with a model, you can use the `predict_async` method. In asynchronous prediction, the http call doesn’t wait for the prediction to finish, allowing it to continue running other tasks. This is useful for longer predictions or when handling multiple requests. Use the predict_async method as follows:

```python
input_data = [{"SMILES": "CC", "X1": 1, "X2": 2, "Cat_col": "CAT_1"}]
prediction_dataset_id = jaqpot_api_client.predict_async(model_id=1886, dataset=input_data)
```

## Get a dataset by ID

To retrieve a dataset by its ID, you can use the `get_dataset_by_id` method. Here is an example:

```python
results = jaqpot_api_client.get_dataset_by_id(dataset_id=prediction_dataset_id)
print(results)
```

## Prediction with a model and a CSV File

To take a prediction with a model using a CSV file, you can use the `predict_with_csv_sync` method. Here is an example:

```python
csv_path = "ADD_A_CSV_PATH.csv"
prediction = jaqpot_api_client.predict_with_csv_sync(model_id=1886, csv_path=csv_path)
print(prediction)
```

## Offline Model Usage

:::info SDK vs Jaqpotpy
The **Jaqpot Python SDK** is designed for **online API access** only - it handles authentication, model retrieval, and online predictions through the Jaqpot API.

For **offline model usage** (downloading models for local predictions), you need **jaqpotpy**. However, be aware that jaqpotpy comes with heavy dependencies (torch, sklearn, rdkit, etc.) that may cause conflicts with your existing environment.
:::

### Using Jaqpotpy for Offline Predictions

If you need to download models and run predictions offline, install jaqpotpy:

```bash
pip install jaqpotpy
```

:::warning Dependency Conflicts
Jaqpotpy includes heavy machine learning dependencies (PyTorch, scikit-learn, RDKit, etc.). We recommend using a virtual environment or conda environment to avoid conflicts:

```bash
# Create a new conda environment
conda create -n jaqpot python=3.9
conda activate jaqpot
pip install jaqpotpy

# Or use a virtual environment
python -m venv jaqpot_env
source jaqpot_env/bin/activate  # On Windows: jaqpot_env\Scripts\activate
pip install jaqpotpy
```
:::

For detailed offline model usage, see the [Offline Models Guide](../../jaqpotpy/offline-models.md).
