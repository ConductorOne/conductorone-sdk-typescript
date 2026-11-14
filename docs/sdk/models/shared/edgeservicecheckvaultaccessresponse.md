# EdgeServiceCheckVaultAccessResponse

EdgeServiceCheckVaultAccessResponse reports metadata, never secret values.

## Example Usage

```typescript
import { EdgeServiceCheckVaultAccessResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceCheckVaultAccessResponse = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `granted`                                                                                                                   | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | Whether the runtime currently holds the OpenSecret entitlement.                                                             |
| `openSecretEntitlementId`                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Vault-wide entitlement to request through normal access policy.                                                             |
| `reason`                                                                                                                    | [shared.EdgeServiceCheckVaultAccessResponseReason](../../../sdk/models/shared/edgeservicecheckvaultaccessresponsereason.md) | :heavy_minus_sign:                                                                                                          | Explanation of the current grant state.                                                                                     |
| `runtimeServicePrincipalId`                                                                                                 | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Bound Edge runtime service principal, if available.                                                                         |