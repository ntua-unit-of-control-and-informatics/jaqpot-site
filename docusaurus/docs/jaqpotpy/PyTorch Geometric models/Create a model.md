# Creating a Model
This document demonstrates how to create a Graph Neural Network model using JaqpotPy with a specific architecture. The example assumes you have already preprocessed your data and have a dataset ready to use.

## Import Required Libraries

We first import the necessary libraries:

```python
import torch
from torch_geometric.loader import DataLoader
from jaqpotpy.descriptors.graph import SmilesGraphFeaturizer
from jaqpotpy.datasets import SmilesGraphDataset
from jaqpotpy.models.torch_geometric_models.graph_neural_network import GraphSageNetwork, GraphAttentionNetwork
from jaqpotpy.models.trainers.graph_trainers import BinaryGraphModelTrainer
```

## Define the Graph Neural Network Architecture
In this example, we use a GraphSageNetwork architecture. The network takes node features from a featurizer and creates a model with specified input dimensions, hidden layers, and output dimensions. Currently Jaqpotpy library support the following architectures:

- GraphConvolutionNetork
- GraphSageNetwork
- GraphAttentionNetwork
- GraphTransformerNetwork

Graph Convolution and Graph Sage architectures proccess only node attributes. You can easily create a model like the example below:

```python
node_features = featurizer.get_num_node_features()
model = GraphSageNetwork(
    input_dim=node_features,
    hidden_layers=1, 
    hidden_dim=4, 
    output_dim=1, 
    activation=torch.nn.ReLU(), 
    dropout_proba=0.1, 
    batch_norm = False, 
    seed = 42, 
    pooling="mean",
)
```

- input_dim: Number of input neurons, determined by the number of node features.
- hidden_layers: Number of hidden layers in the network.
- hidden_dim: Number of neurons in each hidden layer.
- output_dim: Number of output neurons (default set to 1 for binary classification).
- activation: Activation function, specified using PyTorch (e.g., ReLU).
- pooling: Graph pooling method (options: mean, add, max).
- dropout_proba: Dropout probability for regularization.

Graph Attention and Graph Transformer architectures can proccess both node and edge attributes (optionally)

```python
node_features = featurizer.get_num_node_features()
edge_features = featurizer.get_edge_features()
model = GraphAttentionNetwork(
    input_dim=node_features,
    hidden_layers=1, 
    hidden_dim=4, 
    output_dim=1, 
    activation=torch.nn.ReLU(), 
    dropout_proba=0.1, 
    batch_norm = False, 
    seed = 42, 
    pooling="mean", 
    edge_dim = edge_features, 
    heads = 2 
)
```

Extra arguments:

- edge_dim: Number of edge features or None
- heads: Attention heads for each neuron in hidden layers








