---
sidebar_position: 5
---

### Upload a Model (Image Input with Preprocessing)

```python
import torch
from jaqpot_api_client import Feature, FeatureType, ModelTask, ModelVisibility
from jaqpotpy.models.torch_models.torch_onnx import TorchONNXModel
from examples.pytorch.preprocessors.my_image_preprocessor import MyImagePreprocessor
from jaqpotpy import Jaqpot

class MyModel(torch.nn.Module):
    def __init__(self):
        super(MyModel, self).__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, 5)

    def forward(self, x):
        return torch.sigmoid(self.conv1(x))

input_tensor = torch.rand((1, 3, 128, 128), dtype=torch.float32)
model = MyModel()

preprocessor = MyImagePreprocessor()
onnx_preprocessor = preprocessor.export_to_onnx()

independent_features = [Feature(key="input", name="Input", feature_type=FeatureType.IMAGE)]
dependent_features = [Feature(key="image", name="Image", feature_type=FeatureType.IMAGE)]

jaqpot_model = TorchONNXModel(
    model=model,
    input_example=input_tensor,
    task=ModelTask.REGRESSION,
    independent_features=independent_features,
    dependent_features=dependent_features,
    onnx_preprocessor=onnx_preprocessor,
)

jaqpot = Jaqpot()
jaqpot.login()

jaqpot_model.deploy_on_jaqpot(
    jaqpot,
    name="Torch ONNX Model v12",
    description="Torch description",
    visibility=ModelVisibility.PUBLIC,
)
```

