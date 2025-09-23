# RequestCatalogManagementServiceUpdateAppEntitlementsRequest

The RequestCatalogManagementServiceUpdateAppEntitlementsRequest object is used to update app entitlements to a request catalog id.

## Example Usage

```typescript
import { RequestCatalogManagementServiceUpdateAppEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceUpdateAppEntitlementsRequest = {
  appEntitlements: [
    {},
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlements`                                                             | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_check_mark:                                                            | The entitlement to get from the request catalog.                              |