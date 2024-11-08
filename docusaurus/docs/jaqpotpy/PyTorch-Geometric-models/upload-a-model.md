---
sidebar_position: 3
---

# Upload a Model

## Import Required Libraries

```python
import torch
from torch_geometric.loader import DataLoader
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
from jaqpotpy.datasets import SmilesGraphDataset
from jaqpotpy.models.torch_geometric_models.graph_neural_network import GraphSageNetwork, pyg_to_onnx
from jaqpotpy.models.trainers.graph_trainers import BinaryGraphModelTrainer 
```

## Convert PyTorch Geometric Model to ONNX
Jaqpot requires models to be in the ONNX format for deployment. We use the pyg_to_onnx() utility to convert our trained model. This function also requires the configured featurizer used for modelling.

```python
onnx_model = pyg_to_onnx(model, featurizer)
```

## Initialize Jaqpot Instance and Login
Before deploying the model, you need to create an instance of Jaqpot and log in.

```python
jaqpot = Jaqpot()
jaqpot.login()
```

## Deploy the Model on Jaqpot
The converted ONNX model can now be deployed on Jaqpot using the `deploy_torch_model()` method.

```python
jaqpot.deploy_torch_model(
    onnx_model,
    featurizer=featurizer,  # Featurizer used for the model
    name="Graph Sage Network",
    description="Graph Sage Network for regression",
    target_name="ACTIVITY",
    visibility="PRIVATE",
    task="binary_classification",  # Specify the task (regression or binary_classification)
)
```


