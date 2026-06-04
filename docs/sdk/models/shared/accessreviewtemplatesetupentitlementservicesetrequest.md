# AccessReviewTemplateSetupEntitlementServiceSetRequest

The AccessReviewTemplateSetupEntitlementServiceSetRequest message.

## Example Usage

```typescript
import { AccessReviewTemplateSetupEntitlementServiceSetRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewTemplateSetupEntitlementServiceSetRequest = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `entitlements`                                                                                                                        | [shared.AccessReviewTemplateSetupEntitlementInput](../../../sdk/models/shared/accessreviewtemplatesetupentitlementinput.md)[]         | :heavy_minus_sign:                                                                                                                    | The entitlements to include in the template. Replaces all previously selected entitlements.                                           |
| `expandMask`                                                                                                                          | [shared.AccessReviewTemplateSetupEntitlementExpandMask](../../../sdk/models/shared/accessreviewtemplatesetupentitlementexpandmask.md) | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `scope`                                                                                                                               | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                                       | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |