# ConflictMonitorUpdateRequest

The request message for updating an existing conflict monitor.

## Example Usage

```typescript
import { ConflictMonitorUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConflictMonitorUpdateRequest = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `description`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The updated description for the conflict monitor.                                                         |
| `displayName`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The updated human-readable name for the conflict monitor.                                                 |
| `notificationConfig`                                                                                      | [shared.AccessConflictNotificationConfig](../../../sdk/models/shared/accessconflictnotificationconfig.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |