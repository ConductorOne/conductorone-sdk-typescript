# SSOApplicationServiceParseSAMLServiceProviderMetadataResponse

SSOApplicationServiceParseSAMLServiceProviderMetadataResponse returns the
 SAML configuration derived from one metadata document and every finding the
 parser raised about it.

## Example Usage

```typescript
import { SSOApplicationServiceParseSAMLServiceProviderMetadataResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceParseSAMLServiceProviderMetadataResponse = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `config`                                                                                                           | [shared.SSOApplicationSAMLConfig](../../../sdk/models/shared/ssoapplicationsamlconfig.md)                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `findings`                                                                                                         | [shared.SAMLMetadataFinding](../../../sdk/models/shared/samlmetadatafinding.md)[]                                  | :heavy_minus_sign:                                                                                                 | Everything the parser noticed about the document, including requirements<br/> it could not map into the configuration. |