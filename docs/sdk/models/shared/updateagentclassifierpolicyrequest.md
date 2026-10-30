# UpdateAgentClassifierPolicyRequest

The UpdateAgentClassifierPolicyRequest message.

## Example Usage

```typescript
import { UpdateAgentClassifierPolicyRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateAgentClassifierPolicyRequest = {
  policy: {},
  updateMask: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `policy`                                                                            | [shared.AgentClassifierPolicy](../../../sdk/models/shared/agentclassifierpolicy.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `updateMask`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |