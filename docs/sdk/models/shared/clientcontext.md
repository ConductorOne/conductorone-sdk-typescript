# ClientContext

The ClientContext message.

## Example Usage

```typescript
import { ClientContext } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ClientContext = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `agentConversationId`          | *string*                       | :heavy_minus_sign:             | The agentConversationId field. |
| `agentSessionId`               | *string*                       | :heavy_minus_sign:             | The agentSessionId field.      |
| `appVersion`                   | *string*                       | :heavy_minus_sign:             | The appVersion field.          |
| `featureFlags`                 | *string*[]                     | :heavy_minus_sign:             | The featureFlags field.        |
| `locale`                       | *string*                       | :heavy_minus_sign:             | The locale field.              |
| `route`                        | *string*                       | :heavy_minus_sign:             | The route field.               |
| `url`                          | *string*                       | :heavy_minus_sign:             | The url field.                 |
| `userAgent`                    | *string*                       | :heavy_minus_sign:             | The userAgent field.           |
| `viewport`                     | *string*                       | :heavy_minus_sign:             | The viewport field.            |