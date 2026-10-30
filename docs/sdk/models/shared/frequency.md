# Frequency

Frequency of the recurrence: FREQUENCY_DAILY, FREQUENCY_WEEKLY, FREQUENCY_MONTHLY, or FREQUENCY_YEARLY.
 Use FREQUENCY_NONE for a non-recurring schedule.

## Example Usage

```typescript
import { Frequency } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Frequency = "FREQUENCY_DAILY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FREQUENCY_UNSPECIFIED" | "FREQUENCY_NONE" | "FREQUENCY_DAILY" | "FREQUENCY_WEEKLY" | "FREQUENCY_MONTHLY" | "FREQUENCY_YEARLY" | Unrecognized<string>
```