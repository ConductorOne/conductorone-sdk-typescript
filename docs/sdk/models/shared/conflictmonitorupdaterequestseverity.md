# ConflictMonitorUpdateRequestSeverity

Configured severity for new findings. Unset preserves the stored value.
 Explicit values replace the stored configuration, even when responses use medium.
 Monitor responses and new findings use medium until configured severity is
 enabled for your tenant.

## Example Usage

```typescript
import { ConflictMonitorUpdateRequestSeverity } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConflictMonitorUpdateRequestSeverity = "FINDING_SEVERITY_CRITICAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FINDING_SEVERITY_UNSPECIFIED" | "FINDING_SEVERITY_INFO" | "FINDING_SEVERITY_LOW" | "FINDING_SEVERITY_MEDIUM" | "FINDING_SEVERITY_HIGH" | "FINDING_SEVERITY_CRITICAL" | Unrecognized<string>
```