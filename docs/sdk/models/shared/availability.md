# Availability

Data availability for the requested reporting window.

## Example Usage

```typescript
import { Availability } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Availability = "REPORTING_AVAILABILITY_NO_ACTIVITY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REPORTING_AVAILABILITY_UNSPECIFIED" | "REPORTING_AVAILABILITY_COMPLETE" | "REPORTING_AVAILABILITY_PARTIAL_RETENTION" | "REPORTING_AVAILABILITY_OUTSIDE_RETENTION" | "REPORTING_AVAILABILITY_NO_ACTIVITY" | Unrecognized<string>
```