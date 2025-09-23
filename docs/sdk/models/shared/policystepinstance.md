# PolicyStepInstance

The policy step instance includes a reference to an instance of a policy step that tracks state and has a unique ID.

This message contains a oneof named instance. Only a single field of the following list may be set at a time:
  - approval
  - provision
  - accept
  - reject
  - wait
  - form


## Example Usage

```typescript
import { PolicyStepInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyStepInstance = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `accept`                                                                                                                       | [shared.AcceptInstance](../../../sdk/models/shared/acceptinstance.md)                                                          | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `approval`                                                                                                                     | [shared.ApprovalInstance](../../../sdk/models/shared/approvalinstance.md)                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `form`                                                                                                                         | [shared.FormInstance](../../../sdk/models/shared/forminstance.md)                                                              | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The ID of the PolicyStepInstance. This is required by many action submission endpoints to indicate what step you're approving. |
| `policyGenerationId`                                                                                                           | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The policy generation id refers to the version of the policy that this step was created from.                                  |
| `provision`                                                                                                                    | [shared.ProvisionInstance](../../../sdk/models/shared/provisioninstance.md)                                                    | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `reject`                                                                                                                       | [shared.RejectInstance](../../../sdk/models/shared/rejectinstance.md)                                                          | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `state`                                                                                                                        | [shared.PolicyStepInstanceState](../../../sdk/models/shared/policystepinstancestate.md)                                        | :heavy_minus_sign:                                                                                                             | The state of the step, which is either active or done.                                                                         |
| `wait`                                                                                                                         | [shared.WaitInstance](../../../sdk/models/shared/waitinstance.md)                                                              | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |