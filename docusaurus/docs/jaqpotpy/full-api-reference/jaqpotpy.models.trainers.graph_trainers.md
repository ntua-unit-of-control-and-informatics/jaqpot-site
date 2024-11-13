# jaqpotpy.models.trainers.graph_trainers package

## Submodules

## jaqpotpy.models.trainers.graph_trainers.binary_trainer module

### *class* jaqpotpy.models.trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer(model, n_epochs, optimizer, loss_fn, scheduler=None, device='cpu', use_tqdm=True, log_enabled=True, log_filepath=None)

Bases: [`TorchModelTrainer`](jaqpotpy.models.trainers.md#jaqpotpy.models.trainers.base_trainer.TorchModelTrainer)

Trainer class for binary classification using Graph Neural Networks (GNNs) designed for SMILES.

#### evaluate(val_loader)

Evaluates the model on the validation set.

Args:
: val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for validation data.

Returns:
: float: Average loss on the validation dataset.
  dict: Dictionary of evaluation metrics (e.g., accuracy, precision).
  numpy.ndarray: Confusion matrix of shape (2, 2) representing TN, FP, FN, and TP counts.

#### get_model_kwargs(data)

Returns model’s keyword arguments.

Args:
: data (torch_geometric.data.Data): Data object returned from the DataLoader.

Returns:
: dict: Model keyword arguments for graph data. Keys include ‘x’, ‘edge_index’, ‘batch’, and optionally ‘edge_attr’ if the model uses edge features.

#### predict(val_loader)

Returns binary predictions for the validation set.

Args:
: val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for validation data.

Returns:
: list: List of binary predictions.

#### predict_proba(val_loader)

Returns prediction probabilities for the validation set.

Args:
: val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for validation data.

Returns:
: list: List of prediction probabilities.

#### train(train_loader, val_loader=None)

Trains the model for the specified number of epochs.

Args:
: train_loader (torch_geometric.loader.DataLoader): DataLoader for training data.
  val_loader (torch_geometric.loader.DataLoader, optional): DataLoader for validation data.

Returns:
: None

## jaqpotpy.models.trainers.graph_trainers.regression_trainer module

### *class* jaqpotpy.models.trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer(model, n_epochs, optimizer, loss_fn, scheduler=None, device='cpu', use_tqdm=True, log_enabled=True, log_filepath=None)

Bases: [`TorchModelTrainer`](jaqpotpy.models.trainers.md#jaqpotpy.models.trainers.base_trainer.TorchModelTrainer)

Trainer class for Regression using Graph Neural Networks for SMILES

#### evaluate(val_loader)

Evaluate the model’s performance on the validation set.

### Args:

> val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for the validation dataset.

### Returns:

> float: Average loss over the validation dataset.
> dict: Dictionary containing evaluation metrics. The keys represent the metric names and the values are floats.

#### get_model_kwargs(data)

Fetch the model’s keyword arguments.

### Args:

> data (torch_geometric.data.Data): Data object returned from the DataLoader.

### Returns:

> dict: The required model keyword arguments. Contains keys: {‘x’, ‘edge_index’, ‘batch’, ‘edge_attr’}.
> : Note that ‘edge_attr’ is only present if the model supports edge features.

#### predict(val_loader)

Provide predictions on the validation set.

### Args:

> val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for the validation dataset.

### Returns:

> list: List of predictions.

#### train(train_loader, val_loader=None)

Train the model.

### Args:

> train_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]):
> : DataLoader for the training dataset.

> val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader], optional):
> : DataLoader for the validation dataset. Default is None.

### Returns:

> None

## Module contents
