# AccessReviewAddTemplateEntitlementsRequest

The AccessReviewAddTemplateEntitlementsRequest message.

## Example Usage

```typescript
import { AccessReviewAddTemplateEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewAddTemplateEntitlementsRequest = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `entitlements`                                                                                                                | [shared.AccessReviewTemplateSetupEntitlementInput](../../../sdk/models/shared/accessreviewtemplatesetupentitlementinput.md)[] | :heavy_minus_sign:                                                                                                            | The entitlements to add. Entitlements that are already selected are skipped.                                                  |