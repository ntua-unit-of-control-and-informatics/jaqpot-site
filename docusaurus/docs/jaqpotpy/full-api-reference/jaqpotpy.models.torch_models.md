# jaqpotpy.models.torch_models package

## Submodules

## jaqpotpy.models.torch_models.smiles_sequence module

### *class* jaqpotpy.models.torch_models.smiles_sequence.Sequence_LSTM(input_size, hidden_size, num_layers, output_size, dropout, activation, bidirectional=False)

Bases: `Module`

#### forward(x)

Define the computation performed at every call.

Should be overridden by all subclasses.

#### NOTE
Although the recipe for forward pass needs to be defined within
this function, one should call the `Module` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.

### jaqpotpy.models.torch_models.smiles_sequence.lstm_to_onnx(torch_model, dataset)

## Module contents
