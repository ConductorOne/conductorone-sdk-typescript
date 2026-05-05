# ChannelSettings

ChannelSettings groups notification preferences for all supported channels.

## Example Usage

```typescript
import { ChannelSettings } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ChannelSettings = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `emailChannelSettings`                                                                | [shared.EmailChannelSettings](../../../sdk/models/shared/emailchannelsettings.md)     | :heavy_minus_sign:                                                                    | The EmailChannelSettings message.                                                     |
| `slackChannelSettings`                                                                | [shared.SlackChannelSettings](../../../sdk/models/shared/slackchannelsettings.md)     | :heavy_minus_sign:                                                                    | The SlackChannelSettings message.                                                     |
| `msTeamsChannelSettings`                                                              | [shared.MSTeamsChannelSettings](../../../sdk/models/shared/msteamschannelsettings.md) | :heavy_minus_sign:                                                                    | The MSTeamsChannelSettings message.                                                   |