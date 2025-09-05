# PolicyStepInput

The PolicyStep message.

This message contains a oneof named step. Only a single field of the following list may be set at a time:
  - approval
  - provision
  - accept
  - reject
  - wait
  - form


## Example Usage

```typescript
import { PolicyStepInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyStepInput = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accept`                                                            | [shared.Accept](../../../sdk/models/shared/accept.md)               | :heavy_minus_sign:                                                  | N/A                                                                 |
| `approval`                                                          | [shared.ApprovalInput](../../../sdk/models/shared/approvalinput.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `form`                                                              | [shared.FormInput1](../../../sdk/models/shared/forminput1.md)       | :heavy_minus_sign:                                                  | N/A                                                                 |
| `provision`                                                         | [shared.Provision](../../../sdk/models/shared/provision.md)         | :heavy_minus_sign:                                                  | N/A                                                                 |
| `reject`                                                            | [shared.Reject](../../../sdk/models/shared/reject.md)               | :heavy_minus_sign:                                                  | N/A                                                                 |
| `wait`                                                              | [shared.Wait](../../../sdk/models/shared/wait.md)                   | :heavy_minus_sign:                                                  | N/A                                                                 |