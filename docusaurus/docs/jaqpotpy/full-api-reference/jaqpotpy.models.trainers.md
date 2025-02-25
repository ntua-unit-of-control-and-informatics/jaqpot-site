# jaqpotpy.models.trainers package

## Subpackages

* [jaqpotpy.models.trainers.graph_trainers package](jaqpotpy.models.trainers.graph_trainers.md)
  * [Submodules](jaqpotpy.models.trainers.graph_trainers.md#submodules)
  * [jaqpotpy.models.trainers.graph_trainers.binary_trainer module](jaqpotpy.models.trainers.graph_trainers.md#module-jaqpotpy.models.trainers.graph_trainers.binary_trainer)
    * [`BinaryGraphModelTrainer`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer)
      * [`BinaryGraphModelTrainer.evaluate()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.evaluate)
      * [`BinaryGraphModelTrainer.get_model_kwargs()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.get_model_kwargs)
      * [`BinaryGraphModelTrainer.predict()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.predict)
      * [`BinaryGraphModelTrainer.predict_proba()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.predict_proba)
      * [`BinaryGraphModelTrainer.train()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.binary_trainer.BinaryGraphModelTrainer.train)
  * [jaqpotpy.models.trainers.graph_trainers.regression_trainer module](jaqpotpy.models.trainers.graph_trainers.md#module-jaqpotpy.models.trainers.graph_trainers.regression_trainer)
    * [`RegressionGraphModelTrainer`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer)
      * [`RegressionGraphModelTrainer.evaluate()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.evaluate)
      * [`RegressionGraphModelTrainer.get_model_kwargs()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.get_model_kwargs)
      * [`RegressionGraphModelTrainer.predict()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.predict)
      * [`RegressionGraphModelTrainer.train()`](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy.models.trainers.graph_trainers.regression_trainer.RegressionGraphModelTrainer.train)
  * [Module contents](jaqpotpy.models.trainers.graph_trainers.md#module-jaqpotpy.models.trainers.graph_trainers)
* [jaqpotpy.models.trainers.sequence_trainers package](jaqpotpy.models.trainers.sequence_trainers.md)
  * [Submodules](jaqpotpy.models.trainers.sequence_trainers.md#submodules)
  * [jaqpotpy.models.trainers.sequence_trainers.binary_trainer module](jaqpotpy.models.trainers.sequence_trainers.md#module-jaqpotpy.models.trainers.sequence_trainers.binary_trainer)
    * [`BinarySequenceTrainer`](jaqpotpy.models.trainers.sequence_trainers.md#jaqpotpy.models.trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer)
      * [`BinarySequenceTrainer.evaluate()`](jaqpotpy.models.trainers.sequence_trainers.md#jaqpotpy.models.trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.evaluate)
      * [`BinarySequenceTrainer.predict()`](jaqpotpy.models.trainers.sequence_trainers.md#jaqpotpy.models.trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.predict)
      * [`BinarySequenceTrainer.predict_proba()`](jaqpotpy.models.trainers.sequence_trainers.md#jaqpotpy.models.trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.predict_proba)
      * [`BinarySequenceTrainer.train()`](jaqpotpy.models.trainers.sequence_trainers.md#jaqpotpy.models.trainers.sequence_trainers.binary_trainer.BinarySequenceTrainer.train)
  * [Module contents](jaqpotpy.models.trainers.sequence_trainers.md#module-jaqpotpy.models.trainers.sequence_trainers)

## Submodules

## jaqpotpy.models.trainers.base_trainer module

### *class* jaqpotpy.models.trainers.base_trainer.TorchModelTrainer(model: Module, n_epochs: int, optimizer: Optimizer, loss_fn: Module, scheduler: LRScheduler | None = None, device: str = 'cpu', use_tqdm: bool = True, log_enabled: bool = True, log_filepath: str | None = None)

Bases: `ABC`

An abstract class for training a model and deploying it on Jaqpot.

Attributes:
: model (torch.nn.Module): The torch model to be trained.
  n_epochs (int): Number of training epochs.
  optimizer (torch.optim.Optimizer): The optimizer used for training the model.
  loss_fn (torch.nn.Module): The loss function used for training.
  scheduler (torch.optim.lr_scheduler.LRScheduler): The scheduler used for adjusting the learning rate during training.
  device (torch.device): The device on which to train the model.
  use_tqdm (bool): Whether to use tqdm for progress bars.
  current_epoch (int): The epoch on which the trainer has currently reached.
  log_enabled (bool): Whether logging is enabled.
  log_filepath (os.path.relpath or None): Relative path to the log file.
  logger (logging.Logger): The logger object at INFO level used for logging during model training.

#### *abstractmethod* evaluate(val_loader)

Abstract method for evaluating the model.

Args:
: val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]):
  : DataLoader for the evaluation dataset, providing batches of data to evaluate model performance.

Returns:
: None

Raises:
: NotImplementedError: If this method is not implemented in a subclass.

#### *abstractmethod* train(train_loader, val_loader=None)

Abstract method for training the model.

Args:
: train_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader]):
  : DataLoader for the training dataset, providing batches of training data.
  <br/>
  val_loader (Union[torch.utils.data.DataLoader, torch_geometric.loader.DataLoader], optional):
  : DataLoader for the validation dataset, providing batches of validation data.

Returns:
: None

Raises:
: NotImplementedError: If this method is not implemented in a subclass.

## Module contents
