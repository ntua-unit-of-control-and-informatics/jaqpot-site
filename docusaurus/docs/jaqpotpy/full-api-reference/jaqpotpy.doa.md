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

### *class* jaqpotpy.doa.doa.CityBlock(threshold_percentile=95)

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA)

City Block (Manhattan) Distance Domain of Applicability (DOA) calculation class.

Attributes:
: \_data (Union[np.array, pd.DataFrame]): Input data used for DOA calculation.
  \_mean_vector (np.array): Mean vector of the training data.
  \_threshold (float): Threshold value for City Block distance.
  doa_attributes (CityBlockDoA): Attributes of the City Block DOA.

Methods:
: \_\_init_\_(): Initializes the CityBlock DOA class.
  fit(X: Union[np.array, pd.DataFrame]): Fits the model using the input data.
  predict(new_data: Union[np.array, pd.DataFrame]) -> Iterable[Any]: Predicts if new data points are within DOA.
  calculate_distance(sample: np.array) -> float: Calculates City Block distance for a sample.
  calculate_threshold(): Calculates the City Block distance threshold.

#### calculate_distance(sample: array) → float

Calculates City Block (Manhattan) distance for a sample.

Args:
: sample (np.array): Input sample to calculate distance for.

Returns:
: float: City Block distance of the sample.

#### calculate_threshold()

Calculates the City Block distance threshold based on the chosen percentile.

#### fit(X: array | DataFrame)

Fits the model using the input data.

Args:
: X (Union[np.array, pd.DataFrame]): Input training data.

#### get_attributes()

Returns the attributes of the CityBlock DOA.

Returns:
: CityBlockDOAAttributes: Attributes of the CityBlock DOA.

#### predict(new_data: array | DataFrame) → Iterable[Any]

Predicts if new data points are within DOA.

Args:
: new_data (Union[np.array, pd.DataFrame]): New data points to be predicted.

Returns:
: Iterable[Any]: List of dictionaries containing the City Block distance,
  threshold, and a boolean indicating if the data point is within DOA.

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

#### *abstractmethod* fit(X: array)

Abstract method to fit the model using the input data X.

#### *abstractmethod* get_attributes()

Abstract method to get the attributes of the DOA.

#### *property* in_doa

Getter for the in_doa attribute.

#### *abstractmethod* predict(data: Iterable[Any]) → Iterable[Any]

Abstract method to predict if data points are within DOA.

### *class* jaqpotpy.doa.doa.KernelBased(kernel_type='GAUSSIAN', threshold_method='percentile', threshold_percentile=5, sigma=None, gamma=None)

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA)

Enhanced Kernel-based Distance of Applicability (DOA) calculation class.

Supports multiple kernel types and more flexible threshold calculation.

#### fit(X: ndarray | DataFrame)

Fit the kernel DOA model.

Args:
: X (Union[np.ndarray, pd.DataFrame]): Training data.

#### get_attributes()

Returns the attributes of the Kernel DOA.

Returns:
: KernelDOAAttributes: Attributes of the Kernel DOA.

#### predict(new_data: ndarray | DataFrame) → Iterable[dict]

Predict DOA for new data points.

Args:
: new_data (Union[np.ndarray, pd.DataFrame]): Data to predict.

Returns:
: Iterable[dict]: Prediction results for each data point.

### *class* jaqpotpy.doa.doa.Leverage

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA)

Leverage class for Domain of Applicability (DOA) calculation using the leverage method.

Attributes:
: \_data (Union[np.array, pd.DataFrame]): Input data used for DOA calculation.
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

### *class* jaqpotpy.doa.doa.Mahalanobis(chi2_quantile=0.95)

Bases: [`DOA`](#jaqpotpy.doa.doa.DOA)

Mahalanobis Distance Domain of Applicability (DOA) calculation class.

Attributes:
: \_data (Union[np.array, pd.DataFrame]): Input data used for DOA calculation.
  \_mean_vector (np.array): Mean vector of the training data.
  \_cov_matrix (np.array): Covariance matrix of the training data.
  \_inv_cov_matrix (np.array): Inverse of the covariance matrix.
  \_threshold (float): Threshold value for Mahalanobis distance.
  doa_attributes (MahalanobisDoA): Attributes of the Mahalanobis DOA.

Methods:
: \_\_init_\_(): Initializes the Mahalanobis DOA class.
  fit(X: Union[np.array, pd.DataFrame]): Fits the model using the input data.
  predict(new_data: Union[np.array, pd.DataFrame]) -> Iterable[Any]: Predicts if new data points are within DOA.
  calculate_distance(sample: np.array) -> float: Calculates Mahalanobis distance for a sample.
  calculate_threshold(): Calculates the Mahalanobis distance threshold.

#### calculate_distance(sample: array) → float

Calculates Mahalanobis distance for a sample.

Args:
: sample (np.array): Input sample to calculate distance for.

Returns:
: float: Mahalanobis distance of the sample.

#### calculate_threshold()

Calculates the Mahalanobis distance threshold using chi-square distribution.
Uses 99% confidence level by default.

#### fit(X: array | DataFrame)

Fits the model using the input data.

Args:
: X (Union[np.array, pd.DataFrame]): Input training data.

#### get_attributes()

Returns the attributes of the Mahalanobis DOA.

Returns:
: MahalanobisDOAAttributes: Attributes of the Mahalanobis DOA.

#### predict(new_data: array | DataFrame) → Iterable[Any]

Predicts if new data points are within DOA.

Args:
: new_data (Union[np.array, pd.DataFrame]): New data points to be predicted.

Returns:
: Iterable[Any]: List of dictionaries containing the Mahalanobis distance,
  threshold, and a boolean indicating if the data point is within DOA.

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
