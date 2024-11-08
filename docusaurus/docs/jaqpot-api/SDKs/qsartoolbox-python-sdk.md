---
title: QsarToolBox Python SDK
sidebar_position: 2
---

## QsarToolBox

To retrieve a component (model, profiler or calculator) of QsarToolBox, you can retrieve a model by its ID using the `get_model_by_id` method. Here is an example:

```python
# To get all calculators of QsarToolBox:
calculators = jaqpot.get_model_by_id(model_id=6)

# To get all models of QsarToolBox:
models = jaqpot.get_model_by_id(model_id=1837)

# To get all profilers of QsarToolBox
profilers = jaqpot.get_model_by_id(model_id=1842)

```

### QsarToolBox Calculator

To take a prediction with any QsarToolBox calculator, you can use the `qsartoolbox_calculator_predict_sync` method. Here is an example:

```python
prediction = jaqpot.qsartoolbox_calculator_predict_sync(
    smiles="CC", calculator_guid="1804a854-9041-4495-9931-7414c22a5e49"
)
print(prediction)
```

### QsarToolBox Model

To take a prediction with any QsarToolBox model, you can use the `qsartoolbox_qsar_model_predict_sync` method as:

```python
prediction = jaqpot.qsartoolbox_qsar_model_predict_sync(
    smiles="CC", qsar_guid="c377150b-77ae-4f99-be14-357b85dd8d1f"
)
print(prediction)
```

### QsarToolBox Profiler

To take a prediction with any QsarToolBox profiler, you can use the `qsartoolbox_profiler_predict_sync` method. Here is an example:

```python
prediction = jaqpot.qsartoolbox_profiler_predict_sync(
    smiles="CC", profiler_guid="723eb011-3e5b-4565-9358-4c3d8620ba5d"
)
print(prediction)
```