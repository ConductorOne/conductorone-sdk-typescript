# EdgeServiceCheckInferenceVaultAccessResponse

EdgeServiceCheckInferenceVaultAccessResponse reports the same Vault grant
 check Update runs before saving an inference route.

## Example Usage

```typescript
import { EdgeServiceCheckInferenceVaultAccessResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceCheckInferenceVaultAccessResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `granted`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | The granted field.                                                                       |
| `openSecretEntitlementId`                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Vault's OpenSecret entitlement on the C1 app. Empty when reason is<br/> VAULT_NOT_FOUND. |
| `reason`                                                                                 | [shared.Reason](../../../sdk/models/shared/reason.md)                                    | :heavy_minus_sign:                                                                       | The reason field.                                                                        |
| `runtimeServicePrincipalId`                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | The Edge's runtime service principal. Empty when reason is<br/> NO_RUNTIME_PRINCIPAL.    |