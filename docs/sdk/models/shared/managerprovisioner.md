# ManagerProvisioner

ManagerProvisioner resolves to the user's manager.

## Example Usage

```typescript
import { ManagerProvisioner } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ManagerProvisioner = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `allowReassignment`                            | *boolean*                                      | :heavy_minus_sign:                             | Whether the provisioner can reassign the task. |
| `fallbackUserIds`                              | *string*[]                                     | :heavy_minus_sign:                             | Fallback user IDs if no manager is found.      |