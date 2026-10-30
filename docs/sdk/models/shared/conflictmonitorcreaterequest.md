# ConflictMonitorCreateRequest

The request message for creating a new conflict monitor.

## Example Usage

```typescript
import { ConflictMonitorCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConflictMonitorCreateRequest = {
  displayName: "Christelle.Blanda73",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `description`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | An optional description explaining the purpose of this Separation of Duty rule.                           |
| `displayName`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The human-readable name for the conflict monitor.                                                         |
| `notificationConfig`                                                                                      | [shared.AccessConflictNotificationConfig](../../../sdk/models/shared/accessconflictnotificationconfig.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |