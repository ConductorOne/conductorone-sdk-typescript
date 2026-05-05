# Outcome

Restricts results to events with this processing outcome. Optional.

## Example Usage

```typescript
import { Outcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Outcome = "SSF_EVENT_OUTCOME_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSF_EVENT_OUTCOME_UNSPECIFIED" | "SSF_EVENT_OUTCOME_SESSIONS_REVOKED" | "SSF_EVENT_OUTCOME_LOGGED" | "SSF_EVENT_OUTCOME_PRINCIPAL_NOT_FOUND" | "SSF_EVENT_OUTCOME_VERIFIED" | "SSF_EVENT_OUTCOME_STREAM_STATUS_UPDATED" | "SSF_EVENT_OUTCOME_UNRECOGNIZED" | "SSF_EVENT_OUTCOME_ERROR" | Unrecognized<string>
```