# C1TableComponent

C1TableComponent renders a tabular view: typed columns + rows, capped and
 paginated client-side; the full data set lives behind the artifact link.

## Example Usage

```typescript
import { C1TableComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1TableComponent = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `artifactUrl`                                                           | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)     | :heavy_minus_sign:                                                      | N/A                                                                     |
| `columns`                                                               | *string*[]                                                              | :heavy_minus_sign:                                                      | The columns field.                                                      |
| `pageSize`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | Rows per page for client-side pagination; 0 shows all rows on one page. |
| `rows`                                                                  | [shared.C1TableRow](../../../sdk/models/shared/c1tablerow.md)[]         | :heavy_minus_sign:                                                      | The rows field.                                                         |
| `sources`                                                               | [shared.C1ChartSource](../../../sdk/models/shared/c1chartsource.md)[]   | :heavy_minus_sign:                                                      | Provenance: the queries the producing function ran.                     |
| `title`                                                                 | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)     | :heavy_minus_sign:                                                      | N/A                                                                     |
| `totalRows`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | Full count when rows are truncated.                                     |