# ErrorKind

Classification of last_error. Unspecified when no classified error is present.

## Example Usage

```typescript
import { ErrorKind } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ErrorKind = "ERROR_KIND_AUTHORED_RUNTIME_SERVE_REFUSED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ERROR_KIND_UNSPECIFIED" | "ERROR_KIND_AUTHORED_RUNTIME_SERVE_REFUSED" | Unrecognized<string>
```