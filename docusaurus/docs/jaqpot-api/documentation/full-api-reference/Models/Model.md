# Model
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Long** |  | [optional] [default to null] |
| **name** | **String** |  | [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **type** | [**ModelType**](ModelType.md) |  | [default to null] |
| **jaqpotpyVersion** | **String** |  | [default to null] |
| **doas** | [**List**](Doa.md) |  | [optional] [default to null] |
| **libraries** | [**List**](Library.md) |  | [default to null] |
| **dependentFeatures** | [**List**](Feature.md) |  | [default to null] |
| **independentFeatures** | [**List**](Feature.md) |  | [default to null] |
| **sharedWithOrganizations** | [**List**](Organization.md) |  | [optional] [default to null] |
| **visibility** | [**ModelVisibility**](ModelVisibility.md) |  | [default to null] |
| **task** | [**ModelTask**](ModelTask.md) |  | [default to null] |
| **torchConfig** | [**Map**](AnyType.md) |  | [optional] [default to null] |
| **preprocessors** | [**List**](Transformer.md) |  | [optional] [default to null] |
| **featurizers** | [**List**](Transformer.md) |  | [optional] [default to null] |
| **rawPreprocessor** | **byte[]** | A base64 representation of the raw preprocessor. | [optional] [default to null] |
| **rawModel** | **byte[]** | A base64 representation of the raw model. | [default to null] |
| **creator** | [**User**](User.md) |  | [optional] [default to null] |
| **canEdit** | **Boolean** | If the current user can edit the model | [optional] [default to null] |
| **isAdmin** | **Boolean** |  | [optional] [default to null] |
| **selectedFeatures** | **List** |  | [optional] [default to null] |
| **tags** | **String** |  | [optional] [default to null] |
| **legacyPredictionService** | **String** |  | [optional] [default to null] |
| **scores** | [**Model_scores**](Model_scores.md) |  | [optional] [default to null] |
| **createdAt** | **Date** | The date and time when the feature was created. | [optional] [default to null] |
| **updatedAt** | **Date** | The date and time when the feature was last updated. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

