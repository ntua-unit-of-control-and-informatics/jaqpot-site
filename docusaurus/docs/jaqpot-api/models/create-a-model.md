---
sidebar_position: 1
---

# Create a New Model

This endpoint allows you to create a new model on the Jaqpot platform. A valid bearer token is required for authentication.

## Endpoint

`POST /v1/models`

## Summary

This endpoint creates a new machine learning model.

## Security

- **bearerAuth**: An OAuth 2.0 token must be included in the `Authorization` header of the request.

## Request Body

The request must include a JSON object representing the model.


