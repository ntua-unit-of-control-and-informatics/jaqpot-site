# jaqpotpy.doa package

## Subpackages

## Submodules

## jaqpotpy.doa.doa module

### *class* jaqpotpy.doa.doa.DOA

Bases: `object`

Abstract class for DOA methods

#### calculate(data: Iterable[Any]) → Iterable[Any]

#### calculate_matrix()

#### calculate_threshold()

#### fit(X: array)

#### predict(data: Iterable[Any]) → Iterable[Any]

### *class* jaqpotpy.doa.doa.Leverage

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA), `ABC`

Implements DOA method leverage.
Initialized upon training data and holds the doa matrix and the threshold ‘A’ value.
Calculates the DOA for a new instance of data or array of data.

#### *property* IN

#### *property* a

#### calculate_matrix()

#### calculate_threshold()

#### *property* data

#### *property* doa_matrix

#### *property* doa_new

#### fit(X: array)

#### predict(new_data: array) → Iterable[Any]

### *class* jaqpotpy.doa.doa.MeanVar

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA), `ABC`

Implements Mean and Variance domain of applicability .
Initialized upon training data and holds the doa mean and the variance of the data.
Calculates the mean and variance for a new instance of data or array of data and decides if in AD.

#### *property* IN

#### *property* a

#### calculate(new_data: array) → Iterable[Any]

#### *property* data

#### *property* doa_matrix

#### *property* doa_new

#### fit(X: array)

#### predict(new_data: array) → Iterable[Any]

### *class* jaqpotpy.doa.doa.SmilesLeverage

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA), `ABC`

Implements DOA method leverage given an array of smiles.
Descriptors and data matrix is calculated with rdkit descriptors
Initialized upon training data and holds the doa matrix and the threshold ‘A’ value.
Calculates the DOA for a new instance of data or array of data.

#### *property* IN

#### *property* a

#### calculate_matrix()

#### calculate_threshold()

#### *property* data

#### *property* doa_matrix

#### *property* doa_new

#### fit(smiles: Iterable[str])

#### predict(smiles: Iterable[str]) → Iterable[Any]

#### *property* smiles

### jaqpotpy.doa.doa.calc_doa(doa_matrix, new_data)

### jaqpotpy.doa.doa.calculate_a(X)

### jaqpotpy.doa.doa.calculate_doa_matrix(X)

## Module contents
