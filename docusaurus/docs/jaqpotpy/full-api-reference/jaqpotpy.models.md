# jaqpotpy.models package

## Subpackages

* [jaqpotpy.models.torch_geometric_models package](jaqpotpy.models.torch_geometric_models.md)
  * [Submodules](jaqpotpy.models.torch_geometric_models.md#submodules)
  * [jaqpotpy.models.torch_geometric_models.graph_neural_network module](jaqpotpy.models.torch_geometric_models.md#jaqpotpy-models-torch-geometric-models-graph-neural-network-module)
  * [Module contents](jaqpotpy.models.torch_geometric_models.md#module-contents)
* [jaqpotpy.models.torch_models package](jaqpotpy.models.torch_models.md)
  * [Submodules](jaqpotpy.models.torch_models.md#submodules)
  * [jaqpotpy.models.torch_models.smiles_sequence module](jaqpotpy.models.torch_models.md#jaqpotpy-models-torch-models-smiles-sequence-module)
  * [Module contents](jaqpotpy.models.torch_models.md#module-jaqpotpy.models.torch_models)
* [jaqpotpy.models.trainers package](jaqpotpy.models.trainers.md)
  * [Subpackages](jaqpotpy.models.trainers.md#subpackages)
    * [jaqpotpy.models.trainers.graph_trainers package](jaqpotpy.models.trainers.graph_trainers.md)
      * [Submodules](jaqpotpy.models.trainers.graph_trainers.md#submodules)
      * [jaqpotpy.models.trainers.graph_trainers.binary_trainer module](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy-models-trainers-graph-trainers-binary-trainer-module)
      * [jaqpotpy.models.trainers.graph_trainers.regression_trainer module](jaqpotpy.models.trainers.graph_trainers.md#jaqpotpy-models-trainers-graph-trainers-regression-trainer-module)
      * [Module contents](jaqpotpy.models.trainers.graph_trainers.md#module-contents)
    * [jaqpotpy.models.trainers.sequence_trainers package](jaqpotpy.models.trainers.sequence_trainers.md)
      * [Submodules](jaqpotpy.models.trainers.sequence_trainers.md#submodules)
      * [jaqpotpy.models.trainers.sequence_trainers.binary_trainer module](jaqpotpy.models.trainers.sequence_trainers.md#jaqpotpy-models-trainers-sequence-trainers-binary-trainer-module)
      * [Module contents](jaqpotpy.models.trainers.sequence_trainers.md#module-contents)
  * [Submodules](jaqpotpy.models.trainers.md#submodules)
  * [jaqpotpy.models.trainers.base_trainer module](jaqpotpy.models.trainers.md#jaqpotpy-models-trainers-base-trainer-module)
  * [Module contents](jaqpotpy.models.trainers.md#module-jaqpotpy.models.trainers)

## Submodules

## jaqpotpy.models.base_classes module

### *class* jaqpotpy.models.base_classes.MaterialModel

Bases: [`Model`](#jaqpotpy.models.base_classes.Model)

#### infer()

#### *classmethod* load(filename)

#### save()

### *class* jaqpotpy.models.base_classes.Model

Bases: `object`

#### *property* X

#### *property* Y

#### *property* descriptors

#### *property* doa

#### *property* external *: dict*

#### *property* external_feats *: Iterable[str]*

#### infer()

#### *property* jaqpotpy_docker

#### *property* jaqpotpy_version

#### *property* library

#### *property* model

#### *property* model_title

#### *property* modeling_task

#### *property* optimizer

#### *property* prediction

#### *property* preprocessing

#### *property* preprocessing_y

#### *property* preprocessor_names

#### *property* preprocessor_y_names

#### *property* probability

#### *property* smiles

#### *property* version

### *class* jaqpotpy.models.base_classes.MolecularModel

Bases: [`Model`](#jaqpotpy.models.base_classes.Model)

#### deploy_on_jaqpot(jaqpot, description, model_title: str = None)

#### infer()

#### *classmethod* load(filename)

#### *classmethod* load_from_jaqpot(jaqpot, id: str)

#### save()

## jaqpotpy.models.sklearn module

### *class* jaqpotpy.models.sklearn.MaterialSKLearn(dataset: StructureDataset | CompositionDataset, doa: [DOA](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA), model: Any, fillna: Dict | float | int | None = None, eval: Evaluator = None, preprocess: Preprocesses = None)

Bases: [`Model`](#jaqpotpy.models.base_classes.Model)

#### fit()

### *class* jaqpotpy.models.sklearn.MolecularSKLearn(dataset: [MolecularDataset](jaqpotpy.datasets.md#jaqpotpy.datasets.dataset_base.MolecularDataset), doa: [DOA](jaqpotpy.doa.md#jaqpotpy.doa.doa.DOA), model: Any, eval: Evaluator = None, preprocess: Preprocesses = None)

Bases: [`Model`](#jaqpotpy.models.base_classes.Model)

#### fit()

## jaqpotpy.models.xgboost module

## Module contents
