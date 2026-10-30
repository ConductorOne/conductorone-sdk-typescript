# SessionPolicyServiceSearchRequest

The SessionPolicyServiceSearchRequest message.

## Example Usage

```typescript
import { SessionPolicyServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyServiceSearchRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `pageSize`                                                                  | *number*                                                                    | :heavy_minus_sign:                                                          | The pageSize field.                                                         |
| `pageToken`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The pageToken field.                                                        |
| `query`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Free-text search over the policy name. Empty matches all policies.          |
| `refs`                                                                      | [shared.SessionPolicyRef](../../../sdk/models/shared/sessionpolicyref.md)[] | :heavy_minus_sign:                                                          | Restrict results to these specific policies. Empty matches all policies.    |