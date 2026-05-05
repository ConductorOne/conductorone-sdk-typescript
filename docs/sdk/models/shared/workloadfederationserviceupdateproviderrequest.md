# WorkloadFederationServiceUpdateProviderRequest

The WorkloadFederationServiceUpdateProviderRequest message.

## Example Usage

```typescript
import { WorkloadFederationServiceUpdateProviderRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceUpdateProviderRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `workloadFederationProvider`                                                                            | [shared.WorkloadFederationProviderInput](../../../sdk/models/shared/workloadfederationproviderinput.md) | :heavy_minus_sign:                                                                                      | WorkloadFederationProvider represents a tenant-level OIDC issuer registration.                          |
| `updateMask`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |