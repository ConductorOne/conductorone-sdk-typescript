# DefaultSigningAlgorithm

Tenant-default signing algorithm. UNSPECIFIED resolves to ES256.

## Example Usage

```typescript
import { DefaultSigningAlgorithm } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultSigningAlgorithm = "XAA_SIGNING_ALGORITHM_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"XAA_SIGNING_ALGORITHM_UNSPECIFIED" | "XAA_SIGNING_ALGORITHM_EDDSA" | "XAA_SIGNING_ALGORITHM_RS256" | "XAA_SIGNING_ALGORITHM_ES256" | Unrecognized<string>
```