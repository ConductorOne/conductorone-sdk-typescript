# Persistence

Whether sessions may persist across browser restarts.

## Example Usage

```typescript
import { Persistence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Persistence = "PERSISTENCE_MODE_SESSION_ONLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERSISTENCE_MODE_UNSPECIFIED" | "PERSISTENCE_MODE_ALLOW_USER_CHOICE" | "PERSISTENCE_MODE_ALWAYS_PERSIST" | "PERSISTENCE_MODE_SESSION_ONLY" | Unrecognized<string>
```