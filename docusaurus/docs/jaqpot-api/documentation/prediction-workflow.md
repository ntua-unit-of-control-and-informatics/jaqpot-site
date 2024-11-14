---
title: Prediction Workflow
sidebar_position: 3
---

# Prediction Workflow

When making predictions with Jaqpot models, the process is asynchronous. Here's how it works:

## Steps

1. Send prediction request
  ```bash
  POST /model/{id}/predict
  ```
2. Get dataset ID from response header
```Location: /dataset/123456```

3. Query dataset status until complete
```bash
GET /dataset/123456
```
The dataset will be in one of these states:

- EXECUTING: Waiting to be processed
- SUCCESS: Prediction completed successfully
- FAILURE: Prediction failed


## Example Flow
```python
# 1. Make prediction request
response = POST /model/42/predict
dataset_id = get_id_from_location_header(response.headers["Location"])

# 2. Poll dataset until complete
retries = 0
while retries < 10:
    dataset = GET /dataset/{dataset_id}

    if dataset.status in ["SUCCESS", "FAILURE"]:
        break
        
    # Wait 2 seconds before next check
    sleep(2)
    retries += 1

# 3. Handle result
if dataset.status == "SUCCESS":
    predictions = dataset.predictions
else:
    handle_error(dataset.error)
```
### Notes
- Maximum recommended polling attempts: 10
- Recommended interval between checks: 2 seconds
- Location header format: /dataset/{id}
I- f polling exceeds maximum attempts, consider the prediction failed

### Common Errors

- Dataset not found: Invalid dataset ID
- Maximum retries exceeded: Prediction taking too long
- Dataset in FAILURE state: Check error message in dataset response

## SDK Implementation
All official Jaqpot SDKs handle this polling mechanism automatically. For example using the Java/Kotlin SDK:
```kotlin
val client = JaqpotApiClient(apiKey, apiSecret)
val result = client.predictSync(modelId, input) // Handles polling internally
```
