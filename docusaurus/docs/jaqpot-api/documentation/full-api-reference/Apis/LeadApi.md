# LeadApi

All URIs are relative to *https://api.jaqpot.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLead**](LeadApi.md#createLead) | **POST** /v1/leads | Create a Lead |
| [**deleteLeadById**](LeadApi.md#deleteLeadById) | **DELETE** /v1/leads/{id} | Delete a Lead by ID |
| [**getAllLeads**](LeadApi.md#getAllLeads) | **GET** /v1/leads | Get All Leads |
| [**getLeadById**](LeadApi.md#getLeadById) | **GET** /v1/leads/{id} | Get a Lead by ID |
| [**updateLeadById**](LeadApi.md#updateLeadById) | **PUT** /v1/leads/{id} | Update a Lead by ID |


<a name="createLead"></a>
# **createLead**
> createLead()

Create a Lead

    Create a new lead

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="deleteLeadById"></a>
# **deleteLeadById**
> deleteLeadById(id)

Delete a Lead by ID

    Delete a single lead by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| The ID of the lead to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getAllLeads"></a>
# **getAllLeads**
> List getAllLeads()

Get All Leads

    Retrieve all leads

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Lead.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLeadById"></a>
# **getLeadById**
> Lead getLeadById(id)

Get a Lead by ID

    Retrieve a single lead by its ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| The ID of the lead to retrieve | [default to null] |

### Return type

[**Lead**](../Models/Lead.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateLeadById"></a>
# **updateLeadById**
> updateLeadById(id, Lead)

Update a Lead by ID

    Update the details of an existing lead

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| The ID of the lead to update | [default to null] |
| **Lead** | [**Lead**](../Models/Lead.md)|  | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

