# ModelApi

All URIs are relative to *https://api.jaqpot.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createModel**](ModelApi.md#createModel) | **POST** /v1/models | Create a new model |
| [**deleteModelById**](ModelApi.md#deleteModelById) | **DELETE** /v1/models/{id} | Delete a Model |
| [**getLegacyModelById**](ModelApi.md#getLegacyModelById) | **GET** /v1/models/legacy/{id} | Get a legacy model |
| [**getModelById**](ModelApi.md#getModelById) | **GET** /v1/models/{id} | Get a Model |
| [**getModels**](ModelApi.md#getModels) | **GET** /v1/user/models | Get paginated models |
| [**getSharedModels**](ModelApi.md#getSharedModels) | **GET** /v1/user/shared-models | Get paginated shared models |
| [**partiallyUpdateModel**](ModelApi.md#partiallyUpdateModel) | **PATCH** /v1/models/{id}/partial | Partially update specific fields of a model |
| [**predictWithModel**](ModelApi.md#predictWithModel) | **POST** /v1/models/{modelId}/predict | Predict with Model |
| [**predictWithModelCSV**](ModelApi.md#predictWithModelCSV) | **POST** /v1/models/{modelId}/predict/csv | Predict using CSV with Model |
| [**searchModels**](ModelApi.md#searchModels) | **GET** /v1/models/search | Search for models |


<a name="createModel"></a>
# **createModel**
> createModel(Model)

Create a new model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Model** | [**Model**](../Models/Model.md)|  | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="deleteModelById"></a>
# **deleteModelById**
> deleteModelById(id)

Delete a Model

    Delete a single model by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| The ID of the model to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getLegacyModelById"></a>
# **getLegacyModelById**
> Model getLegacyModelById(id)

Get a legacy model

    Retrieve a single model by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| The ID of the model to retrieve | [default to null] |

### Return type

[**Model**](../Models/Model.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getModelById"></a>
# **getModelById**
> Model getModelById(id)

Get a Model

    Retrieve a single model by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| The ID of the model to retrieve | [default to null] |

### Return type

[**Model**](../Models/Model.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getModels"></a>
# **getModels**
> getModels_200_response getModels(page, size, sort)

Get paginated models

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 10] |
| **sort** | [**List**](../Models/String.md)|  | [optional] [default to null] |

### Return type

[**getModels_200_response**](../Models/getModels_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSharedModels"></a>
# **getSharedModels**
> getModels_200_response getSharedModels(page, size, sort, organizationId)

Get paginated shared models

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 10] |
| **sort** | [**List**](../Models/String.md)|  | [optional] [default to null] |
| **organizationId** | **Long**|  | [optional] [default to null] |

### Return type

[**getModels_200_response**](../Models/getModels_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="partiallyUpdateModel"></a>
# **partiallyUpdateModel**
> Model partiallyUpdateModel(id, partiallyUpdateModel\_request)

Partially update specific fields of a model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**|  | [default to null] |
| **partiallyUpdateModel\_request** | [**partiallyUpdateModel_request**](../Models/partiallyUpdateModel_request.md)|  | |

### Return type

[**Model**](../Models/Model.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="predictWithModel"></a>
# **predictWithModel**
> predictWithModel(modelId, Dataset)

Predict with Model

    Submit a dataset for prediction using a specific model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **modelId** | **Long**| The ID of the model to use for prediction | [default to null] |
| **Dataset** | [**Dataset**](../Models/Dataset.md)|  | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="predictWithModelCSV"></a>
# **predictWithModelCSV**
> predictWithModelCSV(modelId, DatasetCSV)

Predict using CSV with Model

    Submit a dataset for prediction using a specific model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **modelId** | **Long**| The ID of the model to use for prediction | [default to null] |
| **DatasetCSV** | [**DatasetCSV**](../Models/DatasetCSV.md)|  | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="searchModels"></a>
# **searchModels**
> getModels_200_response searchModels(query, page, size)

Search for models

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **query** | **String**|  | [default to null] |
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 10] |

### Return type

[**getModels_200_response**](../Models/getModels_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

