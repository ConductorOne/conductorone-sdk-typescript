# WebhookProvision

This provision step indicates that a webhook should be called to provision this entitlement.

## Example Usage

```typescript
import { WebhookProvision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookProvision = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `webhookId`                                     | *string*                                        | :heavy_minus_sign:                              | The ID of the webhook to call for provisioning. |