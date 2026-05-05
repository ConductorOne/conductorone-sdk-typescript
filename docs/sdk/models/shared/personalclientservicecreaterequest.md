# PersonalClientServiceCreateRequest

The PersonalClientServiceCreateRequest message contains the fields for creating a new personal client.

## Example Usage

```typescript
import { PersonalClientServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalClientServiceCreateRequest = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `allowSourceCidr`                                                                                                    | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | A list of CIDRs to restrict this credential to.<br/> Accepts IPv4 (e.g. 10.0.0.0/24) or IPv6 (e.g. 2001:db8::/32) CIDRs. |
| `displayName`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The display name for the new personal client.                                                                        |
| `expires`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `scopedRoles`                                                                                                        | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | The list of roles to restrict the credential to.                                                                     |