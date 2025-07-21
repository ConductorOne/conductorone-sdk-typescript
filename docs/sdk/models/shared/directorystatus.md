# DirectoryStatus

The status of the user in the directory.

## Example Usage

```typescript
import { DirectoryStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryStatus = "ENABLED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "ENABLED" | "DISABLED" | "DELETED" | Unrecognized<string>
```