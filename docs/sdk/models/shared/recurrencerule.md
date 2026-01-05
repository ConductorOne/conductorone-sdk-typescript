# RecurrenceRule

The RecurrenceRule message.

This message contains a oneof named end_condition. Only a single field of the following list may be set at a time:
  - endDate
  - occurrences


## Example Usage

```typescript
import { RecurrenceRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RecurrenceRule = {};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `endDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `frequency`                                                                                                                                                 | [shared.Frequency](../../../sdk/models/shared/frequency.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                          | The frequency field.                                                                                                                                        |
| `interval`                                                                                                                                                  | *number*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The interval field.                                                                                                                                         |
| `occurrences`                                                                                                                                               | *number*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | The occurrences field.<br/>This field is part of the `end_condition` oneof.<br/>See the documentation for `c1.api.accessreview.v1.RecurrenceRule` for more details. |
| `startDate`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |