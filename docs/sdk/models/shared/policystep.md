# PolicyStep

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
import { PolicyStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyStep = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `accept`                                                    | [shared.Accept](../../../sdk/models/shared/accept.md)       | :heavy_minus_sign:                                          | N/A                                                         |
| `approval`                                                  | [shared.Approval](../../../sdk/models/shared/approval.md)   | :heavy_minus_sign:                                          | N/A                                                         |
| `form`                                                      | [shared.Form](../../../sdk/models/shared/form.md)           | :heavy_minus_sign:                                          | N/A                                                         |
| `provision`                                                 | [shared.Provision](../../../sdk/models/shared/provision.md) | :heavy_minus_sign:                                          | N/A                                                         |
| `reject`                                                    | [shared.Reject](../../../sdk/models/shared/reject.md)       | :heavy_minus_sign:                                          | N/A                                                         |
| `wait`                                                      | [shared.Wait](../../../sdk/models/shared/wait.md)           | :heavy_minus_sign:                                          | N/A                                                         |