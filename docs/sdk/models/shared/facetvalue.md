# FacetValue

A FacetValue message contains count and value of the facet entry.

## Example Usage

```typescript
import { FacetValue } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FacetValue = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `count`                                | *number*                               | :heavy_minus_sign:                     | The count of the values in this facet. |
| `displayName`                          | *string*                               | :heavy_minus_sign:                     | The name of this facet.                |
| `iconUrl`                              | *string*                               | :heavy_minus_sign:                     | The icon for this facet.               |
| `value`                                | *string*                               | :heavy_minus_sign:                     | The value of this facet.               |