# FunctionsServiceCreateFunctionRequestFunctionType

The type of function to create. Use FUNCTION_TYPE_ANY for user functions —
 that is the type the Functions UI lists. Do not use any other value.

## Example Usage

```typescript
import { FunctionsServiceCreateFunctionRequestFunctionType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceCreateFunctionRequestFunctionType =
  "FUNCTION_TYPE_ANY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FUNCTION_TYPE_UNSPECIFIED" | "FUNCTION_TYPE_ANY" | "FUNCTION_TYPE_CODE_MODE" | Unrecognized<string>
```