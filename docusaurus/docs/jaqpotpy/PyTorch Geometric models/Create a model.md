Currently jaqpotpy contains four Graph Neural Network architectures whose layers are provided via PytorchGeometric. Those are:

- Graph Convolution Network (GCN)
- Graph Sage Network
- Graph Attention Network (GAT)
- Graph Transformer Network

### Models with only node features

Graph Convolution and Graph Sage architectures proccess only node attributes. You can easily create such a model
like the example below:

```python
from jaqpotpy.models.torch_geometric_models.graph_neural_network import GraphSageNetwork, GraphConvolutionNetwork
import torch
# Node features are obtained via the featurizer
node_features = featurizer.get_num_node_features()
# Select an activation function from torch
activation = torch.nn.ReLU()
model = GraphSageNetwork(
    input_dim=node_features,
    hidden_layers=1,
    hidden_dim=4,
    output_dim=1,
    activation=activation,
    dropout_proba=0.1,
    batch_norm = False,
    seed = 42,
    pooling="mean", # (mean, add, max)
)
```

Graph Attention and Graph Transformer architecture can support node attributes only or both node,edge attributes.

```python
from jaqpotpy.models.torch_geometric_models.graph_neural_network import GraphAttentionNetwork,GraphTransformerNetwork
import torch
# Node features are obtained via the featurizer
node_features = featurizer.get_num_node_features()
edge_features = featurizer.get_num_edge_features()
# Select an activation function from torch
activation = torch.nn.ReLU()
# pooling refers to graph pooling after final graph layer (mean, add, max)
model = GraphAttentionNetwork(
    input_dim=node_features,
    hidden_layers=1,
    hidden_dim=4,
    output_dim=1,
    activation=activation,
    dropout_proba=0.1,
    batch_norm = False,
    seed = 42,
    pooling="mean",
    edge_dim = edge_features, # If you don't want, pass None
    heads = 2 # Attention heads 
)
```