# Origin

The origin field.

## Example Usage

```typescript
import { Origin } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Origin = "TASK_ORIGIN_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TASK_ORIGIN_UNSPECIFIED" | "TASK_ORIGIN_PROFILE_MEMBERSHIP_AUTOMATION" | "TASK_ORIGIN_SLACK" | "TASK_ORIGIN_API" | "TASK_ORIGIN_JIRA" | "TASK_ORIGIN_COPILOT" | "TASK_ORIGIN_WEBAPP" | "TASK_ORIGIN_TIME_REVOKE" | "TASK_ORIGIN_NON_USAGE_REVOKE" | Unrecognized<string>
```