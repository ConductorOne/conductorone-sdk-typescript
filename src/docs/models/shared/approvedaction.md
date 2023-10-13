# ApprovedAction

The approved action indicates that the approvalinstance had an outcome of approved.


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `approvedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `entitlements`                                                                                | [AppEntitlementReference](../../models/shared/appentitlementreference.md)[]                   | :heavy_minus_sign:                                                                            | The entitlements that were approved. This will only ever be a list of one entitlement.        |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UserID that approved this step.                                                           |