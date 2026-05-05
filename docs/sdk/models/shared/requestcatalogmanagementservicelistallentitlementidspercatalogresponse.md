# RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse

The response message containing all requestable entitlement references in the catalog.

## Example Usage

```typescript
import { RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value:
  RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `refs`                                                                        | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | The complete list of app entitlement references in this catalog.              |