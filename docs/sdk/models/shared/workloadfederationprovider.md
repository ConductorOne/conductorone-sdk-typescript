# WorkloadFederationProvider

WorkloadFederationProvider represents a tenant-level OIDC issuer registration.

## Example Usage

```typescript
import { WorkloadFederationProvider } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationProvider = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A description of what this provider is for.                                                          |
| `disabled`                                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Whether the provider is disabled. Disabled providers reject all token exchanges.                     |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The display name of the provider.                                                                    |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The unique ID of the provider.                                                                       |
| `issuerUrl`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The OIDC issuer URL. Immutable after creation.                                                       |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `wellKnownProvider`                                                                                  | [shared.WellKnownProvider](../../../sdk/models/shared/wellknownprovider.md)                          | :heavy_minus_sign:                                                                                   | Well-known provider type. Drives UX (wizard presets, docs, icons).<br/> Set at creation time, immutable. |