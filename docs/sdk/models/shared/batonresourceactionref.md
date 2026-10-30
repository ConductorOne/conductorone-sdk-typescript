# BatonResourceActionRef

BatonResourceActionRef describes dispatch to a connector resource-create
 action (for example, a group template that creates a group in the connected
 application).

## Example Usage

```typescript
import { BatonResourceActionRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BatonResourceActionRef = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `appId`                                                           | *string*                                                          | :heavy_minus_sign:                                                | The app the resource is created in.                               |
| `batonActionDisplayName`                                          | *string*                                                          | :heavy_minus_sign:                                                | The connector-defined display name of the resource-create action. |
| `batonActionName`                                                 | *string*                                                          | :heavy_minus_sign:                                                | The connector-defined name of the resource-create action.         |
| `connectorId`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The connector that executes the resource-create action.           |
| `resourceTypeId`                                                  | *string*                                                          | :heavy_minus_sign:                                                | The type of resource the action creates (for example, "group").   |