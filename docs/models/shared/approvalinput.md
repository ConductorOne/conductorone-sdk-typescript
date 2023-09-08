# ApprovalInput

The Approval message.

This message contains a oneof named typ. Only a single field of the following list may be set at a time:
  - users
  - manager
  - appOwners
  - group
  - self
  - entitlementOwners



## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `appGroupApproval`                                                                                                                              | [AppGroupApprovalInput](../../models/shared/appgroupapprovalinput.md)                                                                           | :heavy_minus_sign:                                                                                                                              | The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.                         |
| `appOwnerApproval`                                                                                                                              | [AppOwnerApprovalInput](../../models/shared/appownerapprovalinput.md)                                                                           | :heavy_minus_sign:                                                                                                                              | App owner approval provides the configuration for an approval step when the app owner is the target.                                            |
| `entitlementOwnerApproval`                                                                                                                      | [EntitlementOwnerApprovalInput](../../models/shared/entitlementownerapprovalinput.md)                                                           | :heavy_minus_sign:                                                                                                                              | The entitlement owner approval allows configuration of the approval step when the target approvers are the entitlement owners.                  |
| `managerApproval`                                                                                                                               | [ManagerApprovalInput](../../models/shared/managerapprovalinput.md)                                                                             | :heavy_minus_sign:                                                                                                                              | The manager approval object provides configuration options for approval when the target of the approval is the manager of the user in the task. |
| `selfApproval`                                                                                                                                  | [SelfApprovalInput](../../models/shared/selfapprovalinput.md)                                                                                   | :heavy_minus_sign:                                                                                                                              | The self approval object describes the configuration of a policy step that needs to be approved by the target of the request.                   |
| `userApproval`                                                                                                                                  | [UserApprovalInput](../../models/shared/userapprovalinput.md)                                                                                   | :heavy_minus_sign:                                                                                                                              | The user approval object describes the approval configuration of a policy step that needs to be approved by a specific list of users.           |