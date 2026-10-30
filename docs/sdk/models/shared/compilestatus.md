# CompileStatus

Compile state of the published commit for the function's current
 configuration. Populated by GetFunction only; unset in list responses.

## Example Usage

```typescript
import { CompileStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CompileStatus = "FUNCTION_COMPILE_STATUS_NOT_COMPILED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FUNCTION_COMPILE_STATUS_UNSPECIFIED" | "FUNCTION_COMPILE_STATUS_NOT_COMPILED" | "FUNCTION_COMPILE_STATUS_COMPILING" | "FUNCTION_COMPILE_STATUS_READY" | "FUNCTION_COMPILE_STATUS_FAILED" | Unrecognized<string>
```