After building the model architecture training and evaluation come into place. Although, Jaqpotpy provides training and validation infrastracture, you need to use specific torch, torch_geometric objects like loss function, DataLoader, optimizer and other needed stuff.

```python
import torch
from torch_geometric.loader import DataLoader
from jaqpotpy.models.trainers.graph_trainers import BinaryGraphModelTrainer
model = ....
train_dataset = ...
val_dataset = ...
test_dataset = ...
# Select a torch optimizer
optimizer = torch.optim.Adam(model.parameters(), lr = 0.001)
# Select a torch loss function
loss_fn = torch.nn.BCEWithLogitsLoss()
epochs = 5
# Create dataloaders 
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=32, shuffle=False)
test_loader = DataLoader(val_dataset, batch_size=2000, shuffle=False)
# Create a binary trainer (Assuming the target variable is binary)
trainer = BinaryGraphModelTrainer(model=model, n_epochs=epochs, optimizer = optimizer, loss = loss_fn)
# Train a model and evaluate at each epoch
trainer.train(train_loader, val_loader)
# Evaluate on the test set
metrics = trainer.evaluate(test_loader)
```

