# Frequency

The frequency field.

## Example Usage

```typescript
import { Frequency } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Frequency = "FREQUENCY_DAILY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FREQUENCY_UNSPECIFIED" | "FREQUENCY_NONE" | "FREQUENCY_DAILY" | "FREQUENCY_WEEKLY" | "FREQUENCY_MONTHLY" | "FREQUENCY_YEARLY" | Unrecognized<string>
```