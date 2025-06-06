---
sidebar_position: 5
title: Upload an image input model
---

Jaqpot also supports models that take images as input. In this case, we use a convolutional neural network (CNN) with a preprocessing step. The preprocessing step is also converted to ONNX and bundled with the model. This setup is useful for image-based tasks like segmentation or classification.

Learn how to create and deploy an image processing model using PyTorch and custom preprocessing. We'll walk through creating a model that:

* Takes images as input
* Applies custom preprocessing
* Performs image transformations
* Deploys on Jaqpot's platform

## 1. Set up Dependencies

First, let's import the required libraries:

```python
import torch from jaqpot_api_client 
import Feature, FeatureType, ModelTask, ModelVisibility 
from jaqpotpy.models.torch_models.torch_onnx import TorchONNXModel 
from jaqpotpy import Jaqpot

```

## 2. Create Image Preprocessor

Define a custom preprocessor for image transformations:

```python
import io

from torchvision import transforms
import torch


class MyImagePreprocessor:
    def init(self):
        self.transform = transforms.Compose([transforms.Resize((128, 128)), transforms.ToTensor(),
                                             transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                                                  std=[0.229, 0.224, 0.225])])

    def preprocess(self, image):
        return self.transform(image)

    def export_to_onnx(self):
        dummy_input = torch.randint(
            0, 256, (1, 256, 256, 3), dtype=torch.uint8
        )  # any size

        f = io.BytesIO()
        torch.onnx.export(
            self,
            dummy_input,
            f,
            input_names=["image"],
            output_names=["tensor"],
            opset_version=11,
            dynamic_axes={"image": {1: "height", 2: "width", 0: "batch_size"}},
        )

        f.seek(0)
        return f.read()

```

## 3. Define the Model

Set up a PyTorch model for image processing:

```python
class MyModel(torch.nn.Module):

    def init(self):
        super(MyModel, self).init()
        self.features = torch.nn.Sequential(torch.nn.Conv2d(3, 16, kernel_size=3, padding=1), torch.nn.ReLU(),
                                            torch.nn.Conv2d(16, 3, kernel_size=3, padding=1), torch.nn.Sigmoid) )

        def forward(self, x):

            return self.features(x)
```

## 4. Configure and Deploy

Initialize the model, define features, and deploy to Jaqpot:

```python

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

## Key Takeaways

* Use `TorchONNXModel` for deploying image processing models
* Define custom preprocessors for image transformations
* Specify input/output features as image types
* Convert the model to ONNX format for deployment

## Try on Your Own

You can customize this example by:
* Using different image preprocessing techniques
* Modifying the model architecture
* Adjusting input image dimensions
* Adding more complex image transformations

:::note
Input images should be RGB format with dimensions 128x128 pixels.
:::

:::tip
For private models, use `ModelVisibility.PRIVATE` when deploying.
:::
