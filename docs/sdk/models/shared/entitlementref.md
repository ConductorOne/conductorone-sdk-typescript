# EntitlementRef

EntitlementRef identifies an entitlement by app and entitlement ID.

## Example Usage

```typescript
import { EntitlementRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementRef = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `appId`                  | *string*                 | :heavy_minus_sign:       | The appId field.         |
| `entitlementId`          | *string*                 | :heavy_minus_sign:       | The entitlementId field. |