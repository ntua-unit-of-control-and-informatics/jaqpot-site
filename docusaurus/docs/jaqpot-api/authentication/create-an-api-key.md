---
sidebar_position: 1
---

# Create an API key

API keys are used to authenticate requests to the **Jaqpot API**. You can create an API key for your account and use it to access Jaqpot programmatically by visiting the [API Key dashboard page](https://app.jaqpot.org/dashboard/api-keys).

Once an API key is created, you will receive a **client key** and a **client secret**. 

**Keep these credentials secure and do not share them with anyone.**

## How to use the API Key

To authenticate API requests, include the **client key** as the username and the **client secret** as the password in the headers `X-Api-Key` and `X-Api-Secret` of your requests.

### Example Request

```bash
curl -X GET "https://api.jaqpot.org/v1/models" \
  -H "X-Api-Key: <client_key>" \
  -H "X-Api-Secret: <client_secret>"
```

or use the [Python SDK](../SDKs/python-sdk/install-the-sdk.md) 
