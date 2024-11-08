 openapi-generator-cli generate \
    -i ../jaqpot-api/src/main/resources/openapi.yaml \
    -g markdown \
    -o docusaurus/docs/jaqpot-api/documentation/full-api-reference
    --additional-properties disallowAdditionalPropertiesIfNotPresent=true
