# EntitlementRef

EntitlementRef identifies an entitlement by application and entitlement ID.

## Example Usage

```typescript
import { EntitlementRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementRef = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `appId`                                | *string*                               | :heavy_minus_sign:                     | Application that owns the entitlement. |
| `entitlementId`                        | *string*                               | :heavy_minus_sign:                     | Entitlement within the application.    |