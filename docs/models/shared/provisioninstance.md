# ProvisionInstance

The ProvisionInstance message.

This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - completed
  - cancelled
  - errored
  - reassignedByError



## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cancelledAction`                                                         | [CancelledAction](../../models/shared/cancelledaction.md)                 | :heavy_minus_sign:                                                        | The CancelledAction message.                                              |
| `completedAction`                                                         | [CompletedAction](../../models/shared/completedaction.md)                 | :heavy_minus_sign:                                                        | The CompletedAction message.                                              |
| `erroredAction`                                                           | [ErroredAction](../../models/shared/erroredaction.md)                     | :heavy_minus_sign:                                                        | The ErroredAction message.                                                |
| `provision`                                                               | [Provision](../../models/shared/provision.md)                             | :heavy_minus_sign:                                                        | The Provision message.                                                    |
| `reassignedByErrorAction`                                                 | [ReassignedByErrorAction](../../models/shared/reassignedbyerroraction.md) | :heavy_minus_sign:                                                        | The ReassignedByErrorAction message.                                      |
| `notificationId`                                                          | *string*                                                                  | :heavy_minus_sign:                                                        | The notificationId field.                                                 |
| `state`                                                                   | [ProvisionInstanceState](../../models/shared/provisioninstancestate.md)   | :heavy_minus_sign:                                                        | The state field.                                                          |