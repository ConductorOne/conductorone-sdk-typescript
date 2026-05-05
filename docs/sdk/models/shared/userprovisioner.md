# UserProvisioner

UserProvisioner assigns specific users as provisioners.

## Example Usage

```typescript
import { UserProvisioner } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserProvisioner = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `allowReassignment`                            | *boolean*                                      | :heavy_minus_sign:                             | Whether the provisioner can reassign the task. |
| `userIds`                                      | *string*[]                                     | :heavy_minus_sign:                             | The user IDs to assign as provisioners.        |