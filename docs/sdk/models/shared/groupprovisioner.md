# GroupProvisioner

GroupProvisioner resolves to members of a specific group.

## Example Usage

```typescript
import { GroupProvisioner } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GroupProvisioner = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `allowReassignment`                              | *boolean*                                        | :heavy_minus_sign:                               | Whether the provisioner can reassign the task.   |
| `appGroupId`                                     | *string*                                         | :heavy_minus_sign:                               | The app group ID (entitlement ID).               |
| `appId`                                          | *string*                                         | :heavy_minus_sign:                               | The app ID containing the group.                 |
| `fallbackUserIds`                                | *string*[]                                       | :heavy_minus_sign:                               | Fallback user IDs if no group members are found. |