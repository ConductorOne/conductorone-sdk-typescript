# ExporterState

The state field.

## Example Usage

```typescript
import { ExporterState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExporterState = "EXPORT_STATE_ERROR";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EXPORT_STATE_UNSPECIFIED" | "EXPORT_STATE_EXPORTING" | "EXPORT_STATE_WAITING" | "EXPORT_STATE_ERROR" | Unrecognized<string>
```