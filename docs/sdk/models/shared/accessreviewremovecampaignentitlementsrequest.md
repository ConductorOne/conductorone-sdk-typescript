# AccessReviewRemoveCampaignEntitlementsRequest

The AccessReviewRemoveCampaignEntitlementsRequest message.

## Example Usage

```typescript
import { AccessReviewRemoveCampaignEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewRemoveCampaignEntitlementsRequest = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `entitlements`                                                                                                | [shared.AccessReviewSetupEntitlementInput](../../../sdk/models/shared/accessreviewsetupentitlementinput.md)[] | :heavy_minus_sign:                                                                                            | The entitlements to remove. Entitlements that are not selected are ignored.                                   |