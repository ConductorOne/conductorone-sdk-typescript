# EdgeCredentialInjection

EdgeCredentialInjection binds one C1 vault secret to one request header.

## Example Usage

```typescript
import { EdgeCredentialInjection } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeCredentialInjection = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `contentType`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The secret's stored content type. Defaults to "api_key".          |
| `headerName`                                                      | *string*                                                          | :heavy_minus_sign:                                                | Header to set, replacing any value supplied by the caller.        |
| `hostPattern`                                                     | *string*                                                          | :heavy_minus_sign:                                                | Destination host glob, e.g. "api.example.com" or "*.example.com". |
| `pathPattern`                                                     | *string*                                                          | :heavy_minus_sign:                                                | Request path glob, e.g. "/v1/*". Empty matches every path.        |
| `secretId`                                                        | *string*                                                          | :heavy_minus_sign:                                                | Secret to inject.                                                 |
| `valuePrefix`                                                     | *string*                                                          | :heavy_minus_sign:                                                | Literal text placed before the secret value, e.g. "Bearer ".      |
| `vaultId`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Vault holding the secret.                                         |