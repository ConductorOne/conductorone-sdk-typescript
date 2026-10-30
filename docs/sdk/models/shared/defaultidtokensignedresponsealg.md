# DefaultIdTokenSignedResponseAlg

The id_token signing algorithm applied to OIDC applications that do not
 choose one. When unset, the server uses EdDSA.

## Example Usage

```typescript
import { DefaultIdTokenSignedResponseAlg } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultIdTokenSignedResponseAlg = "OIDC_SIGNING_ALGORITHM_EDDSA";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OIDC_SIGNING_ALGORITHM_UNSPECIFIED" | "OIDC_SIGNING_ALGORITHM_EDDSA" | "OIDC_SIGNING_ALGORITHM_ES256" | "OIDC_SIGNING_ALGORITHM_RS256" | Unrecognized<string>
```