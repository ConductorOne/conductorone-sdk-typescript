# Approval

The Approval message.

This message contains a oneof named typ. Only a single field of the following list may be set at a time:
  - users
  - manager
  - appOwners
  - group
  - self
  - entitlementOwners



## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appGroupApproval`                                                          | [AppGroupApproval](../../models/shared/appgroupapproval.md)                 | :heavy_minus_sign:                                                          | The AppGroupApproval message.                                               |
| `appOwnerApproval`                                                          | [AppOwnerApproval](../../models/shared/appownerapproval.md)                 | :heavy_minus_sign:                                                          | The AppOwnerApproval message.                                               |
| `entitlementOwnerApproval`                                                  | [EntitlementOwnerApproval](../../models/shared/entitlementownerapproval.md) | :heavy_minus_sign:                                                          | The EntitlementOwnerApproval message.                                       |
| `managerApproval`                                                           | [ManagerApproval](../../models/shared/managerapproval.md)                   | :heavy_minus_sign:                                                          | The ManagerApproval message.                                                |
| `selfApproval`                                                              | [SelfApproval](../../models/shared/selfapproval.md)                         | :heavy_minus_sign:                                                          | The SelfApproval message.                                                   |
| `userApproval`                                                              | [UserApproval](../../models/shared/userapproval.md)                         | :heavy_minus_sign:                                                          | The UserApproval message.                                                   |
| `allowReassignment`                                                         | *boolean*                                                                   | :heavy_minus_sign:                                                          | The allowReassignment field.                                                |
| `assigned`                                                                  | *boolean*                                                                   | :heavy_minus_sign:                                                          | The assigned field.                                                         |
| `requireApprovalReason`                                                     | *boolean*                                                                   | :heavy_minus_sign:                                                          | The requireApprovalReason field.                                            |
| `requireReassignmentReason`                                                 | *boolean*                                                                   | :heavy_minus_sign:                                                          | The requireReassignmentReason field.                                        |