# EdgeInferenceConnection

EdgeInferenceConnection is a Vault-backed credential for one inference catalog provider.

## Example Usage

```typescript
import { EdgeInferenceConnection } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceConnection = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `catalogEntryId`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | Catalog entry, e.g. anthropic. Unique within the Edge.                      |
| `region`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The region field.                                                           |
| `secretId`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | The secretId field.                                                         |
| `variantId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Catalog variant of the entry; it sets the provider profile and destination. |
| `vaultBoundaryId`                                                           | *string*                                                                    | :heavy_minus_sign:                                                          | The vaultBoundaryId field.                                                  |