# TaskTypes

## Example Usage

```typescript
import { TaskTypes } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypes = "TASK_TYPE_REVOKE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TASK_TYPE_UNSPECIFIED" | "TASK_TYPE_REQUEST" | "TASK_TYPE_REVOKE" | "TASK_TYPE_REVIEW" | Unrecognized<string>
```