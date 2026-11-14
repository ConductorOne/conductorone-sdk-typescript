# RateLimitScope

Whose requests the limit counts.

## Example Usage

```typescript
import { RateLimitScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RateLimitScope = "SCOPE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SCOPE_UNSPECIFIED" | "SCOPE_ORGANIZATION" | "SCOPE_USER" | "SCOPE_API_KEY" | "SCOPE_UNAUTHENTICATED" | "SCOPE_UNAUTHENTICATED_PER_IP" | Unrecognized<string>
```