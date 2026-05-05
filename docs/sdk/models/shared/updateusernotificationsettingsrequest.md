# UpdateUserNotificationSettingsRequest

The UpdateUserNotificationSettingsRequest message.

## Example Usage

```typescript
import { UpdateUserNotificationSettingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateUserNotificationSettingsRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `channelSettings`                                                           | [shared.ChannelSettings](../../../sdk/models/shared/channelsettings.md)     | :heavy_minus_sign:                                                          | ChannelSettings groups notification preferences for all supported channels. |