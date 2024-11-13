# jaqpotpy.models.torch_geometric_models package

## Submodules

## jaqpotpy.models.torch_geometric_models.graph_neural_network module

### *class* jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork(input_dim: int, hidden_layers: int = 2, hidden_dim: int = 16, output_dim: int = 1, activation: Module = ReLU(), dropout_proba: float = 0.0, batch_norm: bool = False, seed=42, pooling: str = 'mean', edge_dim: int | None = None, heads: int | None = None)

Bases: `Module`

Base class for constructing various types of graph neural networks with flexible layer configurations.

Attributes:
: input_dim (int): Dimension of input features for each node.
  hidden_layers (int): Number of hidden layers.
  hidden_dim (int): Dimension of each hidden layer.
  output_dim (int): Dimension of the output layer.
  activation (nn.Module): Activation function.
  dropout_proba (float): Dropout probability for regularization.
  batch_norm (bool): Whether to use batch normalization.
  seed (int): Random seed for reproducibility.
  pooling (str): Pooling method to use (‘mean’, ‘add’, or ‘max’).
  edge_dim (Optional[int]): Dimension of edge features.
  heads (Optional[int]): Number of attention heads (for certain layers).

#### add_layer(conv_layer: Module)

Helper function to add a convolution layer to the graph layers list.

Args:
: conv_layer (nn.Module): Convolution layer to add.

#### forward(x: Tensor, edge_index: Tensor, batch: Tensor | None, edge_attr: Tensor | None = None) → Tensor

Forward pass through the network.

Args:
: x (Tensor): Node features.
  edge_index (Tensor): Graph edges.
  batch (Optional[Tensor]): Batch indices for each node.
  edge_attr (Optional[Tensor]): Edge features (if applicable).

Returns:
: Tensor: Output node/graph embeddings.

#### pooling_layer(x: Tensor, batch: Tensor | None) → Tensor

Applies the specified pooling method.

Args:
: x (Tensor): Node embeddings.
  batch (Optional[Tensor]): Batch index tensor.

Returns:
: Tensor: Pooled graph-level embeddings.

### *class* jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphAttentionNetwork(input_dim: int, hidden_layers: int = 2, hidden_dim: int = 16, output_dim: int = 1, activation: Module = ReLU(), dropout_proba: float = 0.0, batch_norm: bool = False, seed=42, pooling: str = 'mean', edge_dim: int | None = None, heads: int = 1)

Bases: [`BaseGraphNetwork`](#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork)

Graph Attention Network (GAT) model.

Attributes:
: Inherits attributes from BaseGraphNetwork.

### *class* jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphConvolutionNetwork(input_dim: int, hidden_layers: int = 2, hidden_dim: int = 16, output_dim: int = 1, activation: Module = ReLU(), dropout_proba: float = 0.0, batch_norm: bool = False, seed=42, pooling: str = 'mean')

Bases: [`BaseGraphNetwork`](#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork)

Graph Convolutional Network (GCN) model.

Attributes:
: Inherits attributes from BaseGraphNetwork.

### *class* jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphSageNetwork(input_dim: int, hidden_layers: int = 2, hidden_dim: int = 16, output_dim: int = 1, activation: Module = ReLU(), dropout_proba: float = 0.0, batch_norm: bool = False, seed=42, pooling: str = 'mean')

Bases: [`BaseGraphNetwork`](#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork)

GraphSAGENetwork model.

Attributes:
: Inherits attributes from BaseGraphNetwork.

### *class* jaqpotpy.models.torch_geometric_models.graph_neural_network.GraphTransformerNetwork(input_dim: int, hidden_layers: int = 2, hidden_dim: int = 16, output_dim: int = 1, activation: Module = ReLU(), dropout_proba: float = 0.0, batch_norm: bool = False, seed=42, pooling: str = 'mean', edge_dim: int | None = None, heads: int = 1)

Bases: [`BaseGraphNetwork`](#jaqpotpy.models.torch_geometric_models.graph_neural_network.BaseGraphNetwork)

Graph Transformer Network model.

Attributes:
: Inherits attributes from BaseGraphNetwork.

### jaqpotpy.models.torch_geometric_models.graph_neural_network.pyg_to_onnx(torch_model, featurizer)

Converts a PyTorch geometric model to ONNX format and returns a base64-encoded string of the model.

Args:
: torch_model (nn.Module): The trained PyTorch model to be converted.
  featurizer (SmilesGraphFeaturizer): A featurizer for transforming SMILES strings into graph data.

Returns:
: str: A base64-encoded ONNX model string.

## Module contents
