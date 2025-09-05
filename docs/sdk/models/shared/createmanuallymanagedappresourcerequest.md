# CreateManuallyManagedAppResourceRequest

The CreateManuallyManagedAppResourceRequest message.

## Example Usage

```typescript
import { CreateManuallyManagedAppResourceRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateManuallyManagedAppResourceRequest = {
  displayName: "Jaron_Christiansen",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The description field.                                                                                             |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The displayName field.                                                                                             |
| `matchBatonId`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | If supplied, it's implied that the resource is created before sync and needs to be merged with connector resource. |
| `resourceOwnerUserIds`                                                                                             | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | The resourceOwnerUserIds field.                                                                                    |