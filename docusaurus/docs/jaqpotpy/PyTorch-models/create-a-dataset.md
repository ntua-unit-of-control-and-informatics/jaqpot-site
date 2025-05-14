---
sidebar_position: 1
---


### Create a Dataset (Tabular Regression)

```python
import numpy as np
import pandas as pd
import torch
from torch.utils.data import Dataset, DataLoader
from sklearn.preprocessing import StandardScaler

# Create a simple dataset class for regression
class RegressionDataset(Dataset):
    def __init__(self, X, y):
        self.X = X
        self.y = y

    def __len__(self):
        return len(self.X)

    def __getitem__(self, idx):
        return self.X[idx], self.y[idx]

# Generate synthetic data
np.random.seed(42)
X = np.random.randn(1000, 5)
y = 2*X[:,0] + 3*X[:,1] - X[:,2] + 0.5*X[:,3] + np.random.randn(1000)*0.1

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_tensor = torch.FloatTensor(X_scaled)
y_tensor = torch.FloatTensor(y).reshape(-1, 1)

train_dataset = RegressionDataset(X_tensor, y_tensor)
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)
```
