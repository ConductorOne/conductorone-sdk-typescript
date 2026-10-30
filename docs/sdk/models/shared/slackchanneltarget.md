# SlackChannelTarget

SlackChannelTarget names one Slack channel. Exactly one of channel_name /
 channel_id is set; a name is resolved at send time, so an unresolvable name
 fails the dispatch rather than the rule edit.

## Example Usage

```typescript
import { SlackChannelTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SlackChannelTarget = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `channelId`            | *string*               | :heavy_minus_sign:     | The channelId field.   |
| `channelName`          | *string*               | :heavy_minus_sign:     | The channelName field. |