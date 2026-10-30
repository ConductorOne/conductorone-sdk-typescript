# ExternalOAuthClientInfoAuthMethod

Token-endpoint authentication method. Populated for static clients.

## Example Usage

```typescript
import { ExternalOAuthClientInfoAuthMethod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalOAuthClientInfoAuthMethod =
  "EXTERNAL_O_AUTH_CLIENT_AUTH_METHOD_CLIENT_SECRET_POST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EXTERNAL_O_AUTH_CLIENT_AUTH_METHOD_UNSPECIFIED" | "EXTERNAL_O_AUTH_CLIENT_AUTH_METHOD_CLIENT_SECRET_BASIC" | "EXTERNAL_O_AUTH_CLIENT_AUTH_METHOD_CLIENT_SECRET_POST" | "EXTERNAL_O_AUTH_CLIENT_AUTH_METHOD_PRIVATE_KEY_JWT" | Unrecognized<string>
```