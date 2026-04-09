# DigestPreference

The DigestPreference message.

## Example Usage

```typescript
import { DigestPreference } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DigestPreference = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `dayOfWeek`                                                                                 | [shared.DayOfWeek](../../../sdk/models/shared/dayofweek.md)                                 | :heavy_minus_sign:                                                                          | The dayOfWeek field.                                                                        |
| `enabled`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | The enabled field.                                                                          |
| `frequency`                                                                                 | [shared.DigestPreferenceFrequency](../../../sdk/models/shared/digestpreferencefrequency.md) | :heavy_minus_sign:                                                                          | The frequency field.                                                                        |