# FormInstance

The FormInstance message.

This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - completed
  - restarted
  - reassigned
  - skipped


## Example Usage

```typescript
import { FormInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FormInstance = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `completed`                                                                     | [shared.FormCompletedAction](../../../sdk/models/shared/formcompletedaction.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `data`                                                                          | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `form`                                                                          | [shared.FormInput](../../../sdk/models/shared/forminput.md)                     | :heavy_minus_sign:                                                              | N/A                                                                             |
| `reassigned`                                                                    | [shared.ReassignedAction](../../../sdk/models/shared/reassignedaction.md)       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `restarted`                                                                     | [shared.RestartAction](../../../sdk/models/shared/restartaction.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |
| `skipped`                                                                       | [shared.SkippedAction](../../../sdk/models/shared/skippedaction.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |
| `state`                                                                         | [shared.FormInstanceState](../../../sdk/models/shared/forminstancestate.md)     | :heavy_minus_sign:                                                              | The state field.                                                                |