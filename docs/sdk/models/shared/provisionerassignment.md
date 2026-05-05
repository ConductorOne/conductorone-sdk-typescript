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
| `appOwnerProvisioner`                                                                           | [shared.AppOwnerProvisioner](../../../sdk/models/shared/appownerprovisioner.md)                 | :heavy_minus_sign:                                                                              | AppOwnerProvisioner resolves to app owners.                                                     |
| `entitlementOwnerProvisioner`                                                                   | [shared.EntitlementOwnerProvisioner](../../../sdk/models/shared/entitlementownerprovisioner.md) | :heavy_minus_sign:                                                                              | EntitlementOwnerProvisioner resolves to entitlement owners.                                     |
| `expressionProvisioner`                                                                         | [shared.ExpressionProvisioner](../../../sdk/models/shared/expressionprovisioner.md)             | :heavy_minus_sign:                                                                              | ExpressionProvisioner evaluates CEL expressions to determine provisioners.                      |
| `groupProvisioner`                                                                              | [shared.GroupProvisioner](../../../sdk/models/shared/groupprovisioner.md)                       | :heavy_minus_sign:                                                                              | GroupProvisioner resolves to members of a specific group.                                       |
| `managerProvisioner`                                                                            | [shared.ManagerProvisioner](../../../sdk/models/shared/managerprovisioner.md)                   | :heavy_minus_sign:                                                                              | ManagerProvisioner resolves to the user's manager.                                              |
| `userProvisioner`                                                                               | [shared.UserProvisioner](../../../sdk/models/shared/userprovisioner.md)                         | :heavy_minus_sign:                                                                              | UserProvisioner assigns specific users as provisioners.                                         |