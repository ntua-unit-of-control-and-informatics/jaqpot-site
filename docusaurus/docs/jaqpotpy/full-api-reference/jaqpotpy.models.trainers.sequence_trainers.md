# jaqpotpy.models.trainers.sequence_trainers package

## Submodules

## jaqpotpy.models.trainers.sequence_trainers.binary_trainer module

### *class* jaqpotpy.models.trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer(model, n_epochs, optimizer, loss_fn, scheduler=None, device='cpu', use_tqdm=True, log_enabled=True, log_filepath=None)

Bases: [`TorchModelTrainer`](jaqpotpy.models.trainers.md#jaqpotpy.models.trainers.base_trainer.TorchModelTrainer)

Trainer class for Binary Classification using LSTM Networks for SMILES.

Attributes:
: decision_threshold (float): Decision threshold for binary classification.

#### evaluate(val_loader)

Evaluate the model’s performance on the validation set.

Args:
: val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for the validation dataset.

Returns:
: float: Average loss over the validation dataset.
  dict: Dictionary containing evaluation metrics. The keys represent the metric names and the values are floats.
  numpy.ndarray: Confusion matrix as a numpy array of shape (2, 2) representing true negative (TN), false positive (FP),
  <br/>
  > false negative (FN), and true positive (TP) counts respectively. The elements are arranged as [[TN, FP], [FN, TP]].

#### predict(val_loader)

Provide predictions on the validation set.

Args:
: val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for the validation dataset.

Returns:
: list: List of predictions.

#### predict_proba(val_loader)

Provide the probabilities of the predictions on the validation set.

Args:
: val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for the validation dataset.

Returns:
: list: List of predictions’ probabilities.

#### train(train_loader, val_loader=None)

Train the model.

Args:
: train_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]): DataLoader for the training dataset.
  val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader], optional): DataLoader for the validation dataset.

Returns:
: None

## Module contents
