# Webhook

The Webhook message.

This message contains a oneof named webhook_identifier. Only a single field of the following list may be set at a time:
  - webhookId
  - webhookIdCel


## Example Usage

```typescript
import { Webhook } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Webhook = {};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payload`                                                                                                                                                 | Record<string, *any*>                                                                                                                                     | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `webhookId`                                                                                                                                               | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The webhookId field.<br/>This field is part of the `webhook_identifier` oneof.<br/>See the documentation for `c1.api.automations.v1.Webhook` for more details. |
| `webhookIdCel`                                                                                                                                            | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The webhookIdCel field.<br/>This field is part of the `webhook_identifier` oneof.<br/>See the documentation for `c1.api.automations.v1.Webhook` for more details. |