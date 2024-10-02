# AppEntitlementUserBindingFeed

The AppEntitlementUserBindingFeed message.

## Example Usage

```typescript
import { AppEntitlementUserBindingFeed } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementUserBindingFeed = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app entitlement that the app user has access to                                 |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app associated with the app entitlement                                         |
| `appUserId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app user that has access to the app entitlement                                 |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `eventType`                                                                                   | [shared.EventType](../../../sdk/models/shared/eventtype.md)                                   | :heavy_minus_sign:                                                                            | The eventType field.                                                                          |
| `ticketId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ticketId field.                                                                           |