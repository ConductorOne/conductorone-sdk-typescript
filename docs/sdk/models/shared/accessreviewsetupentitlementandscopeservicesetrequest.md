# AccessReviewSetupEntitlementAndScopeServiceSetRequest

The AccessReviewSetupEntitlementAndScopeServiceSetRequest message.

## Example Usage

```typescript
import { AccessReviewSetupEntitlementAndScopeServiceSetRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetupEntitlementAndScopeServiceSetRequest = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `entitlements`                                                                                                        | [shared.AccessReviewSetupEntitlementInput](../../../sdk/models/shared/accessreviewsetupentitlementinput.md)[]         | :heavy_minus_sign:                                                                                                    | The entitlements to include in the campaign. Replaces all previously selected entitlements.                           |
| `expandMask`                                                                                                          | [shared.AccessReviewSetupEntitlementExpandMask](../../../sdk/models/shared/accessreviewsetupentitlementexpandmask.md) | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `scopeV2`                                                                                                             | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                       | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |