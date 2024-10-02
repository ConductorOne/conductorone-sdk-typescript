# WebhookInstanceState

The state field.

## Example Usage

```typescript
import { WebhookInstanceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WebhookInstanceState = "WEBHOOK_STATE_PROCESS_RESPONSE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"WEBHOOK_STATE_UNSPECIFIED" | "WEBHOOK_STATE_PENDING" | "WEBHOOK_STATE_RUNNING" | "WEBHOOK_STATE_ERROR" | "WEBHOOK_STATE_WAITING_CALLBACK" | "WEBHOOK_STATE_PROCESS_RESPONSE" | "WEBHOOK_STATE_SUCCESS" | "WEBHOOK_STATE_FATAL_ERROR" | Unrecognized<string>
```