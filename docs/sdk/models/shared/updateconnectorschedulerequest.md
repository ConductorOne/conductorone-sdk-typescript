# UpdateConnectorScheduleRequest

The UpdateConnectorScheduleRequest message.

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
| `connectorScheduleCron`                                                             | [shared.ConnectorScheduleCron](../../../sdk/models/shared/connectorschedulecron.md) | :heavy_minus_sign:                                                                  | The ConnectorScheduleCron message.                                                  |