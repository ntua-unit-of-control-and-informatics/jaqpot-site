---
sidebar_position: 2
title: Create a model
---


You can define your model by subclassing torch.nn.Module. Here we use a simple feedforward network with two hidden layers. This model maps five input features to a single output.

```python
import torch.nn as nn

class RegressionNet(nn.Module):
    def __init__(self):
        super(RegressionNet, self).__init__()
        self.layers = nn.Sequential(
            nn.Linear(5, 64), nn.ReLU(),
            nn.Linear(64, 32), nn.ReLU(),
            nn.Linear(32, 1)
        )

    def forward(self, x):
        return self.layers(x)

model = RegressionNet()
```






