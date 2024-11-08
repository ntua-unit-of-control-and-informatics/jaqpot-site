# OrganizationInvitationApi

All URIs are relative to *https://api.jaqpot.org*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInvitations**](OrganizationInvitationApi.md#createInvitations) | **POST** /v1/organizations/{orgName}/invitations | Create new invitations for an organization |
| [**getAllInvitations**](OrganizationInvitationApi.md#getAllInvitations) | **GET** /v1/organizations/{orgName}/invitations | Get all invitations for an organization |
| [**getInvitation**](OrganizationInvitationApi.md#getInvitation) | **GET** /v1/organizations/{name}/invitations/{uuid} | Get the status of an invitation |
| [**resendInvitation**](OrganizationInvitationApi.md#resendInvitation) | **POST** /v1/organizations/{orgId}/invitations/{id}/resend | Resend an invitation email |
| [**updateInvitation**](OrganizationInvitationApi.md#updateInvitation) | **PUT** /v1/organizations/{name}/invitations/{uuid} | Update the status of an invitation |


<a name="createInvitations"></a>
# **createInvitations**
> createInvitations(orgName, createInvitations\_request)

Create new invitations for an organization

    This endpoint allows an organization admin to create new invitations for users.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgName** | **String**| Name of the organization | [default to null] |
| **createInvitations\_request** | [**createInvitations_request**](../Models/createInvitations_request.md)| Invitation request payload | |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="getAllInvitations"></a>
# **getAllInvitations**
> List getAllInvitations(orgName)

Get all invitations for an organization

    This endpoint allows an organization admin to get all invitations for their organization.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgName** | **String**| Name of the organization | [default to null] |

### Return type

[**List**](../Models/OrganizationInvitation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getInvitation"></a>
# **getInvitation**
> OrganizationInvitation getInvitation(name, uuid)

Get the status of an invitation

    This endpoint allows a user to check the status of an invitation.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| Name of the organization | [default to null] |
| **uuid** | **UUID**| UUID of the invitation | [default to null] |

### Return type

[**OrganizationInvitation**](../Models/OrganizationInvitation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="resendInvitation"></a>
# **resendInvitation**
> resendInvitation(orgId, id)

Resend an invitation email

    This endpoint allows an organization admin to resend an invitation email if it has not expired. Only organization admins can access this endpoint.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | **Long**| ID of the organization | [default to null] |
| **id** | **String**| ID of the invitation | [default to null] |

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateInvitation"></a>
# **updateInvitation**
> OrganizationInvitation updateInvitation(name, uuid, OrganizationInvitation)

Update the status of an invitation

    This endpoint allows a user to update the status of an invitation.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| Name of the organization | [default to null] |
| **uuid** | **UUID**| UUID of the invitation | [default to null] |
| **OrganizationInvitation** | [**OrganizationInvitation**](../Models/OrganizationInvitation.md)| Invitation status update payload | |

### Return type

[**OrganizationInvitation**](../Models/OrganizationInvitation.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

