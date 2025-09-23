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
| `approvalStep`                                                                                      | [shared.WebhookSourceApprovalStep](../../../sdk/models/shared/webhooksourceapprovalstep.md)         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `policyPostAction`                                                                                  | [shared.WebhookSourcePolicyPostAction](../../../sdk/models/shared/webhooksourcepolicypostaction.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `provisionStep`                                                                                     | [shared.WebhookSourceProvisionStep](../../../sdk/models/shared/webhooksourceprovisionstep.md)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `test`                                                                                              | [shared.WebhookSourceTest](../../../sdk/models/shared/webhooksourcetest.md)                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `workflowStep`                                                                                      | [shared.WebhookSourceWorkflowStep](../../../sdk/models/shared/webhooksourceworkflowstep.md)         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |