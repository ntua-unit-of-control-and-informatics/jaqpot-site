# jaqpotpy.datasets.tests package

## Submodules

## jaqpotpy.datasets.tests.test_JaqpotpyDataset module

Tests for jaqpotpy Datasets.

### *class* jaqpotpy.datasets.tests.test_JaqpotpyDataset.TestDatasets(methodName='runTest')

Bases: `TestCase`

TestDatasets is a unit testing class for validating jaqpotpy datasets.
It uses the unittest framework to run tests on different types of datasets.

### Attributes

> smiles (list): A list of SMILES strings representing molecular structures used for testing.
> activity (list): A list of binary binary_classification labels corresponding to the molecules in mols.
> binary_classification_dataset (list): A list of continuous regression targets corresponding to the molecules in mols.
> regression_dataset (list): A list of continuous regression targets corresponding to the molecules in mols.

### Methods

#### setUp() → None

Hook method for setting up the test fixture before exercising it.

#### test_dataset_no_x_no_smiles_empty_list()

#### test_dataset_no_x_no_smiles_none()

#### test_dataset_only_smiles()

#### test_dataset_smiles_no_featurizer()

#### test_dataset_smiles_no_task()

#### test_dataset_smiles_wrong_task()

#### test_dataset_with_df_single_smiles_and_external()

#### test_dataset_with_multiple_descriptors()

#### test_dataset_with_only_external()

#### test_dataset_with_path_single_smiles_and_external()

#### test_invalid_smiles_cols()

#### test_invalid_x_cols()

#### test_invalid_y_cols()

#### test_no_path_no_df()

#### test_overlap_smiles_x()

#### test_overlap_smiles_y()

#### test_overlap_x_y()

#### test_path_and_df()

#### test_select_features_with_both_arguments()

#### test_select_features_with_feature_selector()

#### test_select_features_with_neither_argument()

#### test_select_features_with_selection_list()

## Module contents
