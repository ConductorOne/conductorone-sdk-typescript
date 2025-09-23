# Escalation

The Escalation message.

This message contains a oneof named escalation_policy. Only a single field of the following list may be set at a time:
  - replacePolicy
  - reassignToApprovers


## Example Usage

```typescript
import { Escalation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Escalation = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `escalationComment`                                                             | *string*                                                                        | :heavy_minus_sign:                                                              | The escalationComment field.                                                    |
| `expiration`                                                                    | *number*                                                                        | :heavy_minus_sign:                                                              | The expiration field.                                                           |
| `reassignToApprovers`                                                           | [shared.ReassignToApprovers](../../../sdk/models/shared/reassigntoapprovers.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `replacePolicy`                                                                 | [shared.ReplacePolicy](../../../sdk/models/shared/replacepolicy.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |