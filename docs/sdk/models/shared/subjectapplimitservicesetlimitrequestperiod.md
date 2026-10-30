# SubjectAppLimitServiceSetLimitRequestPeriod

Optional period override. Only valid together with the limit it denominates.

## Example Usage

```typescript
import { SubjectAppLimitServiceSetLimitRequestPeriod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SubjectAppLimitServiceSetLimitRequestPeriod = "PERIOD_KIND_YEARLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERIOD_KIND_UNSPECIFIED" | "PERIOD_KIND_DAILY" | "PERIOD_KIND_WEEKLY" | "PERIOD_KIND_MONTHLY" | "PERIOD_KIND_QUARTERLY" | "PERIOD_KIND_YEARLY" | Unrecognized<string>
```