# WebhookListenerAuthCapabilityURL

Capability URL authentication: the URL itself contains an unguessable token that acts
 as the credential. This is simpler to integrate but less secure than JWT or HMAC because
 the token can leak via server logs, referrer headers, and URL sharing.
 See https://www.w3.org/TR/capability-urls/ for background.

## Example Usage

```typescript
import { WebhookListenerAuthCapabilityURL } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookListenerAuthCapabilityURL = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |