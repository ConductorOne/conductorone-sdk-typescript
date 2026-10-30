# AuthRejectionSourceClass

Set only when outcome is AUTH_REJECTED. Class of the peer address.

## Example Usage

```typescript
import { AuthRejectionSourceClass } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthRejectionSourceClass = "TB_AUTH_REJECTION_SOURCE_CLASS_UNKNOWN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TB_AUTH_REJECTION_SOURCE_CLASS_UNSPECIFIED" | "TB_AUTH_REJECTION_SOURCE_CLASS_LOOPBACK" | "TB_AUTH_REJECTION_SOURCE_CLASS_PRIVATE" | "TB_AUTH_REJECTION_SOURCE_CLASS_PUBLIC" | "TB_AUTH_REJECTION_SOURCE_CLASS_UNKNOWN" | Unrecognized<string>
```