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
| `email`                                                                               | [shared.EmailChannelSettings](../../../sdk/models/shared/emailchannelsettings.md)     | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `slack`                                                                               | [shared.SlackChannelSettings](../../../sdk/models/shared/slackchannelsettings.md)     | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `teams`                                                                               | [shared.MSTeamsChannelSettings](../../../sdk/models/shared/msteamschannelsettings.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |