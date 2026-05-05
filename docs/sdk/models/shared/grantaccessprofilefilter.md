# GrantAccessProfileFilter

The GrantAccessProfileFilter message.

## Example Usage

```typescript
import { GrantAccessProfileFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantAccessProfileFilter = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `excludedAccessProfileIds`                                                                                    | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Access profile IDs to EXCLUDE from the campaign<br/> Used when filter_type = EXCLUDE_SPECIFIC<br/> Max 32 profile IDs |
| `filterType`                                                                                                  | [shared.FilterType](../../../sdk/models/shared/filtertype.md)                                                 | :heavy_minus_sign:                                                                                            | The filterType field.                                                                                         |
| `includedAccessProfileIds`                                                                                    | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Access profile IDs to INCLUDE in the campaign<br/> Used when filter_type = INCLUDE_SPECIFIC<br/> Max 32 profile IDs |