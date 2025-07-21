# AgentApproval

The agent to assign the task to.

## Example Usage

```typescript
import { AgentApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentApproval = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `agentMode`                                                               | [shared.AgentMode](../../../sdk/models/shared/agentmode.md)               | :heavy_minus_sign:                                                        | The mode of the agent, full control, change policy only, or comment only. |
| `agentUserId`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | The agent user ID to assign the task to.                                  |
| `instructions`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Instructions for the agent.                                               |
| `policyIds`                                                               | *string*[]                                                                | :heavy_minus_sign:                                                        | The allow list of policy IDs to re-route the task to.                     |