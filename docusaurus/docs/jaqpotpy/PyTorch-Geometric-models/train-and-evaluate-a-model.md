---
sidebar_position: 3
---

# Train and Evaluate a Model

In this section, we continue building on the previous example by defining the optimizer, loss function, and training procedure for our graph neural network (GNN) model using `jaqpotpy`. We utilize PyTorch-based components to configure the training process.

## Import Required Libraries

We first import the necessary libraries:

```python
import torch
from torch_geometric.loader import DataLoader
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
from jaqpotpy.datasets import SmilesGraphDataset
from jaqpotpy.models.torch_geometric_models.graph_neural_network import GraphSageNetwork, GraphAttentionNetwork
from jaqpotpy.models.trainers.graph_trainers import BinaryGraphModelTrainer, RegressionGraphModelTrainer
```

## Binary Classification
### PyTorch Configuration

We begin by defining the optimizer and loss function from Pytorch. In this example, we use the Adam optimizer and a binary cross-entropy loss function with logits, as the task is a binary classification problem. You can choose any type of optimizer that comes with PyTorch.

```python
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
loss = torch.nn.BCEWithLogitsLoss()
```

### Trainer Configuration
We use the BinaryGraphModelTrainer from jaqpotpy to handle the training process. This trainer requires the model, number of epochs, optimizer, and loss function as inputs. Optionally, a learning rate scheduler can also be provided.

```python
trainer = BinaryGraphModelTrainer(
    model=model, # Jaqpotpy Graph Model
    n_epochs=20,
    optimizer=optimizer,
    loss_fn=loss,
    scheduler=None 
)
```

### Data Loaders
We use PyTorch Geometric's DataLoader to load the training, validation, and test datasets in mini-batches. This helps in efficiently feeding data into the model during training and evaluation. The datasets are defined in `Create a dataset` page.


```python
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False)
test_loader = DataLoader(test_dataset, batch_size=32, shuffle=False)
```

### Train the Model
The model is trained using the training and validation data loaders.

```python
trainer.train(train_loader, val_loader)
```

### Evaluate the Model
Finally, the model is evaluated on the test dataset to obtain the loss, metrics, and confusion matrix.

```python
loss, metrics, conf_matrix = trainer.evaluate(test_loader)
```

## Regression

### PyTorch Configuration

The main difference here is only the loss function that needs to be for regression specific tasks.

```python
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
loss = torch.nn.MSELoss()
```

### Trainer Configuration
We use the RegressionModelTrainer from jaqpotpy to handle the training process. This trainer requires the same arguments as the BinaryGraphModelTrainer

```python
trainer = RegressionGraphModelTrainer(
    model=model, # Jaqpotpy Graph Model
    n_epochs=20,
    optimizer=optimizer,
    loss_fn=loss,
    scheduler=None 
)
```

### DataLoaders

```python
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False)
test_loader = DataLoader(test_dataset, batch_size=32, shuffle=False)
```

### Train the Model
The model is trained using the training and validation data loaders.

```python
trainer.train(train_loader, val_loader)
```

### Evaluate the Model
Finally, the model is evaluated on the test dataset to obtain the loss and metrics.

```python
loss, metrics = trainer.evaluate(test_loader)
```


