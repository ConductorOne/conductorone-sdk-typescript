# AccessReviewRemoveCampaignEntitlementsResponse

The AccessReviewRemoveCampaignEntitlementsResponse message.

## Example Usage

```typescript
import { AccessReviewRemoveCampaignEntitlementsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewRemoveCampaignEntitlementsResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `entitlementCount`                                                                  | *number*                                                                            | :heavy_minus_sign:                                                                  | The total number of entitlements selected for the campaign after this call.         |
| `removedCount`                                                                      | *number*                                                                            | :heavy_minus_sign:                                                                  | The number of entitlements from the request that were selected and are now removed. |