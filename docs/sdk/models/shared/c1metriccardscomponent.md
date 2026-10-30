# C1MetricCardsComponent

C1MetricCardsComponent renders a row of aggregate stat cards.

## Example Usage

```typescript
import { C1MetricCardsComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1MetricCardsComponent = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `cards`                                                               | [shared.C1MetricCard](../../../sdk/models/shared/c1metriccard.md)[]   | :heavy_minus_sign:                                                    | The cards field.                                                      |
| `sources`                                                             | [shared.C1ChartSource](../../../sdk/models/shared/c1chartsource.md)[] | :heavy_minus_sign:                                                    | Provenance: the queries the producing function ran.                   |
| `title`                                                               | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |