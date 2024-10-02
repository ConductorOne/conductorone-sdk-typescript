# Status

The status of the user in the system.

## Example Usage

```typescript
import { Status } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Status = "DELETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "ENABLED" | "DISABLED" | "DELETED" | Unrecognized<string>
```