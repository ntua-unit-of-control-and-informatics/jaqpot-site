# jaqpotpy.descriptors.tests package

## Submodules

## jaqpotpy.descriptors.tests.test_MACCS_key_fingerprints module

### *class* jaqpotpy.descriptors.tests.test_MACCS_key_fingerprints.TestMACCSKeysFingerprint(methodName='runTest')

Bases: `TestCase`

Test MACCSKeysFingerprint.

#### setUp()

Set up tests.

#### test_maccs_keys_fingerprint_dataframe()

Test featurize_dataframe using mols.

#### test_maccs_keys_fingerprint_with_smiles()

Test featurize using SMILES.

## jaqpotpy.descriptors.tests.test_graph_featurizer module

### *class* jaqpotpy.descriptors.tests.test_graph_featurizer.TestSmilesGraphFeaturizer(methodName='runTest')

Bases: `TestCase`

This is testing the main functionalities of the SmilesGraphFeaturizer class focused on node features and adjacency matrix.(ONNX supported)

#### setUp()

Initialize the featurizer with default configuration before each test.

#### test_add_unsupported_atom_feature()

Test adding an unsupported atom feature as key raises ValueError.

#### test_correct_matrix_shapes()

Test the shapes of the node features and adjacency matrix.

#### test_correct_num_node_features()

Test the correct number of node features.

#### test_default_features()

Test that default features are added correctly.

#### test_get_dict_and_load_dict()

Test the get_dict and load_dict methods.

#### test_one_of_k_encoding()

Test the one_of_k_encoding method.

#### test_one_of_k_encoding_unk()

Test the one_of_k_encoding_unk method.

## jaqpotpy.descriptors.tests.test_mordred_descriptors module

### *class* jaqpotpy.descriptors.tests.test_mordred_descriptors.TestMordredDescriptors(methodName='runTest')

Bases: `TestCase`

Test MordredDescriptors.

#### setUp()

Set up tests.

#### test_base_mordred()

Mordredcommunity is used instead of morded cause of numpy errors

#### test_mordred_descriptors()

Test featurize using mols

#### test_mordred_descriptors_dataframe()

Test featurize_dataframe using mols

#### test_mordred_descriptors_with_3D_info()

Test simple descriptors with 3D info

#### test_mordred_descriptors_with_smiles()

Test featurize using Smiles

## jaqpotpy.descriptors.tests.test_rdkit_descriptors module

Test basic molecular features.

### *class* jaqpotpy.descriptors.tests.test_rdkit_descriptors.TestRDKitDescriptors(methodName='runTest')

Bases: `TestCase`

Test RDKitDescriptors.

#### setUp()

Set up tests.

#### test_rdkit_descriptors()

Test simple descriptors.

#### test_rdkit_descriptors_on_smiles()

Test invocation on raw smiles.

#### test_rdkit_descriptors_on_smiles_df()

Test invocation on raw smiles.

#### test_rdkit_descriptors_with_use_fragment()

Test with use_fragment

## jaqpotpy.descriptors.tests.test_topological_fingerprints module

Test topological fingerprints.

### *class* jaqpotpy.descriptors.tests.test_topological_fingerprints.TestCircularFingerprint(methodName='runTest')

Bases: `TestCase`

Tests for CircularFingerprint.

#### setUp()

Set up tests.

#### test_circular_fingerprints()

Test CircularFingerprint.

#### test_circular_fingerprints_with_1024()

Test CircularFingerprint with 1024 size.

#### test_maccs_fingerprints()

## Module contents
