# AppSecretAdminServiceRevokeResponse

The AppSecretAdminServiceRevokeResponse message.

## Example Usage

```typescript
import { AppSecretAdminServiceRevokeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppSecretAdminServiceRevokeResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `credentialRevocation`                                                            | [shared.CredentialRevocation](../../../sdk/models/shared/credentialrevocation.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `revoked`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | Successful calls queue a revoke and return true.                                  |