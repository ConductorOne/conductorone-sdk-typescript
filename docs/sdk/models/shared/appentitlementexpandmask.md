# AppEntitlementExpandMask

The app entitlement expand mask allows the user to get additional information when getting responses containing app entitlement views.

## Example Usage

```typescript
import { AppEntitlementExpandMask } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementExpandMask = {};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paths`                                                                                                                                                        | *string*[]                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                             | Array of strings to describe which items to expand on the return value. Can be any combination of "*", "app_id", "app_resource_type_id", or "app_resource_id". |