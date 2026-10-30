# Verdict

Restricts results to destinations with at least one row of this
 outcome. TB_TRAFFIC_OUTCOME_UNSPECIFIED applies no verdict filter.

## Example Usage

```typescript
import { Verdict } from "conductorone-sdk-typescript/sdk/models/operations";

let value: Verdict = "TB_TRAFFIC_OUTCOME_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TB_TRAFFIC_OUTCOME_UNSPECIFIED" | "TB_TRAFFIC_OUTCOME_ALLOWED" | "TB_TRAFFIC_OUTCOME_DENIED" | "TB_TRAFFIC_OUTCOME_AUTH_REJECTED" | Unrecognized<string>
```