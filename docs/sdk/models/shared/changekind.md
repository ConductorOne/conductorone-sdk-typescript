# ChangeKind

Storage-model enum re-exported here for wire compatibility with the
 storage row. UNSPECIFIED should never appear on the wire.

## Example Usage

```typescript
import { ChangeKind } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ChangeKind = "CHANGE_KIND_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CHANGE_KIND_UNSPECIFIED" | "CHANGE_KIND_CREATE" | "CHANGE_KIND_PUT" | "CHANGE_KIND_HARD_DELETE" | Unrecognized<string>
```