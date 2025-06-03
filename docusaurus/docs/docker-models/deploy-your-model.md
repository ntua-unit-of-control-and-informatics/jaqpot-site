---
sidebar_position: 3
---

# Deploying your model

After implementing and testing your model locally, you're ready to deploy it on Jaqpot.

## Option 1: Use jaqpotpy

The easiest way to deploy your Docker model is with the Python SDK:

```python
from jaqpot_api_client import Feature, DockerConfig, ModelVisibility, FeatureType
from jaqpotpy.models.docker_model import DockerModel
from jaqpotpy import Jaqpot

independent_features = [
    Feature(key="numGenerations", name="numGenerations", feature_type=FeatureType.FLOAT).to_dict(),
]

dependent_features = [
    Feature(key="prediction", name="Prediction", feature_type=FeatureType.FLOAT).to_dict(),
    Feature(key="smiles", name="SMILES", feature_type=FeatureType.STRING).to_dict(),
]

docker_config = DockerConfig(
    app_name="gflownet", 
    docker_image="upcintua/jaqpot-gflownet"
)

jaqpot_model = DockerModel(
    independent_features=independent_features,
    dependent_features=dependent_features,
    docker_config=docker_config,
)

jaqpot = Jaqpot()
jaqpot.login()

jaqpot_model.deploy_on_jaqpot(
    jaqpot=jaqpot,
    name="Gflownet model",
    description="This is my first attempt to train and upload a Jaqpot model.",
    visibility=ModelVisibility.PRIVATE,
)
```

## Option 2: Send a JSON request manually

You can also deploy your model manually by sending a POST request to `/v1/models`. Below is an example JSON configuration:

```jsonc
{
  "name": "Gflownet model",
  "type": "DOCKER",
  "description": "This is my first attempt to train and upload a Jaqpot model.",
  "independentFeatures": [
    {
      "key": "numGenerations",
      "name": "numGenerations",
      "featureType": "FLOAT",
      "featureDependency": "INDEPENDENT"
    }
  ],
  "dependentFeatures": [
    {
      "key": "prediction",
      "name": "Prediction",
      "featureType": "FLOAT",
      "featureDependency": "DEPENDENT"
    },
    {
      "key": "smiles",
      "name": "SMILES",
      "featureType": "STRING",
      "featureDependency": "DEPENDENT"
    }
  ],
  "task": "REGRESSION",
  "visibility": "PRIVATE",
  "dockerConfig": {
    "appName": "gflownet",
    "dockerImage": "upcintua/jaqpot-gflownet"
  }
}
```

### Notes

- The `independentFeatures` and `dependentFeatures` must match what your model expects.
- Each prediction in your `PredictionResponse` should be a flat object. For example:
  ```json
  {
    "predictions": [
      {"y": 3, "confidence": 0.98}
    ]
  }
  ```

Once deployed, your model is available through the Jaqpot prediction endpoint.
