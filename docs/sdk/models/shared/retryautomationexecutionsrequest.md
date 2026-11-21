# RetryAutomationExecutionsRequest

The RetryAutomationExecutionsRequest message.

## Example Usage

```typescript
import { RetryAutomationExecutionsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RetryAutomationExecutionsRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `executionIds`                                                   | *number*[]                                                       | :heavy_minus_sign:                                               | The failed automation executions to retry. Up to 50 per request. |