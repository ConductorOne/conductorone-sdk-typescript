# RequestCatalogManagementServiceAddAppEntitlementsRequest

The RequestCatalogManagementServiceAddAppEntitlementsRequest object is used to add app requestable app entitlements to a request catalog.

## Example Usage

```typescript
import { RequestCatalogManagementServiceAddAppEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceAddAppEntitlementsRequest = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appEntitlements`                                                                                                                                | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                                                                    | :heavy_minus_sign:                                                                                                                               | List of entitlements to add to the request catalog.                                                                                              |
| `createRequests`                                                                                                                                 | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | Whether or not to create requests for newly added entitlements for users in the catalog.<br/> By default, this is false and no requests are created. |