# TBFederatedSession

TBFederatedSession is TB's secret-free hosted OAuth session lineage for a
 cryptographically attested call (see AuditFederatedSession in the TB
 sink). grant_jti_hash and proof_key_thumbprint are a hash and a public key
 thumbprint, not secrets.

## Example Usage

```typescript
import { TBFederatedSession } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TBFederatedSession = {};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `clientId`                    | *string*                      | :heavy_minus_sign:            | The clientId field.           |
| `grantJtiHash`                | *string*                      | :heavy_minus_sign:            | The grantJtiHash field.       |
| `issuerName`                  | *string*                      | :heavy_minus_sign:            | The issuerName field.         |
| `proofKeyThumbprint`          | *string*                      | :heavy_minus_sign:            | The proofKeyThumbprint field. |
| `resource`                    | *string*                      | :heavy_minus_sign:            | The resource field.           |
| `scopes`                      | *string*[]                    | :heavy_minus_sign:            | The scopes field.             |
| `sessionId`                   | *string*                      | :heavy_minus_sign:            | The sessionId field.          |
| `tenantId`                    | *string*                      | :heavy_minus_sign:            | The tenantId field.           |