# AuthConfigOIDC

The AuthConfigOIDC message.

## Example Usage

```typescript
import { AuthConfigOIDC } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthConfigOIDC = {};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `exactMatchClaims`          | Record<string, *string*>    | :heavy_minus_sign:          | The exactMatchClaims field. |
| `issuerId`                  | *string*                    | :heavy_minus_sign:          | The issuerId field.         |
| `oidcClientId`              | *string*                    | :heavy_minus_sign:          | The oidcClientId field.     |
| `oidcClientSecret`          | *string*                    | :heavy_minus_sign:          | The oidcClientSecret field. |
| `scopes`                    | *string*[]                  | :heavy_minus_sign:          | The scopes field.           |