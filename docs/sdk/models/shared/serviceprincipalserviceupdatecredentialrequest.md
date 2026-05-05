# ServicePrincipalServiceUpdateCredentialRequest

The ServicePrincipalServiceUpdateCredentialRequest message.

## Example Usage

```typescript
import { ServicePrincipalServiceUpdateCredentialRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalServiceUpdateCredentialRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `servicePrincipalCredential`                                                                            | [shared.ServicePrincipalCredentialInput](../../../sdk/models/shared/serviceprincipalcredentialinput.md) | :heavy_minus_sign:                                                                                      | ServicePrincipalCredential represents a client credential for a service principal.                      |
| `updateMask`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |