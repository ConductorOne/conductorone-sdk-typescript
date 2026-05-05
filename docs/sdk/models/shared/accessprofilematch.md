# AccessProfileMatch

The AccessProfileMatch message.

## Example Usage

```typescript
import { AccessProfileMatch } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessProfileMatch = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `catalogDisplayName`                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The catalogDisplayName field.                                                 |
| `catalogId`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | The catalogId field.                                                          |
| `matchType`                                                                   | [shared.MatchType](../../../sdk/models/shared/matchtype.md)                   | :heavy_minus_sign:                                                            | The matchType field.                                                          |
| `missingEntitlements`                                                         | [shared.CohortEntitlement](../../../sdk/models/shared/cohortentitlement.md)[] | :heavy_minus_sign:                                                            | The missingEntitlements field.                                                |
| `overlapRatio`                                                                | *number*                                                                      | :heavy_minus_sign:                                                            | The overlapRatio field.                                                       |