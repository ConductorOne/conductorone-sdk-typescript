# PolicyPostActions

These are actions to happen after a policy is complete.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - certifyRemediateImmediately


## Example Usage

```typescript
import { PolicyPostActions } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyPostActions = {};
```

## Fields

| Field                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `certifyRemediateImmediately`                                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                  | ONLY valid when used in a CERTIFY Ticket Type:<br/> Causes any deprovision or change in a grant to be applied when Certify Ticket is closed.<br/>This field is part of the `action` oneof.<br/>See the documentation for `c1.api.policy.v1.PolicyPostActions` for more details. |