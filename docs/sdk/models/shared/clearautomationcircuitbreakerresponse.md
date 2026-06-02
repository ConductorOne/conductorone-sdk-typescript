# ClearAutomationCircuitBreakerResponse

The ClearAutomationCircuitBreakerResponse message.

## Example Usage

```typescript
import { ClearAutomationCircuitBreakerResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ClearAutomationCircuitBreakerResponse = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bulkActionId`                                                                                                                                         | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The bulk action ID if a bulk action was created to resolve paused<br/> executions. Empty when decision is UNSPECIFIED or there were no<br/> paused executions. |