# SendSlackMessage

The SendSlackMessage message.

This message contains a oneof named channel. Only a single field of the following list may be set at a time:
  - channelId
  - channelIdCel


## Example Usage

```typescript
import { SendSlackMessage } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SendSlackMessage = {};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `body`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The body field.                                                                                                                                         |
| `channelId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The channelId field.<br/>This field is part of the `channel` oneof.<br/>See the documentation for `c1.api.automations.v1.SendSlackMessage` for more details. |
| `channelIdCel`                                                                                                                                          | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The channelIdCel field.<br/>This field is part of the `channel` oneof.<br/>See the documentation for `c1.api.automations.v1.SendSlackMessage` for more details. |