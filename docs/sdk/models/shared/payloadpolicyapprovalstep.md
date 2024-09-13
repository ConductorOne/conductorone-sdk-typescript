# PayloadPolicyApprovalStep

The PayloadPolicyApprovalStep message.

## Example Usage

```typescript
import { PayloadPolicyApprovalStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PayloadPolicyApprovalStep = {};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expanded`                                                                                                                                                                                       | [shared.PayloadPolicyApprovalStepExpanded](../../../sdk/models/shared/payloadpolicyapprovalstepexpanded.md)[]                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | List of serialized related objects.                                                                                                                                                              |
| `taskView`                                                                                                                                                                                       | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                               | Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information. |