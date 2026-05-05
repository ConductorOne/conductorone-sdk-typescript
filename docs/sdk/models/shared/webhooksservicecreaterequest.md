# WebhooksServiceCreateRequest

The WebhooksServiceCreateRequest message.

## Example Usage

```typescript
import { WebhooksServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhooksServiceCreateRequest = {
  displayName: "Kiera.Parisian62",
  url: "https://pretty-parsnip.info/",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `callbackTimeout`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | An optional description of the webhook's purpose.                        |
| `displayName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | The human-readable name for the new webhook.                             |
| `url`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | The destination URL that will receive event notification HTTP callbacks. |