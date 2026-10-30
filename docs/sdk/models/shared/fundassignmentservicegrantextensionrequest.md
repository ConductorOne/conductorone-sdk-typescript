# FundAssignmentServiceGrantExtensionRequest

The FundAssignmentServiceGrantExtensionRequest message.

## Example Usage

```typescript
import { FundAssignmentServiceGrantExtensionRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundAssignmentServiceGrantExtensionRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | [shared.FundsSpendLimit](../../../sdk/models/shared/fundsspendlimit.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Subject-visible: "why do I have this bump".                                                   |