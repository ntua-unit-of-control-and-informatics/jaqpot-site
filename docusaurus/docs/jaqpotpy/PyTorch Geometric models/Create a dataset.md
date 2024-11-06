After succesfully configuring a featurizer (either default or custom), the next step is to create a PyTorch Geometric dataset. This dataset will be comprised of torch_geometric Data objects that include the typical Graph Neural Network features. Those comprise of x (node_features), edge_index (adjacency matrix), edge_attr (edge features) and y which is the target variable (either continuous or binary). 


```python
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
from jaqpotpy.datasets import SmilesGraphDataset
# Create a featurizer
featurizer = SmilesGraphFeaturizer(include_edge_features = True)
featurizer.set_default_config()
# Example of smiles strings and binary targets
train_smiles = ['CCO','CC', 'CCC']
train_y = [0, 1, 0]
# Create a training dataset 
train_dataset = SmilesGraphDataset(
    smiles=train_smiles, y=train_y, featurizer=featurizer
)
# Create a validation dataset
val_dataset = SmilesGraphDataset(
    smiles=val_smiles, y=val_y, featurizer=featurizer
)
```

(Optionally) For datasets that are not big in size you can precompute all the objects of every instance in the dataset as:
```python
train_dataset.precompute_featurization()
val_dataset.precompute_featurization()
```


