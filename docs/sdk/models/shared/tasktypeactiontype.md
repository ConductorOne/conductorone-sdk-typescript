# TaskTypeActionType

Flavor of action the ticket represents — mirrors the snapshot's
 target_ref variant.

## Example Usage

```typescript
import { TaskTypeActionType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeActionType = "TYPE_GRANT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TYPE_UNSPECIFIED" | "TYPE_GRANT" | "TYPE_WORKFLOW" | "TYPE_RESOURCE_ACTION" | Unrecognized<string>
```