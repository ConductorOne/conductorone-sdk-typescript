# PaperSecretServiceCreateExternalRequestSecretType

Secret type: TEXT or FILE.
 TEXT secrets use SetTextContent to upload encrypted content (max 64KB).
 FILE secrets use the upload_url from CreateResponse to upload encrypted content (max 1GB).

## Example Usage

```typescript
import { PaperSecretServiceCreateExternalRequestSecretType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PaperSecretServiceCreateExternalRequestSecretType =
  "SECRET_TYPE_FILE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SECRET_TYPE_UNSPECIFIED" | "SECRET_TYPE_TEXT" | "SECRET_TYPE_FILE" | Unrecognized<string>
```