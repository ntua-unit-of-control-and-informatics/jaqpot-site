---
sidebar_position: 2
---

# Implementing your model

This guide explains how to implement your custom model for Jaqpot using Docker.

## Getting started

First, fork our template
repository: https://github.com/ntua-unit-of-control-and-informatics/jaqpot-model-with-docker-template

The template includes:

- A training script (`train.py`)
- The model service implementation (`src/model.py`)
- Prediction request/response models
- A Dockerfile for deployment

## Training your model

The `train.py` file is where you implement your model's training logic:

```python
# train.py
import pandas as pd
from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
import joblib

# Generate sample data
X, y = make_classification(n_samples=1000, n_features=4, n_informative=2, n_redundant=0)

df = pd.DataFrame(X, columns=["X1", "X2", "X3", "X4"])

# Train a sample model
model = RandomForestClassifier(n_estimators=100)
model.fit(df, y)

# Save the model
joblib.dump(model, 'model.pkl')
```

This creates a `model.pkl` file that will be loaded by your model service. You can skip the `train.py` file entirely and
provide your own `model.pkl` file if you prefer to train your model elsewhere (like on a GPU-enabled notebook or your
own training pipeline). Just make sure your model is saved as `model.pkl` in the project root.

## Implementing the model service

The core of your implementation is the `ModelService` class in `src/model.py`. This class handles loading your model and
processing predictions:

```python
from typing import Any
import joblib
import pandas as pd
from jaqpot_api_client.models.prediction_request import PredictionRequest
from jaqpot_api_client.models.prediction_response import PredictionResponse


class ModelService:
    def __init__(self):
        self.model = joblib.load('model.pkl')

    def predict(self, request: PredictionRequest) -> PredictionResponse:
        # Convert input to DataFrame
        input_data = pd.DataFrame(request.dataset.input)

        # Get feature columns
        feature_cols = [col for col in input_data.columns if col != 'jaqpotRowId']

        # Make predictions
        predictions = self.model.predict(input_data[feature_cols])
        probabilities = self.model.predict_proba(input_data[feature_cols])

        # Get dependent feature keys
        dependent_feature_keys = [feature.key for feature in request.model.dependent_features]

        # Create prediction results
        prediction_results = []
        for i in range(len(input_data)):
            prediction_dict = {
                feature_key: value
                for feature_key, value in zip(dependent_feature_keys, predictions[i].ravel().tolist())
            }

            prediction_dict["jaqpotMetadata"] = {
                "probabilities": probabilities[i].tolist(),
                "jaqpotRowId": input_data['jaqpotRowId'].iloc[i]
            }

            prediction_results.append(prediction_dict)

        return PredictionResponse(predictions=prediction_results)
```

## Testing locally

1. Train your model:

```bash
python train.py
```

2. Run the FastAPI server:

```bash
python main.py
```

Your model is now ready for Docker deployment on Jaqpot.
