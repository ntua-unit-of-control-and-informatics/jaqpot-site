---
sidebar_position: 5
---

# Evaluate a Model

In this example, we will demonstrate how to evaluate the robustness of a model using `jaqpotpy`. We will use a RandomForestRegressor model and perform various evaluations including cross-validation, external evaluation, and a randomization test.

```python
# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from jaqpotpy.models import SklearnModel
from jaqpotpy.datasets import JaqpotTabularDataset
from jaqpotpy.descriptors import RDKitDescriptors
```

We start by creating a sample dataset with molecular structures represented as SMILES strings, along with temperature and activity values.

```python
# Create sample data
data = pd.DataFrame(
    {
        "smiles": ["CC", "CCO", "CCC", "CCCl",
        "CCBr", "COC", "CCOCC", "CCCO",
        "CCCC", "CCCCCC",
    ],

        "temperature": np.random.randint(20, 37, size=10),
        
        "activity": [80, 81, 81, 84, 83.5,
        83, 89, 90, 91, 97,
    ],
    }
)
```

Next, we prepare the dataset for training using `JaqpotTabularDataset` and `RDKitDescriptors` for feature extraction.

```python
featurizer = RDKitDescriptors()

# Prepare the dataset for training with Jaqpotpy
train_dataset = JaqpotTabularDataset(
    df=data,
    x_cols=["temperature"],
    y_cols=["activity"],
    smiles_cols=["smiles"],
    task="regression",
    featurizer=featurizer,
)
```

We then initialize a RandomForestRegressor model and wrap it with `SklearnModel` from `jaqpotpy`. The model is trained on the prepared dataset.

```python
model = RandomForestRegressor(random_state=42)
jaqpot_model = SklearnModel(dataset=train_dataset, model=model)
jaqpot_model.random_seed = 1231
jaqpot_model.fit()
```

To estimate the model's performance, we perform cross-validation on the training data.

```python
# Perform cross-validation on the training data
jaqpot_model.cross_validate(train_dataset, n_splits=10)
```

We define a test dataset for external evaluation and prepare it using `JaqpotTabularDataset`.

```python
# Define test data for external evaluation
X_test = pd.DataFrame(
    {
        "smiles": ["CCCOC", "CO"],
        "temperature": [27.0, 22.0],
        "activity": [89.0, 86.0],
    }
)

# Prepare the test dataset with Jaqpotpy
test_dataset = JaqpotTabularDataset(
    df=X_test,
    smiles_cols="smiles",
    x_cols=["temperature"],
    y_cols=["activity"],
    task="regression",
    featurizer=featurizer,
)
```

We evaluate the model on the test dataset to assess its performance on new/unseen data.

```python
# Evaluate the model on the test dataset
jaqpot_model.evaluate(test_dataset)

predictions = jaqpot_model.predict(test_dataset)
print(predictions)
```

Finally, we conduct a randomization test to assess the model's robustness against randomization of target labels.

```python
# Conducts a randomization test to assess the model's robustness
jaqpot_model.randomization_test(
    train_dataset=train_dataset,
    test_dataset=test_dataset,
    n_iters=10,
)
```
