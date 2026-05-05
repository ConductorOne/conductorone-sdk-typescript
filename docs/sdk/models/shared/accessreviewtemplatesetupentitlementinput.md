# AccessReviewTemplateSetupEntitlementInput

Identifies an entitlement to add or remove from a template's setup.

## Example Usage

```typescript
import { AccessReviewTemplateSetupEntitlementInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewTemplateSetupEntitlementInput = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appEntitlementId`                                   | *string*                                             | :heavy_minus_sign:                                   | The ID of the entitlement.                           |
| `appId`                                              | *string*                                             | :heavy_minus_sign:                                   | The ID of the application that owns the entitlement. |