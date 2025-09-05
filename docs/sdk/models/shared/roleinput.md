# RoleInput

Role is a role that can be assigned to a user in ConductorOne.

## Example Usage

```typescript
import { RoleInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RoleInput = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the role.                                                                 |
| `permissions`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The list of permissions this role has.                                                        |
| `serviceRoles`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The list of serviceRoles that this role has.                                                  |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |