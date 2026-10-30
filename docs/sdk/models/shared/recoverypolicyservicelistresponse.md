# RecoveryPolicyServiceListResponse

The RecoveryPolicyServiceListResponse message.

## Example Usage

```typescript
import { RecoveryPolicyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RecoveryPolicyServiceListResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `list`                                                                  | [shared.RecoveryPolicy](../../../sdk/models/shared/recoverypolicy.md)[] | :heavy_minus_sign:                                                      | The page of policies.                                                   |
| `nextPageToken`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | A token to fetch the next page, or empty if there are no more results.  |