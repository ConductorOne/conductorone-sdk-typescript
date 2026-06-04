# WebhookAutomationTrigger

The WebhookAutomationTrigger message.

This message contains a oneof named auth_config. Only a single field of the following list may be set at a time:
  - jwt
  - hmac
  - capabilityUrl


## Example Usage

```typescript
import { WebhookAutomationTrigger } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookAutomationTrigger = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `capabilityUrl`                                                                                           | [shared.WebhookListenerAuthCapabilityURL](../../../sdk/models/shared/webhooklistenerauthcapabilityurl.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `hmac`                                                                                                    | [shared.WebhookListenerAuthHMAC](../../../sdk/models/shared/webhooklistenerauthhmac.md)                   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `jwt`                                                                                                     | [shared.WebhookListenerAuthJWT](../../../sdk/models/shared/webhooklistenerauthjwt.md)                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `listenerId`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Optional existing listener ID (hidden field from frontend)                                                |