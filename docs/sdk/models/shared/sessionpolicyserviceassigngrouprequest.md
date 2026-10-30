# SessionPolicyServiceAssignGroupRequest

The SessionPolicyServiceAssignGroupRequest message.

## Example Usage

```typescript
import { SessionPolicyServiceAssignGroupRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyServiceAssignGroupRequest = {
  groupAppEntitlementId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `groupAppEntitlementId`                                                     | *string*                                                                    | :heavy_check_mark:                                                          | The group's app-entitlement ID. Every member of the group becomes assigned. |