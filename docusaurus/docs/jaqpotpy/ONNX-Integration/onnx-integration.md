# ONNX Integration in Jaqpotpy

Jaqpotpy is a Python library designed to streamline the training and deployment of machine learning models, particularly those created with `scikit-learn` and `torch`. A core feature of Jaqpotpy is its automatic conversion of trained models into the ONNX (Open Neural Network Exchange) format, an open-source standard that provides a consistent and interoperable way to represent machine learning models. Jaqpotpy converts the models directly after the training is completed. Therefore, the user can either use the SKLearn model or the ONNX instance to take predictions locally. However, the ONNX instance of the models are uploaded on Jaqpot.

By converting models to ONNX, Jaqpotpy ensures that models maintain backwards compatibility, independent of updates to `torch` and `scikit-learn`. This stability allows models to remain functional even through major library changes, eliminating the need for retraining or manual adjustments after updates. Furthermore, ONNX models are optimized for cross-platform deployment, making it straightforward to deploy the same model across diverse environments.

Although ONNX is rapidly evolving and already supports most `scikit-learn` objects, there are still some that have not been implemented. For the latest information on supported `scikit-learn` models and classes, refer to the official [ONNX-Sklearn compatibility list](https://onnx.ai/sklearn-onnx/supported.html).





