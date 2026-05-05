# WorkloadFederationServiceUpdateTrustRequest

The WorkloadFederationServiceUpdateTrustRequest message.

## Example Usage

```typescript
import { WorkloadFederationServiceUpdateTrustRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceUpdateTrustRequest = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `workloadFederationTrust`                                                                                                                         | [shared.WorkloadFederationTrustInput](../../../sdk/models/shared/workloadfederationtrustinput.md)                                                 | :heavy_minus_sign:                                                                                                                                | WorkloadFederationTrust represents a per-SP trust policy that references<br/> a tenant-level provider and defines a CEL condition for claim matching. |
| `updateMask`                                                                                                                                      | *string*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |