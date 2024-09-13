# ProvisionInstance

A provision instance describes the specific configuration of an executing provision policy step including actions taken and notification id.

This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - completed
  - cancelled
  - errored
  - reassignedByError


## Example Usage

```typescript
import { ProvisionInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProvisionInstance = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `cancelledAction`                                                                                                                        | [shared.CancelledAction](../../../sdk/models/shared/cancelledaction.md)                                                                  | :heavy_minus_sign:                                                                                                                       | The outcome of a provision instance that is cancelled.                                                                                   |
| `completedAction`                                                                                                                        | [shared.CompletedAction](../../../sdk/models/shared/completedaction.md)                                                                  | :heavy_minus_sign:                                                                                                                       | The outcome of a provision instance that has been completed succesfully.                                                                 |
| `erroredAction`                                                                                                                          | [shared.ErroredAction](../../../sdk/models/shared/erroredaction.md)                                                                      | :heavy_minus_sign:                                                                                                                       | The outcome of a provision instance that has errored.                                                                                    |
| `notificationId`                                                                                                                         | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | This indicates the notification id for this step.                                                                                        |
| `provision`                                                                                                                              | [shared.Provision](../../../sdk/models/shared/provision.md)                                                                              | :heavy_minus_sign:                                                                                                                       | The provision step references a provision policy for this step.                                                                          |
| `reassignedByErrorAction`                                                                                                                | [shared.ReassignedByErrorAction](../../../sdk/models/shared/reassignedbyerroraction.md)                                                  | :heavy_minus_sign:                                                                                                                       | The ReassignedByErrorAction object describes the outcome of a policy step that has been reassigned because it had an error provisioning. |
| `state`                                                                                                                                  | [shared.ProvisionInstanceState](../../../sdk/models/shared/provisioninstancestate.md)                                                    | :heavy_minus_sign:                                                                                                                       | This property indicates the current state of this step.                                                                                  |