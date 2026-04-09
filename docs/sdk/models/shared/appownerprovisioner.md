# AppOwnerProvisioner

AppOwnerProvisioner resolves to app owners.

## Example Usage

```typescript
import { AppOwnerProvisioner } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppOwnerProvisioner = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `allowReassignment`                            | *boolean*                                      | :heavy_minus_sign:                             | Whether the provisioner can reassign the task. |
| `fallbackUserIds`                              | *string*[]                                     | :heavy_minus_sign:                             | Fallback user IDs if no app owners are found.  |