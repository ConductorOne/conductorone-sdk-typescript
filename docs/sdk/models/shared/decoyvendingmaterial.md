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

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `decoyAccessTokenMaterial`                                                                                                                  | [shared.DecoyAccessTokenMaterial](../../../sdk/models/shared/decoyaccesstokenmaterial.md)                                                   | :heavy_minus_sign:                                                                                                                          | DecoyAccessTokenMaterial is returned for AccessToken decoys.                                                                                |
| `decoyClientCredentialMaterial`                                                                                                             | [shared.DecoyClientCredentialMaterial](../../../sdk/models/shared/decoyclientcredentialmaterial.md)                                         | :heavy_minus_sign:                                                                                                                          | DecoyClientCredentialMaterial is returned for UserClientCredential and<br/> ConnectorClient decoys.                                         |
| `decoyWorkloadFederationMaterial`                                                                                                           | [shared.DecoyWorkloadFederationMaterial](../../../sdk/models/shared/decoyworkloadfederationmaterial.md)                                     | :heavy_minus_sign:                                                                                                                          | DecoyWorkloadFederationMaterial is returned for WorkloadFederation<br/> decoys. No vended secret; the operator binds the trust on the IdP side. |