# ServicePrincipalCredential

ServicePrincipalCredential represents a client credential for a service principal.

## Example Usage

```typescript
import { ServicePrincipalCredential } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalCredential = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `allowSourceCidrs`                                                                            | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | CIDR restrictions for this credential.                                                        |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The full client ID in format: ${cutename}@${tenant}.${installation}/spc                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the credential.                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of the credential (cutename format).                                            |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `requireDpop`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether DPoP proof-of-possession is required for this credential.                             |
| `scopedRoleIds`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Scoped role IDs for this credential (intersection with SP roles at token issuance).           |
| `servicePrincipalId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The service principal user ID this credential belongs to.                                     |