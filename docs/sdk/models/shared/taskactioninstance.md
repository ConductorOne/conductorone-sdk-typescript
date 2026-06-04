# TaskActionInstance

ActionInstance is the API mirror of the internal immutable snapshot of an
 Action captured on a TaskTypeAction at ticket-creation time.

This message contains a oneof named target_ref. Only a single field of the following list may be set at a time:
  - connectorActionRef


## Example Usage

```typescript
import { TaskActionInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionInstance = {};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectorActionRef`                                                                                                                                           | [shared.ConnectorActionRef](../../../sdk/models/shared/connectoractionref.md)                                                                                  | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `displayName`                                                                                                                                                  | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | Display label at ticket-creation time. Same value as<br/> TaskTypeAction.display_name; repeated here so clients that walk the<br/> instance see a self-contained view. |