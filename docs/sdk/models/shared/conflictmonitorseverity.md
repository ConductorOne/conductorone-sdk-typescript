# ConflictMonitorSeverity

Effective severity for new findings from this monitor. This is medium until
 configured severity is enabled for your tenant, even if another value is stored.

## Example Usage

```typescript
import { ConflictMonitorSeverity } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConflictMonitorSeverity = "FINDING_SEVERITY_LOW";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FINDING_SEVERITY_UNSPECIFIED" | "FINDING_SEVERITY_INFO" | "FINDING_SEVERITY_LOW" | "FINDING_SEVERITY_MEDIUM" | "FINDING_SEVERITY_HIGH" | "FINDING_SEVERITY_CRITICAL" | Unrecognized<string>
```