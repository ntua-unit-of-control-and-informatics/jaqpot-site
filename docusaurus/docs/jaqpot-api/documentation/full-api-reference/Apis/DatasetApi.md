# DatasetApi

All URIs are relative to *https://api.jaqpot.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDatasetById**](DatasetApi.md#getDatasetById) | **GET** /v1/datasets/{id} | Get a Dataset |
| [**getDatasets**](DatasetApi.md#getDatasets) | **GET** /v1/user/datasets | Get Datasets by User ID |


<a name="getDatasetById"></a>
# **getDatasetById**
> Dataset getDatasetById(id)

Get a Dataset

    Retrieve a single dataset by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| The ID of the dataset to retrieve | [default to null] |

### Return type

[**Dataset**](../Models/Dataset.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getDatasets"></a>
# **getDatasets**
> getDatasets_200_response getDatasets(page, size, sort)

Get Datasets by User ID

    Retrieve all datasets associated with a specific user ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**|  | [optional] [default to 0] |
| **size** | **Integer**|  | [optional] [default to 10] |
| **sort** | [**List**](../Models/String.md)|  | [optional] [default to null] |

### Return type

[**getDatasets_200_response**](../Models/getDatasets_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

