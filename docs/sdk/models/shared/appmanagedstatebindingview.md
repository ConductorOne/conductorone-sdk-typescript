# AppManagedStateBindingView

AppManagedStateBindingView contains a managed-state binding and paths to its related objects.

## Example Usage

```typescript
import { AppManagedStateBindingView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppManagedStateBindingView = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `appManagementStateBinding`                                                           | [shared.AppManagedStateBinding](../../../sdk/models/shared/appmanagedstatebinding.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `appPath`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | Path of the application that owns the connector.                                      |
| `resourcePath`                                                                        | *string*                                                                              | :heavy_minus_sign:                                                                    | Path of the connector resource representing the discovered application.               |