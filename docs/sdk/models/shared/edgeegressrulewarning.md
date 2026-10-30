# EdgeEgressRuleWarning

EdgeEgressRuleWarning is one non-blocking concern about a rule list.

## Example Usage

```typescript
import { EdgeEgressRuleWarning } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressRuleWarning = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `authzenServerId`                                                                           | *string*                                                                                    | :heavy_minus_sign:                                                                          | The AuthzenServer an AUTHZEN rule names, for the AUTHZEN warning kinds.                     |
| `kind`                                                                                      | [shared.EdgeEgressRuleWarningKind](../../../sdk/models/shared/edgeegressrulewarningkind.md) | :heavy_minus_sign:                                                                          | The kind field.                                                                             |
| `message`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | Human-readable explanation, including how to fix it.                                        |
| `ruleIndex`                                                                                 | *number*                                                                                    | :heavy_minus_sign:                                                                          | Zero-based rule index, or -1 for a warning about the whole list.                            |
| `servicePrincipalIds`                                                                       | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | The service principals bound to the Edge that lack the grant.                               |