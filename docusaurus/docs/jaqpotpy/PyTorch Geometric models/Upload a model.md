Finally you can upload a the trained model on jaqpot platform. Currently, PyTorch Geometric objects are converted to onnx format to run independent of current version. This means that Graph Convolution and Graph Sage Network are the only two supported architectures.

```python
# Convert the pytorch model to onnx model
onnx_model = pyg_to_onnx(model, featurizer)
# Log into jaqpot platform
jaqpot = Jaqpot()
jaqpot.login()
# Deploy on the platform
jaqpot.deploy_torch_model(
    onnx_model,
    featurizer=featurizer,
    name="Graph Convolution Model",
    description="Predicting a target",
    target_name="target_name",
    visibility="PRIVATE",
    task="binary_classification",
)
```