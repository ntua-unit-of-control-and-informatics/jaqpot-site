# FeatureApi

All URIs are relative to *https://api.jaqpot.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**partiallyUpdateModelFeature**](FeatureApi.md#partiallyUpdateModelFeature) | **PATCH** /v1/models/{modelId}/features/{featureId} | Update a feature for a specific model |


<a name="partiallyUpdateModelFeature"></a>
# **partiallyUpdateModelFeature**
> Feature partiallyUpdateModelFeature(modelId, featureId, partiallyUpdateModelFeature\_request)

Update a feature for a specific model

    Update the name, description, and feature type of an existing feature within a specific model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **modelId** | **Long**| The ID of the model containing the feature | [default to null] |
| **featureId** | **Long**| The ID of the feature to update | [default to null] |
| **partiallyUpdateModelFeature\_request** | [**partiallyUpdateModelFeature_request**](../Models/partiallyUpdateModelFeature_request.md)|  | |

### Return type

[**Feature**](../Models/Feature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

