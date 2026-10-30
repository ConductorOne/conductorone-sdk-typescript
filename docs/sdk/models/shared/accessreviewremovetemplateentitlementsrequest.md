# AccessReviewRemoveTemplateEntitlementsRequest

The AccessReviewRemoveTemplateEntitlementsRequest message.

## Example Usage

```typescript
import { AccessReviewRemoveTemplateEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewRemoveTemplateEntitlementsRequest = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `entitlements`                                                                                                                | [shared.AccessReviewTemplateSetupEntitlementInput](../../../sdk/models/shared/accessreviewtemplatesetupentitlementinput.md)[] | :heavy_minus_sign:                                                                                                            | The entitlements to remove. Entitlements that are not selected are ignored.                                                   |