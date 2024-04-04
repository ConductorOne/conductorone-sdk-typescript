# RequestCatalogManagementServiceAddAccessEntitlementsRequest

The RequestCatalogManagementServiceAddAccessEntitlementsRequest message is used to add access entitlements to a request
 catalog to determine which users can view the request catalog.


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `accessEntitlements`                                                          | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[] | :heavy_minus_sign:                                                            | List of entitlements to add to the request catalog as access entitlements.    |