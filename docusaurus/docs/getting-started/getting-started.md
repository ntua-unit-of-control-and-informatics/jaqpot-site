# Getting Started with JaqpotPy

JaqpotPy is a powerful Python library designed for streamlined development and deployment of machine learning models, with a special focus on molecular modeling and QSAR (Quantitative Structure-Activity Relationship) applications. It provides a structured, efficient approach to building, evaluating, and deploying models while leveraging the robust capabilities of scikit-learn and PyTorch.

## Key Features

- **Structured ML Development**: Build machine learning models using familiar scikit-learn and PyTorch APIs
- **Molecular Modeling**: Streamlined SMILES featurization for chemical structures
- **Automated Evaluation**: Built-in framework for generating goodness-of-fit metrics
- **Applicability Domain**: Well-defined approach for determining model reliability
- **One-Click Deployment**: Deploy models to the Jaqpot platform (https://app.jaqpot.org) with a single line of code
- **API Integration**: Access deployed models through REST API calls
- **User Interface**: Deployed models come with a well-designed web interface

## Installation

You can install JaqpotPy using pip:

```bash
pip install jaqpotpy
```



## Quick Start Example

```python
from sklearn.ensemble import RandomForestRegressor
from jaqpotpy.datasets import JaqpotpyDataset
from jaqpotpy.models import SklearnModel
from jaqpotpy.descriptors import RDKitDescriptors


# Create a dataset with molecular descriptors
dataset = JaqpotpyDataset(
    df=your_data,
    x_cols=['additional_features'],
    y_cols=['target'],
    smiles_cols=['smiles'],
    task='regression',
    featurizer=RDKitDescriptors()
)

# Initialize and train a model
model = SklearnModel(
    model =RandomForestRegressor(),
    dataset = dataset
)
model.fit(dataset)

# Deploy to Jaqpot platform
# Upload locally
jaqpot = Jaqpot()
jaqpot.login()
model.deploy_on_jaqpot(
    jaqpot=jaqpot,
    name="Demo model",
    description="This is my first Jaqpot model",
    visibility="PRIVATE",
)

```

## Web Interface and API Access

Once deployed, your model will be available at [https://app.jaqpot.org] (https://app.jaqpot.org) with:

- Deployed models with goodness-of-fit metrics
- Interactive web interface for predictions
- Applicability domain information for each prediction
- REST API endpoints for programmatic access
- Detailed documentation
- Usage statistics and monitoring

## Next Steps

- Check out our [detailed documentation](https://app.jaqpot.org/documentation)
- Explore [examples](https://github.com/ntua-unit-of-control-and-informatics/jaqpotpy/tree/main/examples) on our GitHub page 

## Support

For questions and support:
- Open an issue on our [GitHub repository](https://github.com/ntua-unit-of-control-and-informatics/jaqpotpy/)
- Contact us through the [Jaqpot platform](https://app.jaqpot.org/)
