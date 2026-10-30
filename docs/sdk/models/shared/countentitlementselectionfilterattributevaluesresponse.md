# CountEntitlementSelectionFilterAttributeValuesResponse

The CountEntitlementSelectionFilterAttributeValuesResponse message.

## Example Usage

```typescript
import { CountEntitlementSelectionFilterAttributeValuesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CountEntitlementSelectionFilterAttributeValuesResponse = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `cohortUserCount`                                                                                                                     | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The cohortUserCount field.                                                                                                            |
| `coreUserCount`                                                                                                                       | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The coreUserCount field.                                                                                                              |
| `values`                                                                                                                              | [shared.EntitlementSelectionFilterAttributeValueCount](../../../sdk/models/shared/entitlementselectionfilterattributevaluecount.md)[] | :heavy_minus_sign:                                                                                                                    | The values field.                                                                                                                     |