# Severity

The severity field.

## Example Usage

```typescript
import { Severity } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Severity = "UNKNOWN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "HINT" | "INFO" | "WARNING" | "ERROR" | Unrecognized<string>
```