# EdgeInferenceStage

The EdgeInferenceStage message.

## Example Usage

```typescript
import { EdgeInferenceStage } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceStage = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `judge`                                                                       | [shared.EdgeInferenceJudge](../../../sdk/models/shared/edgeinferencejudge.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `judgeTargetId`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | The judgeTargetId field.                                                      |
| `stageId`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | The stageId field.                                                            |
| `targetIds`                                                                   | *string*[]                                                                    | :heavy_minus_sign:                                                            | The targetIds field.                                                          |
| `tierPrompt`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | The tierPrompt field.                                                         |