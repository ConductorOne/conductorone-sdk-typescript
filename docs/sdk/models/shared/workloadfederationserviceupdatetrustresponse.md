# WorkloadFederationServiceUpdateTrustResponse

The WorkloadFederationServiceUpdateTrustResponse message.

## Example Usage

```typescript
import { WorkloadFederationServiceUpdateTrustResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceUpdateTrustResponse = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `workloadFederationTrust`                                                                                                                         | [shared.WorkloadFederationTrust](../../../sdk/models/shared/workloadfederationtrust.md)                                                           | :heavy_minus_sign:                                                                                                                                | WorkloadFederationTrust represents a per-SP trust policy that references<br/> a tenant-level provider and defines a CEL condition for claim matching. |