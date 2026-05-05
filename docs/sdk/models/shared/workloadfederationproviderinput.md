# WorkloadFederationProviderInput

WorkloadFederationProvider represents a tenant-level OIDC issuer registration.

## Example Usage

```typescript
import { WorkloadFederationProviderInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationProviderInput = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | A description of what this provider is for.                                      |
| `disabled`                                                                       | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether the provider is disabled. Disabled providers reject all token exchanges. |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The display name of the provider.                                                |