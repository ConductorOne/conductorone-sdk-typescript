# SSOApplicationOIDCConfig

SSOApplicationOIDCConfig is the OIDC-specific sign-in configuration.

## Example Usage

```typescript
import { SSOApplicationOIDCConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationOIDCConfig = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `claimMappings`                                                                                                     | [shared.OIDCClaimMapping](../../../sdk/models/shared/oidcclaimmapping.md)[]                                         | :heavy_minus_sign:                                                                                                  | Custom claims released to this application, in addition to the standard<br/> claims its granted scopes already release. |
| `idTokenSignedResponseAlg`                                                                                          | [shared.IdTokenSignedResponseAlg](../../../sdk/models/shared/idtokensignedresponsealg.md)                           | :heavy_minus_sign:                                                                                                  | The algorithm used to sign this application's id_token.                                                             |