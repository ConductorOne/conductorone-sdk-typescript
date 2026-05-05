# CreateManuallyManagedAppResourceRequest

The request message for creating a manually managed app resource.

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
| `description`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | An optional description for the new resource.                                                                      |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The display name for the new resource.                                                                             |
| `matchBatonId`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | If supplied, it's implied that the resource is created before sync and needs to be merged with connector resource. |
| `resourceOwnerUserIds`                                                                                             | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | C1 user IDs to assign as owners of this resource.                                                                  |