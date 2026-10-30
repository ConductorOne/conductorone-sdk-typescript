# JudgeOutcome

Whether the routing algorithm could use this judge attempt's reply. Set
 only on judge provider-attempt rows Time Bandit recorded it for.

## Example Usage

```typescript
import { JudgeOutcome } from "conductorone-sdk-typescript/sdk/models/shared";

let value: JudgeOutcome = "TB_JUDGE_OUTCOME_USABLE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TB_JUDGE_OUTCOME_UNSPECIFIED" | "TB_JUDGE_OUTCOME_USABLE" | "TB_JUDGE_OUTCOME_UNUSABLE" | "TB_JUDGE_OUTCOME_CALL_FAILED" | "TB_JUDGE_OUTCOME_UNREPORTED" | Unrecognized<string>
```