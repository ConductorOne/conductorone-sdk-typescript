# CreateManuallyManagedResourceTypeRequest

The CreateManuallyManagedResourceTypeRequest message.

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
| `displayName`                                                     | *string*                                                          | :heavy_check_mark:                                                | The displayName field.                                            |
| `resourceType`                                                    | [shared.ResourceType](../../../sdk/models/shared/resourcetype.md) | :heavy_check_mark:                                                | The resourceType field.                                           |