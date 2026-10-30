# EdgeEgressRuleProblem

EdgeEgressRuleProblem is one reason Update would reject a rule list.

## Example Usage

```typescript
import { EdgeEgressRuleProblem } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressRuleProblem = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `kind`                                                                                      | [shared.EdgeEgressRuleProblemKind](../../../sdk/models/shared/edgeegressruleproblemkind.md) | :heavy_minus_sign:                                                                          | The kind field.                                                                             |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | The same text Update returns for this problem.                                              |
| `ruleIndex`                                                                                 | *number*                                                                                    | :heavy_minus_sign:                                                                          | Zero-based rule index, or -1 for a problem with the whole list.                             |