# AgentClassifierPolicy

AgentClassifierPolicy is the tenant's full classifier policy: the ordered
 rule cascade plus the no-match default.

## Example Usage

```typescript
import { AgentClassifierPolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AgentClassifierPolicy = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Optional agent scoping. Empty is the tenant-wide default policy.                                                |
| `createdAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `defaultDenyReason`                                                                                             | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The defaultDenyReason field.                                                                                    |
| `defaultOutcome`                                                                                                | [shared.AgentClassifierPolicyDefaultOutcome](../../../sdk/models/shared/agentclassifierpolicydefaultoutcome.md) | :heavy_minus_sign:                                                                                              | The defaultOutcome field.                                                                                       |
| `rules`                                                                                                         | [shared.AgentClassifierRule](../../../sdk/models/shared/agentclassifierrule.md)[]                               | :heavy_minus_sign:                                                                                              | The rules field.                                                                                                |
| `tenantId`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The tenantId field.                                                                                             |
| `updatedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |