# EdgeServicePreviewEgressHostDecisionRequest

EdgeServicePreviewEgressHostDecisionRequest asks what blocking or allowing
 one host for every user would do. Nothing is saved.

## Example Usage

```typescript
import { EdgeServicePreviewEgressHostDecisionRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServicePreviewEgressHostDecisionRequest = {};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `draftRules`                                                                                                                                | [shared.EdgeEgressRuleList](../../../sdk/models/shared/edgeegressrulelist.md)                                                               | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |
| `effect`                                                                                                                                    | [shared.EdgeServicePreviewEgressHostDecisionRequestEffect](../../../sdk/models/shared/edgeservicepreviewegresshostdecisionrequesteffect.md) | :heavy_minus_sign:                                                                                                                          | The effect field.                                                                                                                           |
| `host`                                                                                                                                      | *string*                                                                                                                                    | :heavy_minus_sign:                                                                                                                          | The host to block or allow.                                                                                                                 |