# ProvisionerAssignment

ProvisionerAssignment defines how a provisioner is dynamically assigned.

This message contains a oneof named typ. Only a single field of the following list may be set at a time:
  - users
  - appOwners
  - group
  - manager
  - expression
  - entitlementOwners


## Example Usage

```typescript
import { ProvisionerAssignment } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProvisionerAssignment = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `appOwners`                                                                                     | [shared.AppOwnerProvisioner](../../../sdk/models/shared/appownerprovisioner.md)                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `entitlementOwners`                                                                             | [shared.EntitlementOwnerProvisioner](../../../sdk/models/shared/entitlementownerprovisioner.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `expression`                                                                                    | [shared.ExpressionProvisioner](../../../sdk/models/shared/expressionprovisioner.md)             | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `group`                                                                                         | [shared.GroupProvisioner](../../../sdk/models/shared/groupprovisioner.md)                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `manager`                                                                                       | [shared.ManagerProvisioner](../../../sdk/models/shared/managerprovisioner.md)                   | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `users`                                                                                         | [shared.UserProvisioner](../../../sdk/models/shared/userprovisioner.md)                         | :heavy_minus_sign:                                                                              | N/A                                                                                             |