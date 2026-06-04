# TaskTypeActionInput

The TaskTypeAction message.

This message contains a oneof named target_object. Only a single field of the following list may be set at a time:
  - scopeRole


## Example Usage

```typescript
import { TaskTypeActionInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeActionInput = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `actionInstance`                                                                        | [shared.TaskActionInstanceInput](../../../sdk/models/shared/taskactioninstanceinput.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `scopeRole`                                                                             | [shared.ScopeRoleInput](../../../sdk/models/shared/scoperoleinput.md)                   | :heavy_minus_sign:                                                                      | N/A                                                                                     |