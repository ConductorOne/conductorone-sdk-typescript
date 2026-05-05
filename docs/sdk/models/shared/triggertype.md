# TriggerType

How this run was initiated (e.g., manual, scheduled).

## Example Usage

```typescript
import { TriggerType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TriggerType = "TRIGGER_TYPE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TRIGGER_TYPE_UNSPECIFIED" | "TRIGGER_TYPE_MANUAL" | "TRIGGER_TYPE_UPLIFT_COMPLETION" | "TRIGGER_TYPE_SCHEDULED" | "TRIGGER_TYPE_DIRECTORY_MERGE" | Unrecognized<string>
```