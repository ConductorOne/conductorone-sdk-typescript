# AccessConflictTrigger

The AccessConflictTrigger message.

This message contains a oneof named conflict_monitor_selector. Only a single field of the following list may be set at a time:
  - conflictMonitorRefs
  - allConflictMonitors


## Example Usage

```typescript
import { AccessConflictTrigger } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessConflictTrigger = {};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `allConflictMonitors`                                                                                                                                                                 | *boolean*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                    | The allConflictMonitors field.<br/>This field is part of the `conflict_monitor_selector` oneof.<br/>See the documentation for `c1.api.automations.v1.AccessConflictTrigger` for more details. |
| `conflictMonitorRefs`                                                                                                                                                                 | [shared.ConflictMonitorRefs](../../../sdk/models/shared/conflictmonitorrefs.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                    | N/A                                                                                                                                                                                   |