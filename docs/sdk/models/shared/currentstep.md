# CurrentStep

Search tasks that have this type of step as the current step.

## Example Usage

```typescript
import { CurrentStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CurrentStep = "TASK_SEARCH_CURRENT_STEP_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TASK_SEARCH_CURRENT_STEP_UNSPECIFIED" | "TASK_SEARCH_CURRENT_STEP_APPROVAL" | "TASK_SEARCH_CURRENT_STEP_PROVISION" | Unrecognized<string>
```