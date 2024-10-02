# Processing

The processing state of a task as defined by the `processing_enum`

## Example Usage

```typescript
import { Processing } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Processing = "TASK_PROCESSING_TYPE_WAITING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TASK_PROCESSING_TYPE_UNSPECIFIED" | "TASK_PROCESSING_TYPE_PROCESSING" | "TASK_PROCESSING_TYPE_WAITING" | "TASK_PROCESSING_TYPE_DONE" | Unrecognized<string>
```