# TBEgressDenialGroupOutcome

DENIED, WOULD_DENY or ALLOWED. A flow an observe-mode Edge's policy
 denied but a later check also denied is DENIED.

## Example Usage

```typescript
import { TBEgressDenialGroupOutcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TBEgressDenialGroupOutcome = "TB_EGRESS_FLOW_OUTCOME_WOULD_DENY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TB_EGRESS_FLOW_OUTCOME_UNSPECIFIED" | "TB_EGRESS_FLOW_OUTCOME_DENIED" | "TB_EGRESS_FLOW_OUTCOME_WOULD_DENY" | "TB_EGRESS_FLOW_OUTCOME_ALLOWED" | Unrecognized<string>
```