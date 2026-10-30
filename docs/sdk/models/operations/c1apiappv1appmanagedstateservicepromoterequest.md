# C1ApiAppV1AppManagedStateServicePromoteRequest

## Example Usage

```typescript
import { C1ApiAppV1AppManagedStateServicePromoteRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppManagedStateServicePromoteRequest = {
  appId: "<id>",
  resourceTypeId: "<id>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `resourceTypeId`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `resourceId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `promoteAppManagedStateBindingRequest`                                                                            | [shared.PromoteAppManagedStateBindingRequest](../../../sdk/models/shared/promoteappmanagedstatebindingrequest.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |