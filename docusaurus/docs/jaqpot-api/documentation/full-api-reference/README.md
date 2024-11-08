
# Full API reference

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.jaqpot.org*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *ApiKeysApi* | [**createApiKey**](Apis/ApiKeysApi.md#createapikey) | **POST** /v1/user/api-keys | Create an API Key for the User |
*ApiKeysApi* | [**deleteApiKey**](Apis/ApiKeysApi.md#deleteapikey) | **DELETE** /v1/user/api-keys/{id} | Delete an API Key |
*ApiKeysApi* | [**getAllApiKeysForUser**](Apis/ApiKeysApi.md#getallapikeysforuser) | **GET** /v1/user/api-keys | Get All API Keys for the User |
*ApiKeysApi* | [**updateApiKey**](Apis/ApiKeysApi.md#updateapikey) | **PATCH** /v1/user/api-keys/{id} | Update API Key |
| *AuthApi* | [**validateJWT**](Apis/AuthApi.md#validatejwt) | **GET** /v1/auth/validate | Validate JWT |
| *DatasetApi* | [**getDatasetById**](Apis/DatasetApi.md#getdatasetbyid) | **GET** /v1/datasets/{id} | Get a Dataset |
*DatasetApi* | [**getDatasets**](Apis/DatasetApi.md#getdatasets) | **GET** /v1/user/datasets | Get Datasets by User ID |
| *FeatureApi* | [**partiallyUpdateModelFeature**](Apis/FeatureApi.md#partiallyupdatemodelfeature) | **PATCH** /v1/models/{modelId}/features/{featureId} | Update a feature for a specific model |
| *LeadApi* | [**createLead**](Apis/LeadApi.md#createlead) | **POST** /v1/leads | Create a Lead |
*LeadApi* | [**deleteLeadById**](Apis/LeadApi.md#deleteleadbyid) | **DELETE** /v1/leads/{id} | Delete a Lead by ID |
*LeadApi* | [**getAllLeads**](Apis/LeadApi.md#getallleads) | **GET** /v1/leads | Get All Leads |
*LeadApi* | [**getLeadById**](Apis/LeadApi.md#getleadbyid) | **GET** /v1/leads/{id} | Get a Lead by ID |
*LeadApi* | [**updateLeadById**](Apis/LeadApi.md#updateleadbyid) | **PUT** /v1/leads/{id} | Update a Lead by ID |
| *ModelApi* | [**createModel**](Apis/ModelApi.md#createmodel) | **POST** /v1/models | Create a new model |
*ModelApi* | [**deleteModelById**](Apis/ModelApi.md#deletemodelbyid) | **DELETE** /v1/models/{id} | Delete a Model |
*ModelApi* | [**getLegacyModelById**](Apis/ModelApi.md#getlegacymodelbyid) | **GET** /v1/models/legacy/{id} | Get a legacy model |
*ModelApi* | [**getModelById**](Apis/ModelApi.md#getmodelbyid) | **GET** /v1/models/{id} | Get a Model |
*ModelApi* | [**getModels**](Apis/ModelApi.md#getmodels) | **GET** /v1/user/models | Get paginated models |
*ModelApi* | [**getSharedModels**](Apis/ModelApi.md#getsharedmodels) | **GET** /v1/user/shared-models | Get paginated shared models |
*ModelApi* | [**partiallyUpdateModel**](Apis/ModelApi.md#partiallyupdatemodel) | **PATCH** /v1/models/{id}/partial | Partially update specific fields of a model |
*ModelApi* | [**predictWithModel**](Apis/ModelApi.md#predictwithmodel) | **POST** /v1/models/{modelId}/predict | Predict with Model |
*ModelApi* | [**predictWithModelCSV**](Apis/ModelApi.md#predictwithmodelcsv) | **POST** /v1/models/{modelId}/predict/csv | Predict using CSV with Model |
*ModelApi* | [**searchModels**](Apis/ModelApi.md#searchmodels) | **GET** /v1/models/search | Search for models |
| *OrganizationApi* | [**createOrganization**](Apis/OrganizationApi.md#createorganization) | **POST** /v1/organizations | Create a new organization |
*OrganizationApi* | [**getAllOrganizationsByUser**](Apis/OrganizationApi.md#getallorganizationsbyuser) | **GET** /v1/user/organizations | Get all user organizations |
*OrganizationApi* | [**getAllOrganizationsForUser**](Apis/OrganizationApi.md#getallorganizationsforuser) | **GET** /v1/organizations | Get all organizations for a specific user |
*OrganizationApi* | [**getOrganizationByName**](Apis/OrganizationApi.md#getorganizationbyname) | **GET** /v1/organizations/{name} | Get organization by name |
*OrganizationApi* | [**partialUpdateOrganization**](Apis/OrganizationApi.md#partialupdateorganization) | **PATCH** /v1/organizations/{id}/partial | Partially update an existing organization |
| *OrganizationInvitationApi* | [**createInvitations**](Apis/OrganizationInvitationApi.md#createinvitations) | **POST** /v1/organizations/{orgName}/invitations | Create new invitations for an organization |
*OrganizationInvitationApi* | [**getAllInvitations**](Apis/OrganizationInvitationApi.md#getallinvitations) | **GET** /v1/organizations/{orgName}/invitations | Get all invitations for an organization |
*OrganizationInvitationApi* | [**getInvitation**](Apis/OrganizationInvitationApi.md#getinvitation) | **GET** /v1/organizations/{name}/invitations/{uuid} | Get the status of an invitation |
*OrganizationInvitationApi* | [**resendInvitation**](Apis/OrganizationInvitationApi.md#resendinvitation) | **POST** /v1/organizations/{orgId}/invitations/{id}/resend | Resend an invitation email |
*OrganizationInvitationApi* | [**updateInvitation**](Apis/OrganizationInvitationApi.md#updateinvitation) | **PUT** /v1/organizations/{name}/invitations/{uuid} | Update the status of an invitation |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ApiKey](./Models/ApiKey.md)
 - [BinaryClassificationScores](./Models/BinaryClassificationScores.md)
 - [BoundingBoxDoa](./Models/BoundingBoxDoa.md)
 - [CityBlockDoa](./Models/CityBlockDoa.md)
 - [Dataset](./Models/Dataset.md)
 - [DatasetCSV](./Models/DatasetCSV.md)
 - [DatasetType](./Models/DatasetType.md)
 - [Doa](./Models/Doa.md)
 - [DoaMethod](./Models/DoaMethod.md)
 - [ErrorCode](./Models/ErrorCode.md)
 - [ErrorResponse](./Models/ErrorResponse.md)
 - [Feature](./Models/Feature.md)
 - [FeaturePossibleValue](./Models/FeaturePossibleValue.md)
 - [FeatureType](./Models/FeatureType.md)
 - [KernelBasedDoa](./Models/KernelBasedDoa.md)
 - [Lead](./Models/Lead.md)
 - [LeverageDoa](./Models/LeverageDoa.md)
 - [Library](./Models/Library.md)
 - [MahalanobisDoa](./Models/MahalanobisDoa.md)
 - [MeanVarDoa](./Models/MeanVarDoa.md)
 - [Model](./Models/Model.md)
 - [ModelSummary](./Models/ModelSummary.md)
 - [ModelTask](./Models/ModelTask.md)
 - [ModelType](./Models/ModelType.md)
 - [ModelVisibility](./Models/ModelVisibility.md)
 - [Model_scores](./Models/Model_scores.md)
 - [MulticlassClassificationScores](./Models/MulticlassClassificationScores.md)
 - [Organization](./Models/Organization.md)
 - [OrganizationInvitation](./Models/OrganizationInvitation.md)
 - [OrganizationSummary](./Models/OrganizationSummary.md)
 - [OrganizationUser](./Models/OrganizationUser.md)
 - [OrganizationUserAssociationType](./Models/OrganizationUserAssociationType.md)
 - [OrganizationVisibility](./Models/OrganizationVisibility.md)
 - [PredictionDoa](./Models/PredictionDoa.md)
 - [PredictionModel](./Models/PredictionModel.md)
 - [PredictionRequest](./Models/PredictionRequest.md)
 - [PredictionResponse](./Models/PredictionResponse.md)
 - [RegressionScores](./Models/RegressionScores.md)
 - [Scores](./Models/Scores.md)
 - [Transformer](./Models/Transformer.md)
 - [User](./Models/User.md)
 - [createApiKey_201_response](./Models/createApiKey_201_response.md)
 - [createInvitations_request](./Models/createInvitations_request.md)
 - [getAllApiKeysForUser_200_response_inner](./Models/getAllApiKeysForUser_200_response_inner.md)
 - [getDatasets_200_response](./Models/getDatasets_200_response.md)
 - [getModels_200_response](./Models/getModels_200_response.md)
 - [partialUpdateOrganization_request](./Models/partialUpdateOrganization_request.md)
 - [partiallyUpdateModelFeature_request](./Models/partiallyUpdateModelFeature_request.md)
 - [partiallyUpdateModel_request](./Models/partiallyUpdateModel_request.md)
 - [updateApiKey_200_response](./Models/updateApiKey_200_response.md)
 - [updateApiKey_request](./Models/updateApiKey_request.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP Bearer Token authentication (JWT)

