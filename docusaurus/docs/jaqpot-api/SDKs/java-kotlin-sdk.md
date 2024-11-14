---
title: Kotlin/Java SDK
sidebar_position: 2
---

# Kotlin/Java SDK

The SDK lets you use Jaqpot models and predictions in your Java or Kotlin applications.

## Get your API Keys
You'll need an API key and secret from your Jaqpot account. Create them by following the [API keys guide](../authentication/create-an-api-key).

**The API keys are valid for 6 months from their generation date. Please store these keys securely, as they cannot be retrieved from Jaqpot after initial generation. If your keys are lost or expired, you will need to generate new ones by following the same steps above.**

## Add to your project

Maven central page: https://central.sonatype.com/artifact/org.jaqpot/kotlin-sdk

For Gradle (Kotlin DSL):
```kotlin
implementation("org.jaqpot:kotlin-sdk:0.4.0") // or the latest version of the SDK
```
For Maven:
```xml
<dependency>
    <groupId>org.jaqpot</groupId>
    <artifactId>kotlin-sdk</artifactId>
    <version>0.4.0</version>
</dependency>
```
## Basic usage
Make predictions in Java:
```kotlin
JaqpotApiClient jaqpotApiClient = 
    new JaqpotApiClient(System.getenv("JAQPOT_API_KEY"), System.getenv("JAQPOT_API_SECRET"));
Dataset dataset = jaqpotApiClient
        .predictSync(
                modelId,
                List.of(
                        Map.of("X1", "1", "X2", "2", "X3", "3", "X4", "4")
                )
        );
System.out.println(dataset)
```

or in Kotlin:
```kotlin
val jaqpotApiClient = 
    JaqpotApiClient(System.getenv("JAQPOT_API_KEY"), System.getenv("JAQPOT_API_SECRET"))
val dataset = jaqpotApiClient.predictSync(
    modelId,
    listOf(
        mapOf("X1" to "1", "X2" to "2", "X3" to "3", "X4" to "4")
    )
)
println(dataset)
```
## Setting API Keys
Use environment variables:
```bash
export JAQPOT_API_KEY=your_key_here
export JAQPOT_API_SECRET=your_secret_here
```
Or pass them directly to the client:
```kotlin
val client = JaqpotApiClient("your-key", "your-secret")
```

## Error handling
The SDK throws JaqpotSDKException on errors like:

- Wrong API credentials
- Model not found
- Failed predictions
- Network issues

