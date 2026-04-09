# PaperSecretServiceCreateExternalRequestInputFormat

For TEXT secrets: hint about the plaintext format (e.g., JSON, YAML, key-value).
 Used by the viewer UI for syntax highlighting. Does not affect encryption.

## Example Usage

```typescript
import { PaperSecretServiceCreateExternalRequestInputFormat } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretServiceCreateExternalRequestInputFormat =
  "SECRET_INPUT_FORMAT_YAML";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SECRET_INPUT_FORMAT_UNSPECIFIED" | "SECRET_INPUT_FORMAT_PLAINTEXT" | "SECRET_INPUT_FORMAT_JSON" | "SECRET_INPUT_FORMAT_YAML" | "SECRET_INPUT_FORMAT_KEY_VALUE" | Unrecognized<string>
```