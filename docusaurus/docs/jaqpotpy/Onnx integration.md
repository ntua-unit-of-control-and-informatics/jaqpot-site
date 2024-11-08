---
sidebar_position: 1
---

# ONNX Integration

In this section, we explain Jaqpot's use of ONNX to ensure compatibility across various machine learning models and highlight the benefits and limitations of this integration.

## Overview

Jaqpot uses **[ONNX](https://onnx.ai/) (Open Neural Network Exchange)** as a standardized format to allow models from different machine learning libraries to be compatible with our platform. This format helps bridge the compatibility gap, especially for Scikit-Learn and PyTorch models, enabling seamless model deployment through Jaqpot’s API.

## Supported Libraries

Currently, Jaqpot fully supports the conversion and deployment of:
- **Scikit-learn Models**: These models work directly and reliably with ONNX, making Scikit-Learn a primary library for Jaqpot.
- **PyTorch Geometric Models**: Support for Torch models is being developed, and users can start to experiment with some PyTorch models using ONNX.

ONNX allows users to convert models into a single, standardized format, providing cross-platform compatibility and a smoother integration experience.

## Pros and Cons

### Pros
- **Compatibility across libraries**: ONNX allows Jaqpot to handle multiple model types by standardizing them into one format.
- **Ease of use**: Once a model is converted to ONNX, users experience minimal hassle, as ONNX abstracts many library-specific differences.
- **Scikit-Learn as first-class citizen**: Jaqpot fully supports Scikit-Learn models with ONNX, making it the preferred library for seamless integration.

### Cons
- **Dependency on ONNX features**: Jaqpot’s capabilities are limited to the functions ONNX currently supports. If ONNX doesn’t support a specific function from a library, Jaqpot may not be able to support it either.
- **Ongoing support for Torch Models**: Jaqpot’s compatibility with PyTorch Geometric models is a work in progress, and some advanced Torch features may not yet be supported.

## Future directions

Jaqpot aims to enhance ONNX integration further, focusing on extending support for PyTorch and exploring compatibility with other machine learning frameworks as ONNX evolves. Future updates will address additional Torch functionalities and possibly other libraries that can be adapted into Jaqpot’s API.

## Limitations and alternatives

- **Limitations**: ONNX does not support every function across all libraries, so certain advanced or custom model components may not yet be compatible.
- **Alternatives**: If ONNX does not support a specific feature you need, consider adjusting the model or checking Jaqpot’s compatibility updates for future support.
