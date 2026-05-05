# UserNotificationSettings

UserNotificationSettings contains the calling user's personal notification preferences.

## Example Usage

```typescript
import { UserNotificationSettings } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserNotificationSettings = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `channelSettings`                                                           | [shared.ChannelSettings](../../../sdk/models/shared/channelsettings.md)     | :heavy_minus_sign:                                                          | ChannelSettings groups notification preferences for all supported channels. |