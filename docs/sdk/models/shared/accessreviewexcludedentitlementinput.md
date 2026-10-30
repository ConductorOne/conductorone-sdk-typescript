# AccessReviewExcludedEntitlementInput

Identifies an entitlement to exclude from a supported campaign's scope.

## Example Usage

```typescript
import { AccessReviewExcludedEntitlementInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewExcludedEntitlementInput = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `appEntitlementId`                                   | *string*                                             | :heavy_minus_sign:                                   | The ID of the entitlement to exclude.                |
| `appId`                                              | *string*                                             | :heavy_minus_sign:                                   | The ID of the application that owns the entitlement. |