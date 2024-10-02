# AppEntitlementUserBindingHistory

The AppEntitlementUserBindingHistory message.

## Example Usage

```typescript
import { AppEntitlementUserBindingHistory } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementUserBindingHistory = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app entitlement that the app user has access to                                 |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app associated with the app entitlement                                         |
| `appUserId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app user that has access to the app entitlement                                 |
| `grantedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |