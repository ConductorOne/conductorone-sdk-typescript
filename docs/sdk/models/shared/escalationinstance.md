# EscalationInstance

The EscalationInstance message.

This message contains a oneof named escalation_policy. Only a single field of the following list may be set at a time:
  - replacePolicy
  - reassignToApprovers


## Example Usage

```typescript
import { EscalationInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EscalationInstance = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `alreadyEscalated`                                                                            | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The alreadyEscalated field.                                                                   |
| `escalationComment`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The escalationComment field.                                                                  |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reassignToApprovers`                                                                         | [shared.ReassignToApprovers](../../../sdk/models/shared/reassigntoapprovers.md)               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `replacePolicy`                                                                               | [shared.ReplacePolicy](../../../sdk/models/shared/replacepolicy.md)                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |