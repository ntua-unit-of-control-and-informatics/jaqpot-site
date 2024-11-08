# Upload a Model

## Import Required Libraries

```python
import torch
from torch_geometric.loader import DataLoader
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
from jaqpotpy.datasets import SmilesGraphDataset
from jaqpotpy.models.torch_geometric_models.graph_neural_network import GraphSageNetwork, pyg_to_onnx
from jaqpotpy.models.trainers.graph_trainers import BinaryGraphModelTrainer 
```