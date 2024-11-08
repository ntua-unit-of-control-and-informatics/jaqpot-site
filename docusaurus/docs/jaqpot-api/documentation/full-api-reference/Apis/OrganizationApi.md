# OrganizationApi

All URIs are relative to *https://api.jaqpot.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrganization**](OrganizationApi.md#createOrganization) | **POST** /v1/organizations | Create a new organization |
| [**getAllOrganizationsByUser**](OrganizationApi.md#getAllOrganizationsByUser) | **GET** /v1/user/organizations | Get all user organizations |
| [**getAllOrganizationsForUser**](OrganizationApi.md#getAllOrganizationsForUser) | **GET** /v1/organizations | Get all organizations for a specific user |
| [**getOrganizationByName**](OrganizationApi.md#getOrganizationByName) | **GET** /v1/organizations/{name} | Get organization by name |
| [**partialUpdateOrganization**](OrganizationApi.md#partialUpdateOrganization) | **PATCH** /v1/organizations/{id}/partial | Partially update an existing organization |


<a name="createOrganization"></a>
# **createOrganization**
> createOrganization(Organization)

Create a new organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Organization** | [**Organization**](../Models/Organization.md)|  | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getAllOrganizationsByUser"></a>
# **getAllOrganizationsByUser**
> List getAllOrganizationsByUser()

Get all user organizations

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllOrganizationsForUser"></a>
# **getAllOrganizationsForUser**
> List getAllOrganizationsForUser()

Get all organizations for a specific user

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOrganizationByName"></a>
# **getOrganizationByName**
> Organization getOrganizationByName(name)

Get organization by name

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [default to null] |

### Return type

[**Organization**](../Models/Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="partialUpdateOrganization"></a>
# **partialUpdateOrganization**
> Organization partialUpdateOrganization(id, partialUpdateOrganization\_request)

Partially update an existing organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**|  | [default to null] |
| **partialUpdateOrganization\_request** | [**partialUpdateOrganization_request**](../Models/partialUpdateOrganization_request.md)|  | |

### Return type

[**Organization**](../Models/Organization.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

