# ProviderType

Provider type (read-only after creation — provider config determines type).

## Example Usage

```typescript
import { ProviderType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProviderType = "AUTH_CONFIG_PROVIDER_TYPE_OKTA";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTH_CONFIG_PROVIDER_TYPE_UNSPECIFIED" | "AUTH_CONFIG_PROVIDER_TYPE_GOOGLE" | "AUTH_CONFIG_PROVIDER_TYPE_MICROSOFT" | "AUTH_CONFIG_PROVIDER_TYPE_OKTA" | "AUTH_CONFIG_PROVIDER_TYPE_ONELOGIN" | "AUTH_CONFIG_PROVIDER_TYPE_JUMPCLOUD" | "AUTH_CONFIG_PROVIDER_TYPE_PINGONE" | "AUTH_CONFIG_PROVIDER_TYPE_OIDC" | "AUTH_CONFIG_PROVIDER_TYPE_C1_LOCAL" | Unrecognized<string>
```