---
sidebar_position: 3
---

# Deployment

This guide explains how to deploy your Docker model to Jaqpot.

## Creating the model configuration

First, you need to register your model with Jaqpot by sending a configuration to the `/v1/models` endpoint:

```json
{
  "name": "Your model name",
  "type": "DOCKER",
  "description": "model description",
  "independentFeatures": [
    {
      "key": "input",
      "name": "Input",
      "featureType": "TEXT"
    }
  ],
  "dependentFeatures": [
    {
      "key": "output",
      "name": "Output",
      "featureType": "TEXT"
    }
  ],
  "task": "BINARY_CLASSIFICATION",
  "visibility": "PUBLIC",
  "dockerConfig": {
    "appName": "your-app-name" 
  }
}
```

The `appName` in the configuration is a unique identifier for your model in the Jaqpot system.

## Deploying your Docker image

After registering your model configuration:

1. Build your Docker image using the provided Dockerfile
2. Push the image to a Docker registry
3. Share your Docker image name with us
4. We will host your image and connect it to Jaqpot using your specified `appName`

Once deployed, your model will be available through the standard Jaqpot prediction endpoints.
