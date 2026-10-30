# NameIdFormat

Set this when the service provider requires a specific NameID format. This
 also selects the NameID value semantics: EMAIL_ADDRESS uses the user's
 primary email, TRANSIENT creates a new value for each sign-in, and
 PERSISTENT uses the application's pairwise subject. Immutable once set.

## Example Usage

```typescript
import { NameIdFormat } from "conductorone-sdk-typescript/sdk/models/shared";

let value: NameIdFormat = "SAML_NAME_ID_FORMAT_TRANSIENT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SAML_NAME_ID_FORMAT_UNSPECIFIED" | "SAML_NAME_ID_FORMAT_PERSISTENT" | "SAML_NAME_ID_FORMAT_EMAIL_ADDRESS" | "SAML_NAME_ID_FORMAT_UNSPECIFIED_URN" | "SAML_NAME_ID_FORMAT_TRANSIENT" | Unrecognized<string>
```