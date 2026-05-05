# UpdateConnectorScheduleRequest

The UpdateConnectorScheduleRequest message contains the fields required to update a connector's sync schedule.

This message contains a oneof named schedule. Only a single field of the following list may be set at a time:
  - cron


## Example Usage

```typescript
import { UpdateConnectorScheduleRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateConnectorScheduleRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `connectorScheduleCron`                                                             | [shared.ConnectorScheduleCron](../../../sdk/models/shared/connectorschedulecron.md) | :heavy_minus_sign:                                                                  | A cron-based schedule definition for connector syncs.                               |