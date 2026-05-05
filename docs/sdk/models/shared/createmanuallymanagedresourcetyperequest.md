# CreateManuallyManagedResourceTypeRequest

The request message for creating a manually managed resource type.

## Example Usage

```typescript
import { CreateManuallyManagedResourceTypeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateManuallyManagedResourceTypeRequest = {
  displayName: "Sam.Emmerich",
  resourceType: "ROLE",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `displayName`                                                     | *string*                                                          | :heavy_check_mark:                                                | The display name for the new resource type.                       |
| `resourceType`                                                    | [shared.ResourceType](../../../sdk/models/shared/resourcetype.md) | :heavy_check_mark:                                                | The category of the resource type (e.g., ROLE, GROUP, LICENSE).   |