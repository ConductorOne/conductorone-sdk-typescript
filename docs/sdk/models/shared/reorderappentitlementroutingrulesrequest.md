# ReorderAppEntitlementRoutingRulesRequest

The ReorderAppEntitlementRoutingRulesRequest message.

## Example Usage

```typescript
import { ReorderAppEntitlementRoutingRulesRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReorderAppEntitlementRoutingRulesRequest = {};
```

## Fields

| Field                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ruleIds`                                                                                                                                                                                                               | *string*[]                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                      | The full set of routing-rule IDs for the app, in the desired evaluation<br/> order. The first entry receives priority 1, the second priority 2, and so<br/> on. The list must be a permutation of every active rule in the app. |