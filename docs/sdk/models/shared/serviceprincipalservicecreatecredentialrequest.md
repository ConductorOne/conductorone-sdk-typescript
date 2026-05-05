# ServicePrincipalServiceCreateCredentialRequest

The ServicePrincipalServiceCreateCredentialRequest message.

## Example Usage

```typescript
import { ServicePrincipalServiceCreateCredentialRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalServiceCreateCredentialRequest = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `allowSourceCidrs`                                                                                                   | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | A list of CIDRs to restrict this credential to.<br/> Accepts IPv4 (e.g. 10.0.0.0/24) or IPv6 (e.g. 2001:db8::/32) CIDRs. |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The display name for the new credential.                                                                             |
| `expires`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `requireDpop`                                                                                                        | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | If true, requires DPoP proof-of-possession for token exchange using this credential.                                 |
| `scopedRoles`                                                                                                        | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | The list of roles to restrict the credential to.                                                                     |