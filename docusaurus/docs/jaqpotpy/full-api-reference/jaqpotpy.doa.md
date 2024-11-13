# jaqpotpy.doa package

## Subpackages

## Submodules

## jaqpotpy.doa.doa module

### *class* jaqpotpy.doa.doa.BoundingBox

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA)

BoundingBox class for Domain of Applicability (DOA) calculation using the bounding box method.

Attributes:
: \_data (np.array): Input data used for DOA calculation.
  bounding_box (np.array): Array containing the min and max bounds for each feature.
  doa_attributes (BoundingBoxDoa): Attributes of the bounding box DOA.

Properties:
: \_\_name_\_ (str): Name of the DOA method.

Methods:
: \_\_init_\_(): Initializes the BoundingBox class.
  fit(X: np.array): Fits the model using the input data X.
  predict(new_data: np.array) -> Iterable[Any]: Predicts if new data points are within DOA.
  \_validate_input(data: Union[np.array, pd.DataFrame]): Validates and converts input data to numpy array if necessary.
  get_attributes(): Returns the attributes of the bounding box DOA.

#### fit(X: array)

Fits the model using the input data X.
Calculates the min and max bounds for each feature in the input data.
Args:

> X (np.array): Input data.

#### get_attributes()

Abstract method to get the attributes of the DOA.

#### predict(new_data: array) → Iterable[Any]

Predicts if new data points are within DOA.
Args:

> new_data (np.array): New data points to be predicted.

Returns:
: Iterable[Any]: List of dictionaries containing the percentage of features out of DOA and a boolean indicating if the data point is within DOA.

### *class* jaqpotpy.doa.doa.DOA

Bases: `ABC`

Abstract class for Domain of Applicability (DOA) methods.

Attributes:
: \_in_doa (list): List to store boolean values indicating if data points are within DOA.
  <br/>
  \_data (Union[np.array, pd.DataFrame]): Input data used for DOA calculation.

Properties:
: \_\_name_\_ (str): Name of the DOA method.
  <br/>
  in_doa (list): Getter and setter for the in_doa attribute.
  <br/>
  data (Union[np.array, pd.DataFrame]): Getter and setter for the data attribute.

Methods:
: fit(X: np.array): Abstract method to fit the model using the input data X.
  predict(data: Iterable[Any]) -> Iterable[Any]: Abstract method to predict if data points are within DOA.
  get_attributes(): Abstract method to get the attributes of the DOA.
  \_validate_input(data: Union[np.array, pd.DataFrame]): Validates and converts input data to numpy array if necessary.

#### *property* data

Getter for the data attribute.

#### *abstract* fit(X: array)

Abstract method to fit the model using the input data X.

#### *abstract* get_attributes()

Abstract method to get the attributes of the DOA.

#### *property* in_doa

Getter for the in_doa attribute.

#### *abstract* predict(data: Iterable[Any]) → Iterable[Any]

Abstract method to predict if data points are within DOA.

### *class* jaqpotpy.doa.doa.Leverage

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA)

Leverage class for Domain of Applicability (DOA) calculation using the leverage method.

Attributes:
: \_doa (list): List to store leverage values.
  \_in_doa (list): List to store boolean values indicating if data points are within DOA.
  \_data (Union[np.array, pd.DataFrame]): Input data used for DOA calculation.
  \_doa_matrix (np.array): Matrix used for leverage calculation.
  \_h_star (float): Threshold value for leverage.
  doa_attributes (LeverageDoa): Attributes of the leverage DOA.

Properties:
: \_\_name_\_ (str): Name of the DOA method.
  doa_matrix (np.array): Getter and setter for the DOA matrix.
  h_star (float): Getter and setter for the leverage threshold.

Methods:
: \_\_init_\_(): Initializes the Leverage class.
  \_\_getitem_\_(key): Returns the key.
  calculate_threshold(): Calculates the leverage threshold (_h_star).
  calculate_matrix(): Calculates the DOA matrix (_doa_matrix) using the input data.
  fit(X: Union[np.array, pd.DataFrame]): Fits the model using the input data X.
  predict(new_data: Union[np.array, pd.DataFrame]) -> Iterable[Any]: Predicts if new data points are within DOA.
  \_validate_input(data: Union[np.array, pd.DataFrame]): Validates and converts input data to numpy array if necessary.
  get_attributes(): Returns the attributes of the leverage DOA.

#### calculate_matrix()

Calculates the DOA matrix (_doa_matrix) using the input data.

#### calculate_threshold()

Calculates the leverage threshold (_h_star).

#### *property* doa_matrix

Getter for the DOA matrix.

#### fit(X: array | DataFrame)

Fits the model using the input data X.
Args:

> X (Union[np.array, pd.DataFrame]): Input data.

#### get_attributes()

Returns the attributes of the leverage DOA.
Returns:

> LeverageDoa: Attributes of the leverage DOA.

#### *property* h_star

Getter for the leverage threshold.

#### predict(new_data: array | DataFrame) → Iterable[Any]

Predicts if new data points are within DOA.
Args:

> new_data (Union[np.array, pd.DataFrame]): New data points to be predicted.

Returns:
: Iterable[Any]: List of dictionaries containing the leverage value, threshold, and a boolean indicating if the data point is within DOA.

### *class* jaqpotpy.doa.doa.MeanVar

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA)

Implements Mean and Variance domain of applicability.

Initialized upon training data and holds the DOA mean and the variance of the data.
Calculates the mean and variance for a new instance of data or array of data and decides if in AD.

Attributes:
: \_data (np.array): Input data used for DOA calculation.
  bounds (np.array): Array containing the mean, standard deviation, and variance for each feature.
  doa_attributes (MeanVarDoa): Attributes of the mean-variance DOA.

Properties:
: \_\_name_\_ (str): Name of the DOA method.

Methods:
: \_\_init_\_(): Initializes the MeanVar class.
  fit(X: np.array): Fits the model using the input data X.
  predict(new_data: np.array) -> Iterable[Any]: Predicts if new data points are within DOA.
  \_validate_input(data: Union[np.array, pd.DataFrame]): Validates and converts input data to numpy array if necessary.
  get_attributes(): Returns the attributes of the mean-variance DOA.

#### fit(X: array)

Fits the model using the input data X.
Calculates the mean, standard deviation, and variance for each feature in the input data.
Args:

> X (np.array): Input data.

#### get_attributes()

Abstract method to get the attributes of the DOA.

#### predict(new_data: array) → Iterable[Any]

Predicts if new data points are within DOA.
Args:

> new_data (np.array): New data points to be predicted.

Returns:
: Iterable[Any]: List of dictionaries containing the percentage of features out of DOA and a boolean indicating if the data point is within DOA.

## Module contents
