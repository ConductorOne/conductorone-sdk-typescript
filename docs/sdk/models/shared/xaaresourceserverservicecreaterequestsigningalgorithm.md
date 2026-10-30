# XAAResourceServerServiceCreateRequestSigningAlgorithm

JWS algorithm for grants minted for this server. UNSPECIFIED uses the
 tenant default.

## Example Usage

```typescript
import { XAAResourceServerServiceCreateRequestSigningAlgorithm } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAResourceServerServiceCreateRequestSigningAlgorithm =
  "XAA_SIGNING_ALGORITHM_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"XAA_SIGNING_ALGORITHM_UNSPECIFIED" | "XAA_SIGNING_ALGORITHM_EDDSA" | "XAA_SIGNING_ALGORITHM_RS256" | "XAA_SIGNING_ALGORITHM_ES256" | Unrecognized<string>
```