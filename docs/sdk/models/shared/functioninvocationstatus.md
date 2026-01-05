# FunctionInvocationStatus

The status field.

## Example Usage

```typescript
import { FunctionInvocationStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionInvocationStatus = "FUNCTION_INVOCATION_STATUS_RUNNING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FUNCTION_INVOCATION_STATUS_UNSPECIFIED" | "FUNCTION_INVOCATION_STATUS_PENDING" | "FUNCTION_INVOCATION_STATUS_RUNNING" | "FUNCTION_INVOCATION_STATUS_SUCCESS" | "FUNCTION_INVOCATION_STATUS_ERROR" | Unrecognized<string>
```