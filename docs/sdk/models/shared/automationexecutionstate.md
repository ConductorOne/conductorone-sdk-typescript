# AutomationExecutionState

The state field.

## Example Usage

```typescript
import { AutomationExecutionState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AutomationExecutionState = "AUTOMATION_EXECUTION_STATE_ERROR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AUTOMATION_EXECUTION_STATE_UNSPECIFIED" | "AUTOMATION_EXECUTION_STATE_PENDING" | "AUTOMATION_EXECUTION_STATE_CREATING" | "AUTOMATION_EXECUTION_STATE_GET_STEP" | "AUTOMATION_EXECUTION_STATE_PROCESS_STEP" | "AUTOMATION_EXECUTION_STATE_COMPLETE_STEP" | "AUTOMATION_EXECUTION_STATE_DONE" | "AUTOMATION_EXECUTION_STATE_ERROR" | "AUTOMATION_EXECUTION_STATE_TERMINATE" | "AUTOMATION_EXECUTION_STATE_WAITING" | Unrecognized<string>
```