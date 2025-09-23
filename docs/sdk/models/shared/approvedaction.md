# ApprovedAction

The approved action indicates that the approvalinstance had an outcome of approved.

## Example Usage

```typescript
import { ApprovedAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ApprovedAction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `approvedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `entitlements`                                                                                | [shared.AppEntitlementReference](../../../sdk/models/shared/appentitlementreference.md)[]     | :heavy_minus_sign:                                                                            | The entitlements that were approved. This will only ever be a list of one entitlement.        |
| `stepUpTransactionId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the step-up transaction that was used for this approval, if step-up was required.   |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UserID that approved this step.                                                           |