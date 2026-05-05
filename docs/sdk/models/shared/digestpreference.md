# DigestPreference

DigestPreference controls whether summary digest notifications are sent and how often.

## Example Usage

```typescript
import { DigestPreference } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DigestPreference = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dayOfWeek`                                                                                   | [shared.DayOfWeek](../../../sdk/models/shared/dayofweek.md)                                   | :heavy_minus_sign:                                                                            | The day of the week to send weekly digests.                                                   |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether digest notifications are enabled.                                                     |
| `frequency`                                                                                   | [shared.DigestPreferenceFrequency](../../../sdk/models/shared/digestpreferencefrequency.md)   | :heavy_minus_sign:                                                                            | How often digest notifications are sent.                                                      |
| `locked`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether this preference is locked by org-level settings, preventing users from overriding it. |