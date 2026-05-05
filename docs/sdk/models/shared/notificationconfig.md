# NotificationConfig

Controls which email notifications are sent during the access review lifecycle.

## Example Usage

```typescript
import { NotificationConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: NotificationConfig = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sendClose`                                                                   | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether to send a notification when the campaign is closed.                   |
| `sendKickoff`                                                                 | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether to send a notification when the campaign is started.                  |
| `sendReminders`                                                               | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether to send periodic reminder emails to reviewers with outstanding tasks. |