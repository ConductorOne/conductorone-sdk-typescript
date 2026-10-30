# IdTokenSignedResponseAlg

The algorithm used to sign this application's id_token.

## Example Usage

```typescript
import { IdTokenSignedResponseAlg } from "conductorone-sdk-typescript/sdk/models/shared";

let value: IdTokenSignedResponseAlg = "OIDC_SIGNING_ALGORITHM_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OIDC_SIGNING_ALGORITHM_UNSPECIFIED" | "OIDC_SIGNING_ALGORITHM_EDDSA" | "OIDC_SIGNING_ALGORITHM_ES256" | "OIDC_SIGNING_ALGORITHM_RS256" | Unrecognized<string>
```