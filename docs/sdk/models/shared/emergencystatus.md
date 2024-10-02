# EmergencyStatus

Search tasks that are or are not emergency access.

## Example Usage

```typescript
import { EmergencyStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EmergencyStatus = "UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNSPECIFIED" | "ALL" | "NON_EMERGENCY" | "EMERGENCY" | Unrecognized<string>
```