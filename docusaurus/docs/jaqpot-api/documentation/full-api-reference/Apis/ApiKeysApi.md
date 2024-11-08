# ApiKeysApi

All URIs are relative to *https://api.jaqpot.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createApiKey**](ApiKeysApi.md#createApiKey) | **POST** /v1/user/api-keys | Create an API Key for the User |
| [**deleteApiKey**](ApiKeysApi.md#deleteApiKey) | **DELETE** /v1/user/api-keys/{key} | Delete an API Key |
| [**getAllApiKeysForUser**](ApiKeysApi.md#getAllApiKeysForUser) | **GET** /v1/user/api-keys | Get All API Keys for the User |
| [**updateApiKey**](ApiKeysApi.md#updateApiKey) | **PATCH** /v1/user/api-keys/{key} | Update API Key |


<a name="createApiKey"></a>
# **createApiKey**
> createApiKey_201_response createApiKey(ApiKey)

Create an API Key for the User

    Generate and return an API key for programmatic access. This API key is associated with the user and can be used for authenticating future requests.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ApiKey** | [**ApiKey**](../Models/ApiKey.md)| Payload to create a new API key | |

### Return type

[**createApiKey_201_response**](../Models/createApiKey_201_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteApiKey"></a>
# **deleteApiKey**
> deleteApiKey(key)

Delete an API Key

    Delete a specific API key associated with the authenticated user. Only the user or an admin can delete keys.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | **String**| The API key to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getAllApiKeysForUser"></a>
# **getAllApiKeysForUser**
> List getAllApiKeysForUser()

Get All API Keys for the User

    Retrieve all API keys associated with the authenticated user.

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/getAllApiKeysForUser_200_response_inner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateApiKey"></a>
# **updateApiKey**
> updateApiKey_200_response updateApiKey(key, updateApiKey\_request)

Update API Key

    Update an API key&#39;s metadata, such as its note or status (enable/disable).

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | **String**| The API key to update | [default to null] |
| **updateApiKey\_request** | [**updateApiKey_request**](../Models/updateApiKey_request.md)| Payload to update API key metadata | |

### Return type

[**updateApiKey_200_response**](../Models/updateApiKey_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

