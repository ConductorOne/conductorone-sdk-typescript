# TaskAction

The TaskAction message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - close
  - reassign


## Example Usage

```typescript
import { TaskAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAction = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `close`                                                                   | [shared.CloseAction](../../../sdk/models/shared/closeaction.md)           | :heavy_minus_sign:                                                        | N/A                                                                       |
| `reassign`                                                                | [shared.ReassignAction](../../../sdk/models/shared/reassignaction.md)     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `taskTypes`                                                               | [shared.TaskTypes](../../../sdk/models/shared/tasktypes.md)[]             | :heavy_minus_sign:                                                        | The taskTypes field.                                                      |
| `taskUserRelation`                                                        | [shared.TaskUserRelation](../../../sdk/models/shared/taskuserrelation.md) | :heavy_minus_sign:                                                        | The taskUserRelation field.                                               |