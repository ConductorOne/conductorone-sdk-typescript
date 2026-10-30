# CredentialInventoryPolicyServiceSearchRequest

The CredentialInventoryPolicyServiceSearchRequest message.

## Example Usage

```typescript
import { CredentialInventoryPolicyServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialInventoryPolicyServiceSearchRequest = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                          | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The maximum number of results to return per page.                                                   |
| `pageToken`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | A pagination token from a previous Search response.                                                 |
| `query`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Free-text search over the policy name. Empty matches all policies.                                  |
| `refs`                                                                                              | [shared.CredentialInventoryPolicyRef](../../../sdk/models/shared/credentialinventorypolicyref.md)[] | :heavy_minus_sign:                                                                                  | Restrict results to these specific policies. Empty matches all policies.                            |