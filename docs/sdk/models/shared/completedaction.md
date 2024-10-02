# CompletedAction

The outcome of a provision instance that has been completed succesfully.

## Example Usage

```typescript
import { CompletedAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CompletedAction = {};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `completedAt`                                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `entitlements`                                                                                                                                                    | [shared.AppEntitlementReference](../../../sdk/models/shared/appentitlementreference.md)[]                                                                         | :heavy_minus_sign:                                                                                                                                                | The list of entitlements that were provisioned. This is leftover from an older design, and is only ever going to be a single entitlement.                         |
| `userId`                                                                                                                                                          | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | The UserID of who completed provisioning. For connector provisioning this is the system user id, for manual provisioning this is who clicked "provision complete" |