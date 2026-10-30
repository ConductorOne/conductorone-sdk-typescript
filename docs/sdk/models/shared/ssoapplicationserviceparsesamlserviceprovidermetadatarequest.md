# SSOApplicationServiceParseSAMLServiceProviderMetadataRequest

SSOApplicationServiceParseSAMLServiceProviderMetadataRequest carries one
 SAML service-provider metadata document to parse.

## Example Usage

```typescript
import { SSOApplicationServiceParseSAMLServiceProviderMetadataRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceParseSAMLServiceProviderMetadataRequest = {
  metadataXml: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `metadataXml`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The SP metadata XML document, exactly as downloaded or exported from the<br/> service provider. Maximum 1 MiB. The document is parsed, never stored. |