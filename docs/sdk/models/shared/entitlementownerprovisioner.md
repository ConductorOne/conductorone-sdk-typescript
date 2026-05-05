# EntitlementOwnerProvisioner

EntitlementOwnerProvisioner resolves to entitlement owners.

## Example Usage

```typescript
import { EntitlementOwnerProvisioner } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementOwnerProvisioner = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `allowReassignment`                                   | *boolean*                                             | :heavy_minus_sign:                                    | Whether the provisioner can reassign the task.        |
| `fallbackUserIds`                                     | *string*[]                                            | :heavy_minus_sign:                                    | Fallback user IDs if no entitlement owners are found. |