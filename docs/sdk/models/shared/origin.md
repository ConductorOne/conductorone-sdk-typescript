# Origin

The origin of the user, describing who owns the user's lifecycle.

## Example Usage

```typescript
import { Origin } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Origin = "USER_ORIGIN_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"USER_ORIGIN_UNSPECIFIED" | "USER_ORIGIN_DIRECTORY" | "USER_ORIGIN_LOCAL" | "USER_ORIGIN_SYSTEM" | Unrecognized<string>
```