# AccessReviewSetupEntitlementInput

Identifies an entitlement to add or remove from a campaign's setup.

## Example Usage

```typescript
import { AccessReviewSetupEntitlementInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetupEntitlementInput = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appEntitlementId`                                   | *string*                                             | :heavy_minus_sign:                                   | The ID of the entitlement.                           |
| `appId`                                              | *string*                                             | :heavy_minus_sign:                                   | The ID of the application that owns the entitlement. |