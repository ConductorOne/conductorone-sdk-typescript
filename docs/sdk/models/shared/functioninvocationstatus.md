# FunctionInvocationStatus

The status field.

## Example Usage

```typescript
import { FunctionInvocationStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionInvocationStatus = "FUNCTION_INVOCATION_STATUS_ERROR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FUNCTION_INVOCATION_STATUS_UNSPECIFIED" | "FUNCTION_INVOCATION_STATUS_PENDING" | "FUNCTION_INVOCATION_STATUS_RUNNING" | "FUNCTION_INVOCATION_STATUS_SUCCESS" | "FUNCTION_INVOCATION_STATUS_ERROR" | "FUNCTION_INVOCATION_STATUS_CANCELLATION_REQUESTED" | "FUNCTION_INVOCATION_STATUS_CANCELLED" | "FUNCTION_INVOCATION_STATUS_UNKNOWN" | Unrecognized<string>
```