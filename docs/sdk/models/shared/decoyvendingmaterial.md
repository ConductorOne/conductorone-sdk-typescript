# DecoyVendingMaterial

DecoyVendingMaterial carries the freshly-vended secret material returned
 exactly once at Create or Rotate.

This message contains a oneof named material. Only a single field of the following list may be set at a time:
  - clientCredential
  - accessToken
  - workloadFederation


## Example Usage

```typescript
import { DecoyVendingMaterial } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DecoyVendingMaterial = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                           | [shared.DecoyAccessTokenMaterial](../../../sdk/models/shared/decoyaccesstokenmaterial.md)               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `clientCredential`                                                                                      | [shared.DecoyClientCredentialMaterial](../../../sdk/models/shared/decoyclientcredentialmaterial.md)     | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `workloadFederation`                                                                                    | [shared.DecoyWorkloadFederationMaterial](../../../sdk/models/shared/decoyworkloadfederationmaterial.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |