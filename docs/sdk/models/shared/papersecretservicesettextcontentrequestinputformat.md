# PaperSecretServiceSetTextContentRequestInputFormat

Input format hint for the viewer UI when the secret is decrypted.
 Does not affect encryption — this is metadata only.

## Example Usage

```typescript
import { PaperSecretServiceSetTextContentRequestInputFormat } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretServiceSetTextContentRequestInputFormat =
  "SECRET_INPUT_FORMAT_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SECRET_INPUT_FORMAT_UNSPECIFIED" | "SECRET_INPUT_FORMAT_PLAINTEXT" | "SECRET_INPUT_FORMAT_JSON" | "SECRET_INPUT_FORMAT_YAML" | "SECRET_INPUT_FORMAT_KEY_VALUE" | Unrecognized<string>
```