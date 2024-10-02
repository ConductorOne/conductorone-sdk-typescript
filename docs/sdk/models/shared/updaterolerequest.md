# UpdateRoleRequest

The UpdateRoleRequest message contains the role to update and the update mask.

## Example Usage

```typescript
import { UpdateRoleRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateRoleRequest = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `role`                                                         | [shared.RoleInput](../../../sdk/models/shared/roleinput.md)    | :heavy_minus_sign:                                             | Role is a role that can be assigned to a user in ConductorOne. |
| `updateMask`                                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |