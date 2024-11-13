# jaqpotpy.models.tests package

## Submodules

## jaqpotpy.models.tests.one_hot_tests module

## jaqpotpy.models.tests.test_sklearn module

Tests for sklearn models through the jaqpotpy module.

### *class* jaqpotpy.models.tests.test_sklearn.TestModels(methodName='runTest')

Bases: `TestCase`

TestModels is a unit testing class for validating various machine learning models applied to molecular datasets.
It uses the unittest framework to run tests on classification and regression tasks, evaluating model performance
and ensuring correct implementation.

### Attributes

> smiles (list): A list of SMILES strings representing molecular structures used for testing.
> activity (list): A list of binary classification labels corresponding to the molecules in mols.
> classification_dataset (list): A list of continuous regression targets corresponding to the molecules in mols.
> regression_dataset (list): A list of continuous regression targets corresponding to the molecules in mols.
> X_train, X_test, y_train, y_test  (list): A list of continuous regression targets corresponding to the molecules in mols.
> y_test (list): A list of continuous regression targets corresponding to the molecules in mols.

### Methods

> test_rf_classification(): Tests a RandomForestClassifier on a molecular dataset with
> : Mordred fingerprints for classification.

> test_rf_classification(): Tests a RandomForestRegressor on a molecular dataset with
> : Mordred fingerprints for regression.

> test_predict_proba(): Tests the probability prediction of an SVC model using RDKit descriptors for classification.
> test_eval(): Tests the evaluation of an SVC model using various scoring functions for regression.
> test_ALL_regression_ONNX(): Tests all available regression models in scikit-learn for ONNX compatibility.
> test_ONE_regression_ONNX(): Tests a specific regression model (ARDRegression) for ONNX compatibility.
> test_ALL_classification_ONNX(): Tests all available classification models in scikit-learn for ONNX compatibility.
> test_ONE_classification_ONNX(): Tests a specific classification model (QuadraticDiscriminantAnalysis) for ONNX compatibility.

#### setUp() → None

Hook method for setting up the test fixture before exercising it.

#### test_SklearnModel_classification_no_preprocessing()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint fingerprints for classification.
No preprocessing is applied on the data.

#### test_SklearnModel_classification_x_preprocessing()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for classification.
Preprocessing is applied only on the input features.

#### test_SklearnModel_classification_xy_preprocessing1()

#### test_SklearnModel_classification_xy_preprocessing2()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for classification.

This test is for checking the error handling regarding the transformations of y labels in
classification tasks. Specifically, if any scaling method is selected for y labels, an
error must be raised. This test is different from the previous one, as it checks the case
where both x and y columns are preprocessed.
Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for classification.

This test is for checking the error handling regarding the transformations of y labels in
classification tasks. Specifically, if any scaling method is selected for y labels, an
error must be raised. This test is different from the previous one, as it checks the case
where both x and y columns are preprocessed.

#### test_SklearnModel_classification_y_preprocessing()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for classification.

This test is for checking the error handling regarding the transformations of y labels in
classification tasks. Specifically, if any scaling method is selected for y labels, an
error must be raised.
Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for classification.

This test is for checking the error handling regarding the transformations of y labels in
classification tasks. Specifically, if any scaling method is selected for y labels, an
error must be raised.

#### test_SklearnModel_multi_classification_no_preprocessing()

#### test_SklearnModel_multi_classification_x_preprocessing()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint fingerprints for multi-classification.
Preprocessing is applied only on x features.

#### test_SklearnModel_multi_classification_xy_preprocessing()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for multi-classification.

This test is for checking the error handling regarding the transformations of y labels in
classification tasks. Specifically, if any scaling method is selected for y labels, an
error must be raised. This test is different from the previous one, as it checks the case
where both x and y columns are preprocessed.

#### test_SklearnModel_multi_classification_y_preprocessing()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for multi-classification.

This test is for checking the error handling regarding the transformations of y labels in
classification tasks. Specifically, if any scaling method is selected for y labels, an
error must be raised.

#### test_SklearnModel_multiple_regression_no_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for multiple output regression,
without any preprocessing on data.

#### test_SklearnModel_multiple_regression_x_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for multiple output regression,
with preprocessing only on X data.

#### test_SklearnModel_multiple_regression_xy_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for multiple output regression,
with preprocessing X and Y data.

#### test_SklearnModel_multiple_regression_y_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for multiple output regression,
with preprocessing only on Y data.

#### test_SklearnModel_regression_no_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for regression,
without any preprocessing on data.

#### test_SklearnModel_regression_x_multi_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for regression, with preprocessing
applied only on the input features.

#### test_SklearnModel_regression_x_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for regression, with preprocessing
applied only on the input features.

#### test_SklearnModel_regression_xy_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for regression, with preprocessing
applied on the input and output variables.

#### test_SklearnModel_regression_y_preprocessing()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for regression, with preprocessing
applied only on the output variables.

#### test_binary_categorical_classification_string_labels()

Test RandomForestClassifier on a molecular dataset with TopologicalFingerprint for binary classification with string labels.

#### test_discrepancies_in_probabilities()

#### test_preprocessing_error_handling()

Test RandomForestRegressor on a molecular dataset with TopologicalFingerprint fingerprints for regression, with preprocessing
applied only on the input features.

#### test_randomization_test()

Test randomization test.

#### test_scores_classification()

Test goodness-of-fit scores in the case of classification.

#### test_scores_multi_output_regressions()

Test goodness-of-fit scores in the case of multi-output-regression.

#### test_scores_regression()

Test goodness-of-fit scores in the case of regression

## Module contents
