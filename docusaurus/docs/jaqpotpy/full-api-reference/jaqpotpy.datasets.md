# jaqpotpy.datasets package

## Subpackages

## Submodules

## jaqpotpy.datasets.dataset_base module

Dataset base classes

### *class* jaqpotpy.datasets.dataset_base.BaseDataset(path=None, x_cols=None, y_cols=None)

Bases: `object`

Astract class for datasets

#### *property* X *: Iterable[str]*

#### create()

#### *property* dataset_name

#### *property* df *: Any*

#### *property* external *: Iterable[str]*

#### *property* featurizer_name *: Iterable[Any]*

#### *property* task

#### *property* x_colls_all *: Iterable[str]*

#### *property* y *: Iterable[str]*

### *class* jaqpotpy.datasets.dataset_base.ImageDataset(path=None, x_cols=None, y_cols=None)

Bases: [`BaseDataset`](#jaqpotpy.datasets.dataset_base.BaseDataset)

#### *classmethod* load(filename)

#### save()

### *class* jaqpotpy.datasets.dataset_base.MaterialDataset(path=None, materials_col=None, x_cols=None, y_cols=None, materials=None)

Bases: [`BaseDataset`](#jaqpotpy.datasets.dataset_base.BaseDataset)

#### *classmethod* load(filename)

#### *property* materials_strings *: Iterable[str]*

#### save()

### *class* jaqpotpy.datasets.dataset_base.MolecularDataset(path=None, smiles_col=None, x_cols=None, y_cols=None, smiles=None)

Bases: [`BaseDataset`](#jaqpotpy.datasets.dataset_base.BaseDataset)

#### *classmethod* load(filename)

#### save()

#### *property* smiles_strings *: Iterable[str]*

## jaqpotpy.datasets.graph_pyg_dataset module

## jaqpotpy.datasets.jaqpotpy_dataset module

## jaqpotpy.datasets.tokenizer_dataset module

## Module contents
