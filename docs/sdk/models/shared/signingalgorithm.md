# SigningAlgorithm

JWS algorithm for grants minted for this server. UNSPECIFIED uses the
 tenant default. Minting fails if no active signing key exists for the
 resolved algorithm.

## Example Usage

```typescript
import { SigningAlgorithm } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SigningAlgorithm = "XAA_SIGNING_ALGORITHM_RS256";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"XAA_SIGNING_ALGORITHM_UNSPECIFIED" | "XAA_SIGNING_ALGORITHM_EDDSA" | "XAA_SIGNING_ALGORITHM_RS256" | "XAA_SIGNING_ALGORITHM_ES256" | Unrecognized<string>
```