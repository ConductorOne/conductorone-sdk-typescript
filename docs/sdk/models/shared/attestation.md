# Attestation

How strictly the authenticator's origin must be attested.

## Example Usage

```typescript
import { Attestation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Attestation = "ATTESTATION_REQUIREMENT_NONE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ATTESTATION_REQUIREMENT_UNSPECIFIED" | "ATTESTATION_REQUIREMENT_NONE" | "ATTESTATION_REQUIREMENT_INDIRECT" | "ATTESTATION_REQUIREMENT_DIRECT" | "ATTESTATION_REQUIREMENT_ENTERPRISE" | Unrecognized<string>
```