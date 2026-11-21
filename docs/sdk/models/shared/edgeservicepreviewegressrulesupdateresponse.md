# EdgeServicePreviewEgressRulesUpdateResponse

EdgeServicePreviewEgressRulesUpdateResponse reports the save check and each
 host's verdict before and after the change.

## Example Usage

```typescript
import { EdgeServicePreviewEgressRulesUpdateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServicePreviewEgressRulesUpdateResponse = {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `check`                                                                                                                                            | [shared.EdgeEgressRuleListCheck](../../../sdk/models/shared/edgeegressrulelistcheck.md)                                                            | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `results`                                                                                                                                          | [shared.EdgeEgressHostChange](../../../sdk/models/shared/edgeegresshostchange.md)[]                                                                | :heavy_minus_sign:                                                                                                                                 | One result per requested host, in request order.                                                                                                   |
| `startsDefaultDeny`                                                                                                                                | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Saving starts a configured policy with an unmatched deny on an Edge that<br/> never configured rules. False when the proposed unmatched rule is ALLOW. |