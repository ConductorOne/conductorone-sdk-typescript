# AccessReviewAddCampaignEntitlementsRequest

The AccessReviewAddCampaignEntitlementsRequest message.

## Example Usage

```typescript
import { AccessReviewAddCampaignEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewAddCampaignEntitlementsRequest = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `entitlements`                                                                                                | [shared.AccessReviewSetupEntitlementInput](../../../sdk/models/shared/accessreviewsetupentitlementinput.md)[] | :heavy_minus_sign:                                                                                            | The entitlements to add. Entitlements that are already selected are skipped.                                  |