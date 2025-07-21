# ConflictMonitorCreateRequest

The ConflictMonitorCreateRequest message.

## Example Usage

```typescript
import { ConflictMonitorCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConflictMonitorCreateRequest = {
  displayName: "Christelle.Blanda73",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The description field.                                                        |
| `displayName`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | The displayName field.                                                        |
| `notificationConfig`                                                          | [shared.NotificationConfig](../../../sdk/models/shared/notificationconfig.md) | :heavy_minus_sign:                                                            | The NotificationConfig message.                                               |