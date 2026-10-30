# EdgeEgressRuleList

EdgeEgressRuleList wraps a rule list so an empty list is distinct from none.

## Example Usage

```typescript
import { EdgeEgressRuleList } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressRuleList = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `rules`                                                                 | [shared.EdgeEgressRule](../../../sdk/models/shared/edgeegressrule.md)[] | :heavy_minus_sign:                                                      | The rules field.                                                        |