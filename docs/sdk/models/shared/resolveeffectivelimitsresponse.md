# ResolveEffectiveLimitsResponse

ResolveEffectiveLimitsResponse contains the limits currently applying to a user.

## Example Usage

```typescript
import { ResolveEffectiveLimitsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResolveEffectiveLimitsResponse = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `currencyCode`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Currency used for monetary values.                                                                              |
| `denialReason`                                                                                                  | [shared.DenialReason](../../../sdk/models/shared/denialreason.md)                                               | :heavy_minus_sign:                                                                                              | Reason spend is denied. Present only when state is DENIED.                                                      |
| `denialScopeName`                                                                                               | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Scope that denies spend. Present only when state is DENIED.                                                     |
| `scopes`                                                                                                        | [shared.EffectiveScope](../../../sdk/models/shared/effectivescope.md)[]                                         | :heavy_minus_sign:                                                                                              | Ordered organization, user, application, and user-application scopes.                                           |
| `state`                                                                                                         | [shared.ResolveEffectiveLimitsResponseState](../../../sdk/models/shared/resolveeffectivelimitsresponsestate.md) | :heavy_minus_sign:                                                                                              | Result of resolving the user's effective limits.                                                                |