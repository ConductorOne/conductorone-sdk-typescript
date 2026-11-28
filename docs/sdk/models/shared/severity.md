# Severity

Configured severity for new findings. Defaults to medium when unset.
 The value is stored, but monitor responses and new findings use medium until
 configured severity is enabled for your tenant.

## Example Usage

```typescript
import { Severity } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Severity = "FINDING_SEVERITY_CRITICAL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FINDING_SEVERITY_UNSPECIFIED" | "FINDING_SEVERITY_INFO" | "FINDING_SEVERITY_LOW" | "FINDING_SEVERITY_MEDIUM" | "FINDING_SEVERITY_HIGH" | "FINDING_SEVERITY_CRITICAL" | Unrecognized<string>
```