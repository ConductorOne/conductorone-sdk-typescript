# FundAssignment

FundAssignment is one principal's fund exception as the API renders it.

## Example Usage

```typescript
import { FundAssignment } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundAssignment = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `controls`                                                                                    | [shared.FundsSpendControls](../../../sdk/models/shared/fundsspendcontrols.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tenantId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The tenantId field.                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Canonical c1.models.user.v2.User id, every UserType.                                          |