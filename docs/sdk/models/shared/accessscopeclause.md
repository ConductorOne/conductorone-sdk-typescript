# AccessScopeClause

AccessScopeClause matches holders of any listed entitlement.

## Example Usage

```typescript
import { AccessScopeClause } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessScopeClause = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `entitlements`                                                                          | [shared.AppEntitlementScopeRef](../../../sdk/models/shared/appentitlementscoperef.md)[] | :heavy_minus_sign:                                                                      | The entitlements field.                                                                 |