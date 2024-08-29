# DelegatedProvision

This provision step indicates that we should delegate provisioning to the configuration of another app entitlement. This app entitlement does not have to be one from the same app, but MUST be configured as a proxy binding leading into this entitlement.


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `appId`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | The AppID of the entitlement to delegate provisioning to.                                |
| `entitlementId`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the entitlement we are delegating provisioning to.                             |
| `implicit`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | If true, a binding will be automatically created from the entitlement of the parent app. |