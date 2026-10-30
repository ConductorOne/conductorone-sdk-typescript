# AgentTrait

AgentTrait carries metadata for AI-agent resources surfaced in the Inventory.

## Example Usage

```typescript
import { AgentTrait } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentTrait = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `identityAppUserId`                                                                                                                       | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The C1 app user ID of the service-account identity this agent authenticates as.<br/> Empty if the backing identity has not yet been resolved. |
| `status`                                                                                                                                  | [shared.AgentTraitStatus](../../../sdk/models/shared/agenttraitstatus.md)                                                                 | :heavy_minus_sign:                                                                                                                        | The agent's lifecycle status (READY, DISABLED, DELETED).                                                                                  |