# EdgeEgressRuleListCheck

EdgeEgressRuleListCheck is Update's save-time verdict on a rule list.

## Example Usage

```typescript
import { EdgeEgressRuleListCheck } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressRuleListCheck = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `problems`                                                                                                              | [shared.EdgeEgressRuleProblem](../../../sdk/models/shared/edgeegressruleproblem.md)[]                                   | :heavy_minus_sign:                                                                                                      | Every problem Update would reject the list for, in rule order; empty when<br/> valid. Update itself reports only the first. |
| `valid`                                                                                                                 | *boolean*                                                                                                               | :heavy_minus_sign:                                                                                                      | The valid field.                                                                                                        |
| `warnings`                                                                                                              | [shared.EdgeEgressRuleWarning](../../../sdk/models/shared/edgeegressrulewarning.md)[]                                   | :heavy_minus_sign:                                                                                                      | Things worth fixing that do not stop Update from saving the list.                                                       |