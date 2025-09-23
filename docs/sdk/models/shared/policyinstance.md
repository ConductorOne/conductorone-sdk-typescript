# PolicyInstance

A policy instance is an object that contains a reference to the policy it was created from, the currently executing step, the next steps, and the history of previously completed steps.

## Example Usage

```typescript
import { PolicyInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyInstance = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `current`                                                                                         | [shared.PolicyStepInstance](../../../sdk/models/shared/policystepinstance.md)                     | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `history`                                                                                         | [shared.PolicyStepInstance](../../../sdk/models/shared/policystepinstance.md)[]                   | :heavy_minus_sign:                                                                                | An array of steps that were previously processed by the ticket with their outcomes set, in order. |
| `next`                                                                                            | [shared.PolicyStep](../../../sdk/models/shared/policystep.md)[]                                   | :heavy_minus_sign:                                                                                | An array of steps that will be processed by the ticket, in order.                                 |
| `policy`                                                                                          | [shared.Policy](../../../sdk/models/shared/policy.md)                                             | :heavy_minus_sign:                                                                                | N/A                                                                                               |