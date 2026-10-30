# CreateFindingRequestSeverity

Severity of the finding. Must be a defined, non-unspecified value.

## Example Usage

```typescript
import { CreateFindingRequestSeverity } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateFindingRequestSeverity = "FINDING_SEVERITY_MEDIUM";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FINDING_SEVERITY_UNSPECIFIED" | "FINDING_SEVERITY_INFO" | "FINDING_SEVERITY_LOW" | "FINDING_SEVERITY_MEDIUM" | "FINDING_SEVERITY_HIGH" | "FINDING_SEVERITY_CRITICAL" | Unrecognized<string>
```