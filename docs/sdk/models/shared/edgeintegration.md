# EdgeIntegration

EdgeIntegration is reusable application-owned Edge capability configuration.
 Its typed configuration and use site determine its role; Socket package
 authorization is the first supported type. It stores only credential
 references and never contains or returns a secret value.
 Creation requires display_name and socket_packages. Updates may omit fields
 not listed in update_mask.

This message contains a oneof named configuration. Only a single field of the following list may be set at a time:
  - socketPackages


## Example Usage

```typescript
import { EdgeIntegration } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeIntegration = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `appId`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Application owning this integration.                                                                |
| `configurationGeneration`                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Changes only when typed configuration or its credential reference changes.                          |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Human-readable integration name. Required on creation; may be omitted<br/> when updating other fields. |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Integration identifier. Assigned on creation.                                                       |
| `referenceCount`                                                                                    | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Number of saved checks referencing this integration, including disabled checks.                     |
| `socketPackages`                                                                                    | [shared.EdgeSocketPackagesIntegration](../../../sdk/models/shared/edgesocketpackagesintegration.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `vaultSecretRef`                                                                                    | [shared.EdgeIntegrationVaultSecretRef](../../../sdk/models/shared/edgeintegrationvaultsecretref.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |