# RequestCatalogManagementServiceRemoveAccessEntitlementsRequest

The RequestCatalogManagementServiceRemoveAccessEntitlementsRequest message is used to remove access entitlements from a request catalog.
 The access entitlements are used to determine which users can view the request catalog.

## Example Usage

```typescript
import { RequestCatalogManagementServiceRemoveAccessEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceRemoveAccessEntitlementsRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `accessEntitlements`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The list of access entitlements to remove from the catalog.                   |