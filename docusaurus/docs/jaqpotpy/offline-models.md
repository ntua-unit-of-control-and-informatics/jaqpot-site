---
sidebar_position: 6
title: Offline Models 🆕
---

# Offline Models 🆕

:::tip New Feature
This is a new feature that allows you to download models from Jaqpot and run predictions locally without an internet connection. Perfect for production environments, data privacy requirements, or when you need faster predictions.
:::

## Overview

The offline models feature allows you to:
- Download trained models from Jaqpot for local use
- Run predictions without internet connectivity
- Keep sensitive data local (never leaves your environment)
- Achieve faster prediction times (no network overhead)
- Work in air-gapped environments

## Installation & Setup

### Install Jaqpotpy

```bash
pip install jaqpotpy
```

:::warning Heavy Dependencies
Jaqpotpy includes machine learning dependencies (PyTorch, scikit-learn, RDKit, etc.) that may conflict with your existing environment. We strongly recommend using a virtual environment:

```bash
# Option 1: Conda environment (recommended)
conda create -n jaqpot python=3.9
conda activate jaqpot
pip install jaqpotpy

# Option 2: Virtual environment
python -m venv jaqpot_env
source jaqpot_env/bin/activate  # On Windows: jaqpot_env\Scripts\activate
pip install jaqpotpy
```
:::

### Authentication

Jaqpotpy now supports API key authentication, making it easier to use without the OAuth flow. You can authenticate in two ways:

#### Method 1: Environment Variables (Recommended)

```python
import os
from jaqpotpy import Jaqpot

# Set environment variables
os.environ["JAQPOT_API_KEY"] = "your_api_key"
os.environ["JAQPOT_API_SECRET"] = "your_api_secret"

# Initialize Jaqpot client (automatically picks up env vars)
jaqpot = Jaqpot()
```

#### Method 2: Direct API Key Authentication

```python
from jaqpotpy import Jaqpot

# Initialize with API keys directly
jaqpot = Jaqpot(
    api_key="your_api_key",
    api_secret="your_api_secret"
)
```

#### Method 3: Using .env file

```python
from jaqpotpy import Jaqpot
from dotenv import load_dotenv

# Load from .env file
load_dotenv()

# Initialize Jaqpot client (picks up from environment)
jaqpot = Jaqpot()
```

:::tip API Key Authentication
With API key authentication, you no longer need to use the `jaqpot.login()` OAuth flow. The client will automatically authenticate using your API keys.
:::

:::info Getting API Keys
To get your API keys:
1. Log in to [app.jaqpot.org](https://app.jaqpot.org)
2. Click on the account icon in the top right corner
3. Select "API keys" from the dropdown menu
4. Generate new keys if needed
:::.

## Basic Usage

### Download a Model

```python
from jaqpotpy import Jaqpot

# Initialize client with API keys
jaqpot = Jaqpot(
    api_key="your_api_key",
    api_secret="your_api_secret"
)

# Download model for offline use
model_id = 1886  # Replace with your model ID
model_data = jaqpot.download_model(model_id)

print(f"Downloaded model: {model_data.model_metadata.name}")
print(f"Model type: {model_data.model_type}")
print(f"Task: {model_data.task}")
```

### Make Offline Predictions

```python
# Prepare your input data
input_data = [
    {"SMILES": "CCO", "descriptor1": 1.5, "descriptor2": 2.3},
    {"SMILES": "CC", "descriptor1": 0.8, "descriptor2": 1.1}
]

# Make predictions locally (no internet required)
predictions = jaqpot.predict_offline(model_data, input_data)

print("Predictions:", predictions.predictions)
if predictions.probabilities:
    print("Probabilities:", predictions.probabilities)
if predictions.doa:
    print("Domain of Applicability:", predictions.doa)
```

## Supported Model Types

The offline prediction system supports the following model types:

| Model Type | Returns | Description |
|------------|---------|-------------|
| **SKLEARN_ONNX** | predictions, probabilities, doa | Scikit-learn models converted to ONNX |
| **TORCH_ONNX** | predictions | PyTorch models converted to ONNX |
| **TORCH_SEQUENCE_ONNX** | predictions | PyTorch sequence models (ONNX) |
| **TORCH_GEOMETRIC_ONNX** | predictions | PyTorch Geometric models (ONNX) |
| **TORCHSCRIPT** | predictions | PyTorch models saved as TorchScript |

## Advanced Examples

### Working with Different Model Types

```python
from jaqpotpy import Jaqpot

# Initialize client
jaqpot = Jaqpot(api_key="your_api_key", api_secret="your_api_secret")

# Example with a scikit-learn model (returns predictions + probabilities + DoA)
sklearn_model = jaqpot.download_model("sklearn_model_id")
result = jaqpot.predict_offline(sklearn_model, input_data)

print("Predictions:", result.predictions)
print("Probabilities:", result.probabilities)  # Available for classification
print("DoA Results:", result.doa)  # Domain of Applicability

# Example with a PyTorch model (returns predictions only)
torch_model = jaqpot.download_model("torch_model_id")
result = jaqpot.predict_offline(torch_model, input_data)

print("Predictions:", result.predictions)
# Note: probabilities and doa are None for PyTorch models
```

### Batch Processing

```python
from jaqpotpy import Jaqpot

# Initialize client
jaqpot = Jaqpot(api_key="your_api_key", api_secret="your_api_secret")

# Process multiple samples efficiently
large_dataset = [
    {"SMILES": f"C{i}", "feature1": i * 0.1, "feature2": i * 0.2}
    for i in range(1000)
]

# All predictions run locally
predictions = jaqpot.predict_offline(model_data, large_dataset)
print(f"Processed {len(predictions.predictions)} samples")
```

### Molecular Data with SMILES

```python
from jaqpotpy import Jaqpot

# Initialize client
jaqpot = Jaqpot(api_key="your_api_key", api_secret="your_api_secret")

# Example with molecular data
molecular_data = [
    {"SMILES": "CCO"},  # Ethanol
    {"SMILES": "CC(=O)O"},  # Acetic acid
    {"SMILES": "c1ccccc1"},  # Benzene
]

# Works with torch geometric models
geometric_model = jaqpot.download_model("geometric_model_id")
results = jaqpot.predict_offline(geometric_model, molecular_data)
```

## Model Data Structure

The `OfflineModelData` object contains:

```python
class OfflineModelData:
    onnx_bytes: bytes           # Raw ONNX model data
    preprocessor: Any           # Preprocessor object
    model_metadata: Any         # Complete model metadata
    
    # Convenient properties
    @property
    def model_type(self) -> str:
        return self.model_metadata.type
    
    @property
    def task(self) -> str:
        return self.model_metadata.task
```

## Error Handling

```python
from jaqpotpy import Jaqpot

try:
    # Initialize client
    jaqpot = Jaqpot(api_key="your_api_key", api_secret="your_api_secret")
    
    # Download model
    model_data = jaqpot.download_model(model_id)
    
    # Make predictions
    predictions = jaqpot.predict_offline(model_data, input_data)
    
except Exception as e:
    print(f"Error: {e}")
    # Handle specific errors (network issues, invalid data, etc.)
```

## Troubleshooting

### Common Issues

**Dependency Conflicts**
```bash
# Create clean environment
conda create -n jaqpot-clean python=3.9
conda activate jaqpot-clean
pip install jaqpotpy
```

**Model Download Fails**
- Check your API credentials
- Verify the model ID exists
- Ensure you have access to the model

**Prediction Errors**
- Verify input data format matches model expectations
- Check for missing features in your input
- Ensure SMILES strings are valid (for molecular models)

**Memory Issues with Large Models**
- Use batch processing for large datasets
- Consider using a machine with more RAM
- Process data in chunks if needed

### Performance Tips

1. **Download once, predict many**: Store `model_data` and reuse it
2. **Batch processing**: Process multiple samples together
3. **Virtual environments**: Avoid dependency conflicts
4. **Local storage**: Consider saving `model_data` for future use

## Migration from Online Predictions

If you're currently using online predictions, here's how to migrate:

```python
from jaqpotpy import Jaqpot

# Initialize client with API keys (new authentication method)
jaqpot = Jaqpot(api_key="your_api_key", api_secret="your_api_secret")

# Before (online predictions - old method with login)
# jaqpot.login()  # No longer needed with API keys!
# prediction = jaqpot.predict(model_id, input_data)

# After (offline predictions - new method)
model_data = jaqpot.download_model(model_id)  # Download once
prediction = jaqpot.predict_offline(model_data, input_data)  # Use many times
```

## Benefits Summary

- **🔒 Data Privacy**: Your data never leaves your environment
- **⚡ Speed**: No network latency, faster predictions
- **🌐 Offline Capability**: Works without internet connection
- **💰 Cost Effective**: No API call costs for predictions
- **🏭 Production Ready**: Suitable for high-throughput scenarios
- **🛡️ Air-gapped**: Works in secure, isolated environments

## Next Steps

- Check out our [examples repository](https://github.com/ntua-unit-of-control-and-informatics/jaqpotpy/tree/main/examples) for more use cases
- Try the [Google Colab examples](https://github.com/ntua-unit-of-control-and-informatics/jaqpot-google-colab-examples) for interactive tutorials
- Join our community for support and discussions
