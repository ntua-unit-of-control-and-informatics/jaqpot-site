---
title: QSAR Toolbox Python SDK
sidebar_position: 3
---

The Jaqpot Python SDK provides seamless access to QSAR Toolbox, a comprehensive software application designed for filling data gaps in toxicity data. Through the SDK, users can interact with three main components of QSAR Toolbox:

1. Calculators: Tools that compute various molecular descriptors and properties
2. Models: QSAR predictive models for different endpoints
3. Profilers: Components that analyze chemical structures and identify structural features

This integration allows users to programmatically access QSAR Toolbox functionalities, perform calculations, make predictions, and analyze chemical structures directly from their Python environment. All components are accessible through simple API calls, requiring only SMILES notation as input for predictions.

## Initializing the Client

After setting up your environment variables, initialize the Jaqpot client:

```python
from jaqpot_python_sdk.jaqpot_api_client import JaqpotApiClient

jaqpot_api_client = JaqpotApiClient()
```

## QSAR Toolbox

To retrieve a component (model, profiler or calculator) of QSAR Toolbox, you can retrieve a model by its ID using the `get_model_by_id` method. Here is an example:

```python
# To get all calculators of QSAR Toolbox:
calculators = jaqpot_api_client.get_model_by_id(model_id=6)

# To get all models of QSAR Toolbox:
models = jaqpot_api_client.get_model_by_id(model_id=1837)

# To get all profilers of QSAR Toolbox
profilers = jaqpot_api_client.get_model_by_id(model_id=1842)

```

### QSAR Toolbox Calculator

To take a prediction with any QSAR Toolbox calculator, you can use the `qsartoolbox_calculator_predict_sync` method. Here is an example:

```python
prediction = jaqpot_api_client.qsartoolbox_calculator_predict_sync(
    smiles="CCCCC(CC)COC(=O)C(=C(C1=CC=CC=C1)C2=CC=CC=C2)C#N",
    calculator_guid="1804a854-9041-4495-9931-7414c22a5e49"
)
print(prediction)
```

### QSAR Toolbox Model

To take a prediction with any QSAR Toolbox model, you can use the `qsartoolbox_qsar_model_predict_sync` method as:

```python
prediction = jaqpot_api_client.qsartoolbox_qsar_model_predict_sync(
    smiles="CCCCC(CC)COC(=O)C(=C(C1=CC=CC=C1)C2=CC=CC=C2)C#N",
    qsar_guid="c377150b-77ae-4f99-be14-357b85dd8d1f",
)
print(prediction)
```

### QSAR Toolbox Profiler

To take a prediction with any QSAR Toolbox profiler, you can use the `qsartoolbox_profiler_predict_sync` method. Here is an example:

```python
prediction = jaqpot_api_client.qsartoolbox_profiler_predict_sync(
    smiles="CCCCC(CC)COC(=O)C(=C(C1=CC=CC=C1)C2=CC=CC=C2)C#N",
    profiler_guid="723eb011-3e5b-4565-9358-4c3d8620ba5d"
)
print(prediction)
```
