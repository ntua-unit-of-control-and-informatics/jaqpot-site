---
sidebar_position: 4
---

### Upload a Model (Tabular Regression)

```python
from jaqpotpy.models.torch_models.torch_onnx import TorchONNXModel
from jaqpotpy import Jaqpot
from jaqpot_api_client import Feature, FeatureType, ModelTask, ModelVisibility

input_tensor = torch.randn(1, 5)
independent_features = [Feature(key=f"feature_{i}", name=f"Feature {i}", feature_type=FeatureType.FLOAT) for i in range(5)]
dependent_features = [Feature(key="target", name="Target", feature_type=FeatureType.FLOAT)]

jaqpot_model = TorchONNXModel(
    model=model,
    input_example=input_tensor,
    task=ModelTask.REGRESSION,
    independent_features=independent_features,
    dependent_features=dependent_features,
    onnx_preprocessor=None,
)

jaqpot = Jaqpot()
jaqpot.login()

jaqpot_model.deploy_on_jaqpot(
    jaqpot=jaqpot,
    name="PyTorch Regression Model",
    description="A simple neural network for regression with 5 input features",
    visibility=ModelVisibility.PUBLIC,
)
```


