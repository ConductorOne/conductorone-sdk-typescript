# CredentialInventoryPolicyServiceListResponse

The CredentialInventoryPolicyServiceListResponse message.

## Example Usage

```typescript
import { CredentialInventoryPolicyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialInventoryPolicyServiceListResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.CredentialInventoryPolicy](../../../sdk/models/shared/credentialinventorypolicy.md)[] | :heavy_minus_sign:                                                                            | The page of policies.                                                                         |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | A token to fetch the next page, or empty if there are no more results.                        |