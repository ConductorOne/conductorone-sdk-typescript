# EdgeInferenceSelection

The EdgeInferenceSelection message.

## Example Usage

```typescript
import { EdgeInferenceSelection } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceSelection = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `attemptTimeoutMs`                                                                          | *number*                                                                                    | :heavy_minus_sign:                                                                          | The attemptTimeoutMs field.                                                                 |
| `confidenceThreshold`                                                                       | *number*                                                                                    | :heavy_minus_sign:                                                                          | The confidenceThreshold field.                                                              |
| `handoffNotes`                                                                              | [shared.EdgeInferenceHandoffNotes](../../../sdk/models/shared/edgeinferencehandoffnotes.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `maxAttempts`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | The maxAttempts field.                                                                      |
| `pickerMode`                                                                                | [shared.PickerMode](../../../sdk/models/shared/pickermode.md)                               | :heavy_minus_sign:                                                                          | The pickerMode field.                                                                       |
| `recentWindow`                                                                              | *number*                                                                                    | :heavy_minus_sign:                                                                          | The recentWindow field.                                                                     |
| `retry`                                                                                     | [shared.EdgeInferenceRetry](../../../sdk/models/shared/edgeinferenceretry.md)               | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `routeDeadlineMs`                                                                           | *number*                                                                                    | :heavy_minus_sign:                                                                          | The routeDeadlineMs field.                                                                  |
| `stages`                                                                                    | [shared.EdgeInferenceStage](../../../sdk/models/shared/edgeinferencestage.md)[]             | :heavy_minus_sign:                                                                          | The stages field.                                                                           |
| `strategy`                                                                                  | [shared.Strategy](../../../sdk/models/shared/strategy.md)                                   | :heavy_minus_sign:                                                                          | The strategy field.                                                                         |
| `targetIds`                                                                                 | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | The targetIds field.                                                                        |