# AppManagedStateBindingRef

AppManagedStateBindingRef identifies an application discovered by a connector.

## Example Usage

```typescript
import { AppManagedStateBindingRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppManagedStateBindingRef = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `appId`                                                   | *string*                                                  | :heavy_minus_sign:                                        | ID of the application that owns the connector.            |
| `resourceId`                                              | *string*                                                  | :heavy_minus_sign:                                        | Resource ID of the discovered application.                |
| `resourceTypeId`                                          | *string*                                                  | :heavy_minus_sign:                                        | ID of the resource type used for discovered applications. |