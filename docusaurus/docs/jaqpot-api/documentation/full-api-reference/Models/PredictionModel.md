# PredictionModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Long** | Unique identifier for the prediction model | [optional] [default to null] |
| **dependentFeatures** | [**List**](Feature.md) | List of dependent features for the model | [default to null] |
| **independentFeatures** | [**List**](Feature.md) | List of independent features for the model | [default to null] |
| **type** | [**ModelType**](ModelType.md) |  | [default to null] |
| **rawModel** | **String** | Raw model data in serialized format | [default to null] |
| **rawPreprocessor** | **String** | Raw preprocessor data in serialized format | [optional] [default to null] |
| **doas** | [**List**](PredictionDoa.md) | List of Domain of Applicability (DoA) configurations | [optional] [default to null] |
| **selectedFeatures** | **List** | List of feature names selected for the model | [optional] [default to null] |
| **task** | [**ModelTask**](ModelTask.md) |  | [default to null] |
| **featurizers** | [**List**](Transformer.md) | List of featurizer configurations applied to the model | [optional] [default to null] |
| **preprocessors** | [**List**](Transformer.md) | List of preprocessor configurations applied to the model | [optional] [default to null] |
| **torchConfig** | [**Map**](AnyType.md) | Torch configuration settings, optional | [optional] [default to null] |
| **legacyAdditionalInfo** | [**Map**](AnyType.md) | Legacy additional information settings, optional | [optional] [default to null] |
| **legacyPredictionService** | **String** | Legacy prediction service information, if available | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

