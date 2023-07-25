# ListAppUsersForIdentityWithGrantResponse

 This returns a list of app users for the identity in the app. If that app user also has a grant to the entitlement from the request, data about the grant is also returned. It will always return ALL app users for this identity, but only SOME may have grant data.



## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `bindings`                                                                      | [AppEntitlementUserBinding](../../models/shared/appentitlementuserbinding.md)[] | :heavy_minus_sign:                                                              |  The list of app users that may also have grant information.<br/>               |