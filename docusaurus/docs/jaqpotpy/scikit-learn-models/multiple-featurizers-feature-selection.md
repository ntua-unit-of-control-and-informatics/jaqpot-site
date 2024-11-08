## Using Multiple Featurizers

In the first script, we initialize two molecular descriptor calculators from JaqpotPy:

```python
from jaqpotpy.descriptors import RDKitDescriptors, MACCSKeysFingerprint

featurizers = [RDKitDescriptors(), MACCSKeysFingerprint()]
```

We then pass this list of featurizers to the `JaqpotpyDataset` object when creating the training dataset:

```python
train_dataset = JaqpotpyDataset(
    df=data,
    x_cols=["cat_col", "temperature"],
    y_cols=["activity"],
    smiles_cols=["smiles"],
    task="regression",
    featurizer=featurizers,
)
```

By providing a list of featurizers, the dataset will generate both RDKit descriptors and MACCS keys fingerprints for the SMILES data, resulting in a more comprehensive set of molecular features.

## Feature Selection

In the second script, we demonstrate the use of feature selection. After creating the `JaqpotpyDataset` object, we apply a feature selection technique using the `select_features()` method:

```python
# Use VarianceThreshold to select features with a minimum variance of 0.1
FeatureSelector = VarianceThreshold(threshold=0.1)
train_dataset.select_features(
    FeatureSelector,
    ExcludeColumns=["cat_col"],  # Explicitly exclude the categorical variable
)
```

This will apply the VarianceThreshold feature selector to the dataset, excluding the "cat_col" variable, which is a categorical feature that cannot be included in the selection process.

Alternatively, you can directly select specific columns by name using the `SelectColumns` argument:

```python
myList = [
    "temperature",
    "MaxAbsEStateIndex",
    "MaxEStateIndex",
    "MinAbsEStateIndex",
    "MinEStateIndex",
    "SPS",
    "MolWt",
    "HeavyAtomMolWt",
]
train_dataset.select_features(SelectColumns=myList)
```

This method allows you to manually choose the features you want to include in the model, which can be useful if you have domain knowledge about the most relevant variables.

## Feature Preprocessing

In the first script, we define a preprocessing pipeline for the feature columns and the target column:

```python
# Preprocessing for the feature columns
double_preprocessing = [
    ColumnTransformer(
        transformers=[
            ("OneHotEncoder", OneHotEncoder(), ["cat_col"]),
        ],
        remainder="passthrough",
        force_int_remainder_cols=False,
    ),
    StandardScaler(),  # Standard scaling for numerical features after encoding
]

# Preprocessing for the target column
single_preprocessing = MinMaxScaler()
```

The `double_preprocessing` pipeline first applies OneHotEncoder to the categorical "cat_col" feature, then applies StandardScaler to the numerical features (including the encoded categorical variable).

The `single_preprocessing` pipeline applies MinMaxScaler to the target variable "activity".

We then pass these preprocessing pipelines to the `SklearnModel` object:

```python
jaqpot_model = SklearnModel(
    dataset=train_dataset,
    model=model,
    preprocess_x=double_preprocessing,
    preprocess_y=single_preprocessing,
)
```

This ensures that the feature and target variables are properly preprocessed before being used to train the machine learning model.

By using multiple featurizers, feature selection, and feature preprocessing, you can create more robust and effective machine learning models with JaqpotPy.

