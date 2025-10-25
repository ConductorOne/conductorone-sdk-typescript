# ProvisionInstance

A provision instance describes the specific configuration of an executing provision policy step including actions taken and notification id.

This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - completed
  - cancelled
  - errored
  - reassignedByError
  - skipped


## Example Usage

```typescript
import { ProvisionInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProvisionInstance = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `batonActionInvocationId`                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | This indicates the account lifecycle action id for this step.                           |
| `cancelled`                                                                             | [shared.CancelledAction](../../../sdk/models/shared/cancelledaction.md)                 | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `completed`                                                                             | [shared.CompletedAction](../../../sdk/models/shared/completedaction.md)                 | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `errored`                                                                               | [shared.ErroredAction](../../../sdk/models/shared/erroredaction.md)                     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `externalTicketId`                                                                      | *string*                                                                                | :heavy_minus_sign:                                                                      | This indicates the external ticket id for this step.                                    |
| `externalTicketProvisionerConfigId`                                                     | *string*                                                                                | :heavy_minus_sign:                                                                      | This indicates the external ticket provisioner config id for this step.                 |
| `notificationId`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | This indicates the notification id for this step.                                       |
| `provision`                                                                             | [shared.Provision](../../../sdk/models/shared/provision.md)                             | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `reassignedByError`                                                                     | [shared.ReassignedByErrorAction](../../../sdk/models/shared/reassignedbyerroraction.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `skipped`                                                                               | [shared.SkippedAction](../../../sdk/models/shared/skippedaction.md)                     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `state`                                                                                 | [shared.ProvisionInstanceState](../../../sdk/models/shared/provisioninstancestate.md)   | :heavy_minus_sign:                                                                      | This property indicates the current state of this step.                                 |
| `webhookId`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | This indicates the webhook id for this step.                                            |
| `webhookInstanceId`                                                                     | *string*                                                                                | :heavy_minus_sign:                                                                      | This indicates the webhook instance id for this step.                                   |