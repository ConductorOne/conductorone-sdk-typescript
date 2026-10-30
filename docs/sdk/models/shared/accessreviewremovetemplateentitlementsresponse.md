# AccessReviewRemoveTemplateEntitlementsResponse

The AccessReviewRemoveTemplateEntitlementsResponse message.

## Example Usage

```typescript
import { AccessReviewRemoveTemplateEntitlementsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewRemoveTemplateEntitlementsResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `entitlementCount`                                                                  | *number*                                                                            | :heavy_minus_sign:                                                                  | The total number of entitlements selected for the template after this call.         |
| `removedCount`                                                                      | *number*                                                                            | :heavy_minus_sign:                                                                  | The number of entitlements from the request that were selected and are now removed. |