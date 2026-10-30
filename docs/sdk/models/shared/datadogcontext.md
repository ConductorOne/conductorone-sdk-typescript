# DatadogContext

The DatadogContext message.

## Example Usage

```typescript
import { DatadogContext } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DatadogContext = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `rumSessionId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The rumSessionId field.                                                                       |
| `rumViewId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The rumViewId field.                                                                          |
| `rumViewName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The rumViewName field.                                                                        |
| `traceIds`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The traceIds field.                                                                           |
| `windowEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `windowStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |