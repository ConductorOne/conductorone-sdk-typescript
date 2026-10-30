# PkcePolicy

PKCE is required by default on create. On update, UNSPECIFIED preserves
 the current policy; set REQUIRED_S256 explicitly to tighten a legacy
 confidential client.

## Example Usage

```typescript
import { PkcePolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PkcePolicy =
  "SSO_APPLICATION_OIDC_PKCE_POLICY_ALLOW_MISSING_FOR_LEGACY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSO_APPLICATION_OIDC_PKCE_POLICY_UNSPECIFIED" | "SSO_APPLICATION_OIDC_PKCE_POLICY_REQUIRED_S256" | "SSO_APPLICATION_OIDC_PKCE_POLICY_ALLOW_MISSING_FOR_LEGACY" | Unrecognized<string>
```