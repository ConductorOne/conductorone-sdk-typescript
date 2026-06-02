# ClearAutomationCircuitBreakerRequest

The ClearAutomationCircuitBreakerRequest message.

## Example Usage

```typescript
import { ClearAutomationCircuitBreakerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ClearAutomationCircuitBreakerRequest = {};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `decision`                                                                                                                                                                       | [shared.Decision](../../../sdk/models/shared/decision.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                               | What to do with paused executions. UNSPECIFIED means clear the breaker<br/> only (backward-compatible default). RUN or CANCEL creates a bulk action<br/> to resolve them asynchronously. |
| `reason`                                                                                                                                                                         | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Admin-supplied reason when decision is CANCEL. Up to 1024 bytes.                                                                                                                 |