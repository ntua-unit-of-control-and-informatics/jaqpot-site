---
sidebar_position: 2
---

# Implementing your model

This guide explains how to implement your custom model for Jaqpot using Docker.

## Getting started

First, fork our template repository: https://github.com/ntua-unit-of-control-and-informatics/jaqpot-model-with-docker-template

The template includes:
- A training script (`train.py`)
- A FastAPI server implementation (`main.py`)
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

This creates a `model.pkl` file that will be loaded by your prediction service.

## Implementing the prediction endpoint

Your main task is implementing the `/infer` endpoint. Here's a basic example:

```python
from fastapi import FastAPI
import pickle
from app.models import PredictionRequest, PredictionResponse

app = FastAPI()

# Load the trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.post("/infer", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    result = model.predict(request.data)
    return PredictionResponse(status=200, data=result)
```

## Testing locally

1. Train your model:
```bash
python train.py
```

2. Run the FastAPI server:
```bash
uvicorn app.main:app --reload
```

Your model is now ready for Docker deployment on Jaqpot.
