---
sidebar_position: 2
---

# Testing your model

Once you implement your Docker model, it's important to test it locally before deploying it to Jaqpot.

## 1. How Jaqpot will call your model

Jaqpot will send a POST request to the `/infer` endpoint of your container. The request will contain a `PredictionRequest` object (defined in `jaqpot_api_client`). You need to make sure your model returns a valid `PredictionResponse`.

### Sample PredictionRequest Input

Jaqpot will send input like this (note the `jaqpotRowId` field which helps map responses back):

```json
{
  "dataset": {
    "input": [
      {
        "numGenerations": 10,
        "jaqpotRowId": 0
      }
    ]
  },
  "model": {
    "independentFeatures": [{"key": "numGenerations"}],
    "dependentFeatures": [{"key": "prediction"}]
  }
}
```

Your `ModelService.predict` method should return a response like:

```json
{
  "predictions": [
    {
      "prediction": 3.0,
      "jaqpotMetadata": {
        "jaqpotRowId": 0
      }
    }
  ]
}
```

## 2. Running the API

To run the model API locally:

```bash
python main.py
```

- The model will be available at: `http://localhost:8002/infer`
- You can test the API with a POST request (e.g. using Postman or curl).
- You can view the interactive docs at: `http://localhost:8002/docs`

Make sure your `main.py` uses FastAPI and serves the `/infer` route correctly.
