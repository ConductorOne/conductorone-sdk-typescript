# SlackNotifications

The SlackNotifications message.

## Example Usage

```typescript
import { SlackNotifications } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SlackNotifications = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `allowPrivateChannelFallback`                                                                | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Allow a private channel retry if Slack restricts public channel creation. Defaults to false. |
| `channelId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The channelId field.                                                                         |
| `channelName`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The channelName field.                                                                       |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | The enabled field.                                                                           |