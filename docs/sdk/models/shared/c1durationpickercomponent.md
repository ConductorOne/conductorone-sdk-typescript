# C1DurationPickerComponent

C1DurationPickerComponent is the access-request duration picker (presets + custom with number/unit).
 Value is duration in seconds bound to the given path.

## Example Usage

```typescript
import { C1DurationPickerComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1DurationPickerComponent = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `label`                                                             | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `maxDurationSeconds`                                                | [shared.DynamicNumber](../../../sdk/models/shared/dynamicnumber.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `value`                                                             | [shared.DynamicNumber](../../../sdk/models/shared/dynamicnumber.md) | :heavy_minus_sign:                                                  | N/A                                                                 |