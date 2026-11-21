# RetryAutomationExecutionResult

The RetryAutomationExecutionResult message.

## Example Usage

```typescript
import { RetryAutomationExecutionResult } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RetryAutomationExecutionResult = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `executionId`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | The automation execution this result is for.                       |
| `retried`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | True when the execution was queued to resume from its failed step. |
| `skippedReason`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | Why the execution was not retried. Empty when retried is true.     |