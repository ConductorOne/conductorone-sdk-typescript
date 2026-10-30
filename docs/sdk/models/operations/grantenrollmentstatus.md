# GrantEnrollmentStatus

Filters by whether the user already holds the connector's tools.
 UNSPECIFIED = all, FULLY_GRANTED = held, NOT_GRANTED = available.

## Example Usage

```typescript
import { GrantEnrollmentStatus } from "conductorone-sdk-typescript/sdk/models/operations";

let value: GrantEnrollmentStatus = "GRANT_ENROLLMENT_STATUS_PARTIALLY_GRANTED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"GRANT_ENROLLMENT_STATUS_UNSPECIFIED" | "GRANT_ENROLLMENT_STATUS_FULLY_GRANTED" | "GRANT_ENROLLMENT_STATUS_NOT_GRANTED" | "GRANT_ENROLLMENT_STATUS_PARTIALLY_GRANTED" | Unrecognized<string>
```