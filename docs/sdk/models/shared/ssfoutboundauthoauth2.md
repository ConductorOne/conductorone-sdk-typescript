# SSFOutboundAuthOAuth2

SSFOutboundAuthOAuth2 uses OAuth2 client credentials for outbound auth.
 client_secret is write-only: accepted on create/update, never returned.

## Example Usage

```typescript
import { SSFOutboundAuthOAuth2 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFOutboundAuthOAuth2 = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `clientId`              | *string*                | :heavy_minus_sign:      | The clientId field.     |
| `clientSecret`          | *string*                | :heavy_minus_sign:      | The clientSecret field. |
| `scopes`                | *string*[]              | :heavy_minus_sign:      | The scopes field.       |
| `tokenUrl`              | *string*                | :heavy_minus_sign:      | The tokenUrl field.     |