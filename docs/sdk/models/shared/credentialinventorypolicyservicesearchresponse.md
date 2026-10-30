# CredentialInventoryPolicyServiceSearchResponse

The CredentialInventoryPolicyServiceSearchResponse message.

## Example Usage

```typescript
import { CredentialInventoryPolicyServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialInventoryPolicyServiceSearchResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.CredentialInventoryPolicy](../../../sdk/models/shared/credentialinventorypolicy.md)[] | :heavy_minus_sign:                                                                            | The page of matching policies.                                                                |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | A token to fetch the next page, or empty if there are no more results.                        |