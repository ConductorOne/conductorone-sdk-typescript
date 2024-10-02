# ResponsePolicyApprovalStep

The ResponsePolicyApprovalStep message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - approve
  - deny
  - reassign
  - replacePolicy


## Example Usage

```typescript
import { ResponsePolicyApprovalStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResponsePolicyApprovalStep = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `responsePolicyApprovalStepApprove`                                                                             | [shared.ResponsePolicyApprovalStepApprove](../../../sdk/models/shared/responsepolicyapprovalstepapprove.md)     | :heavy_minus_sign:                                                                                              | The ResponsePolicyApprovalStepApprove message.                                                                  |
| `responsePolicyApprovalStepDeny`                                                                                | [shared.ResponsePolicyApprovalStepDeny](../../../sdk/models/shared/responsepolicyapprovalstepdeny.md)           | :heavy_minus_sign:                                                                                              | The ResponsePolicyApprovalStepDeny message.                                                                     |
| `responsePolicyApprovalStepReassign`                                                                            | [shared.ResponsePolicyApprovalStepReassign](../../../sdk/models/shared/responsepolicyapprovalstepreassign.md)   | :heavy_minus_sign:                                                                                              | The ResponsePolicyApprovalStepReassign message.                                                                 |
| `responsePolicyApprovalReplacePolicy`                                                                           | [shared.ResponsePolicyApprovalReplacePolicy](../../../sdk/models/shared/responsepolicyapprovalreplacepolicy.md) | :heavy_minus_sign:                                                                                              | The ResponsePolicyApprovalReplacePolicy message.                                                                |
| `version`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | version contains the constant value "v1". Future versions of the Webhook Response<br/> will use a different string. |