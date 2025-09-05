# ApprovalInstance

The approval instance object describes the way a policy step should be approved as well as its outcomes and state.

This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - approved
  - denied
  - reassigned
  - restarted
  - reassignedByError
  - skipped


## Example Usage

```typescript
import { ApprovalInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ApprovalInstance = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `approval`                                                                              | [shared.Approval](../../../sdk/models/shared/approval.md)                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `approved`                                                                              | [shared.ApprovedAction](../../../sdk/models/shared/approvedaction.md)                   | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `denied`                                                                                | [shared.DeniedAction](../../../sdk/models/shared/deniedaction.md)                       | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `escalationInstance`                                                                    | [shared.EscalationInstance](../../../sdk/models/shared/escalationinstance.md)           | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `reassigned`                                                                            | [shared.ReassignedAction](../../../sdk/models/shared/reassignedaction.md)               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `reassignedByError`                                                                     | [shared.ReassignedByErrorAction](../../../sdk/models/shared/reassignedbyerroraction.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `restarted`                                                                             | [shared.RestartAction](../../../sdk/models/shared/restartaction.md)                     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `skipped`                                                                               | [shared.SkippedAction](../../../sdk/models/shared/skippedaction.md)                     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `state`                                                                                 | [shared.ApprovalInstanceState](../../../sdk/models/shared/approvalinstancestate.md)     | :heavy_minus_sign:                                                                      | The state of the approval instance                                                      |