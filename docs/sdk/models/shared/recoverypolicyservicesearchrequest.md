# RecoveryPolicyServiceSearchRequest

The RecoveryPolicyServiceSearchRequest message.

## Example Usage

```typescript
import { RecoveryPolicyServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RecoveryPolicyServiceSearchRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `pageSize`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | The maximum number of results to return per page.                             |
| `pageToken`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | A pagination token from a previous Search response.                           |
| `query`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Free-text search over the policy name. Empty matches all policies.            |
| `refs`                                                                        | [shared.RecoveryPolicyRef](../../../sdk/models/shared/recoverypolicyref.md)[] | :heavy_minus_sign:                                                            | Restrict results to these specific policies. Empty matches all policies.      |