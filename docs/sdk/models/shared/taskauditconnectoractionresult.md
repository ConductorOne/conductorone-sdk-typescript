# TaskAuditConnectorActionResult

The TaskAuditConnectorActionResult message.

This message contains a oneof named result. Only a single field of the following list may be set at a time:
  - success
  - error
  - cancelled


## Example Usage

```typescript
import { TaskAuditConnectorActionResult } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditConnectorActionResult = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                        | *string*                                                                                  | :heavy_minus_sign:                                                                        | The appEntitlementId field.                                                               |
| `appId`                                                                                   | *string*                                                                                  | :heavy_minus_sign:                                                                        | The appId field.                                                                          |
| `taskAuditCancelledResult`                                                                | [shared.TaskAuditCancelledResult](../../../sdk/models/shared/taskauditcancelledresult.md) | :heavy_minus_sign:                                                                        | The TaskAuditCancelledResult message.                                                     |
| `connectorActionId`                                                                       | *string*                                                                                  | :heavy_minus_sign:                                                                        | The connectorActionId field.                                                              |
| `connectorId`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | The connectorId field.                                                                    |
| `taskAuditErrorResult`                                                                    | [shared.TaskAuditErrorResult](../../../sdk/models/shared/taskauditerrorresult.md)         | :heavy_minus_sign:                                                                        | The TaskAuditErrorResult message.                                                         |
| `taskAuditSuccessResult`                                                                  | [shared.TaskAuditSuccessResult](../../../sdk/models/shared/taskauditsuccessresult.md)     | :heavy_minus_sign:                                                                        | The TaskAuditSuccessResult message.                                                       |