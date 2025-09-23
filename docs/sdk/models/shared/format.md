# Format

The format field.

## Example Usage

```typescript
import { Format } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Format = "EXPORT_FORMAT_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EXPORT_FORMAT_UNSPECIFIED" | "EXPORT_FORMAT_OCSF_JSON_ZSTD" | "EXPORT_FORMAT_OCSF_JSON_GZIP" | Unrecognized<string>
```