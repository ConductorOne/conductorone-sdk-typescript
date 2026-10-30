# AppCapServiceSetLimitRequestPeriod

Optional period override. Only valid together with the limit it denominates.

## Example Usage

```typescript
import { AppCapServiceSetLimitRequestPeriod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppCapServiceSetLimitRequestPeriod = "PERIOD_KIND_WEEKLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERIOD_KIND_UNSPECIFIED" | "PERIOD_KIND_DAILY" | "PERIOD_KIND_WEEKLY" | "PERIOD_KIND_MONTHLY" | "PERIOD_KIND_QUARTERLY" | "PERIOD_KIND_YEARLY" | Unrecognized<string>
```