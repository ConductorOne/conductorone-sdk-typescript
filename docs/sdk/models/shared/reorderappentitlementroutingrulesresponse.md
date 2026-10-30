# ReorderAppEntitlementRoutingRulesResponse

The ReorderAppEntitlementRoutingRulesResponse message.

## Example Usage

```typescript
import { ReorderAppEntitlementRoutingRulesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReorderAppEntitlementRoutingRulesResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.AppEntitlementRoutingRule](../../../sdk/models/shared/appentitlementroutingrule.md)[] | :heavy_minus_sign:                                                                            | The rules in their new evaluation order, with priorities reassigned to 1..N.                  |