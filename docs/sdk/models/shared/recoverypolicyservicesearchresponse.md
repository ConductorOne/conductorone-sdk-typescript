# RecoveryPolicyServiceSearchResponse

The RecoveryPolicyServiceSearchResponse message.

## Example Usage

```typescript
import { RecoveryPolicyServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RecoveryPolicyServiceSearchResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `list`                                                                  | [shared.RecoveryPolicy](../../../sdk/models/shared/recoverypolicy.md)[] | :heavy_minus_sign:                                                      | The page of matching policies.                                          |
| `nextPageToken`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | A token to fetch the next page, or empty if there are no more results.  |