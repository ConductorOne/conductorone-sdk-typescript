# SSOApplicationOIDCClientPkcePolicy

Effective PKCE policy.

## Example Usage

```typescript
import { SSOApplicationOIDCClientPkcePolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationOIDCClientPkcePolicy =
  "SSO_APPLICATION_OIDC_PKCE_POLICY_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSO_APPLICATION_OIDC_PKCE_POLICY_UNSPECIFIED" | "SSO_APPLICATION_OIDC_PKCE_POLICY_REQUIRED_S256" | "SSO_APPLICATION_OIDC_PKCE_POLICY_ALLOW_MISSING_FOR_LEGACY" | Unrecognized<string>
```