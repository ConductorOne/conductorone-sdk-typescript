# ServicePrincipalAPIKey

ServicePrincipalAPIKey is a service principal credential with the caller's permissions on its service principal.

## Example Usage

```typescript
import { ServicePrincipalAPIKey } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalAPIKey = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `credential`                                                                                  | [shared.ServicePrincipalCredential](../../../sdk/models/shared/serviceprincipalcredential.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `objectPermissions`                                                                           | [shared.UserActorObjectPermissions](../../../sdk/models/shared/useractorobjectpermissions.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |