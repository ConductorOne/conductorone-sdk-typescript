# WebhookSource

The WebhookSource message.

This message contains a oneof named source. Only a single field of the following list may be set at a time:
  - test
  - policyPostAction
  - approvalStep
  - provisionStep
  - workflowStep


## Example Usage

```typescript
import { WebhookSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookSource = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `webhookSourceApprovalStep`                                                                         | [shared.WebhookSourceApprovalStep](../../../sdk/models/shared/webhooksourceapprovalstep.md)         | :heavy_minus_sign:                                                                                  | The WebhookSourceApprovalStep message.                                                              |
| `webhookSourcePolicyPostAction`                                                                     | [shared.WebhookSourcePolicyPostAction](../../../sdk/models/shared/webhooksourcepolicypostaction.md) | :heavy_minus_sign:                                                                                  | The WebhookSourcePolicyPostAction message.                                                          |
| `webhookSourceProvisionStep`                                                                        | [shared.WebhookSourceProvisionStep](../../../sdk/models/shared/webhooksourceprovisionstep.md)       | :heavy_minus_sign:                                                                                  | The WebhookSourceProvisionStep message.                                                             |
| `webhookSourceTest`                                                                                 | [shared.WebhookSourceTest](../../../sdk/models/shared/webhooksourcetest.md)                         | :heavy_minus_sign:                                                                                  | The WebhookSourceTest message.                                                                      |
| `webhookSourceWorkflowStep`                                                                         | [shared.WebhookSourceWorkflowStep](../../../sdk/models/shared/webhooksourceworkflowstep.md)         | :heavy_minus_sign:                                                                                  | The WebhookSourceWorkflowStep message.                                                              |