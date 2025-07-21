# RequestCatalogManagementServiceRemoveAppEntitlementsRequest

The RequestCatalogManagementServiceRemoveAppEntitlementsRequest message is used to remove app entitlements from a request catalog.

## Example Usage

```typescript
import { RequestCatalogManagementServiceRemoveAppEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceRemoveAppEntitlementsRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `appEntitlements`                                                             | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The list of app entitlements to remove from the catalog.                      |