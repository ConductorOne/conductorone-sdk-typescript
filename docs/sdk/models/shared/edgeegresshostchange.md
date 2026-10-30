# EdgeEgressHostChange

EdgeEgressHostChange compares one host's verdict under the saved rules
 with its verdict under the proposed rules.

## Example Usage

```typescript
import { EdgeEgressHostChange } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressHostChange = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `after`                                                                                                                                  | [shared.EdgeEgressHostVerdict](../../../sdk/models/shared/edgeegresshostverdict.md)                                                      | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `before`                                                                                                                                 | [shared.EdgeEgressHostVerdict](../../../sdk/models/shared/edgeegresshostverdict.md)                                                      | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `deciderChanged`                                                                                                                         | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | A different rule decides the host after the change, compared by rule<br/> content since indexes shift, or only one side has a deciding rule. |
| `verdictChanged`                                                                                                                         | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | after.allowed differs from before.allowed.                                                                                               |