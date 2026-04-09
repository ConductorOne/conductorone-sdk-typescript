# ServicePrincipalServiceUpdateRequest

The ServicePrincipalServiceUpdateRequest message.

## Example Usage

```typescript
import { ServicePrincipalServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalServiceUpdateRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `servicePrincipal`                                                                  | [shared.ServicePrincipalInput](../../../sdk/models/shared/serviceprincipalinput.md) | :heavy_minus_sign:                                                                  | ServicePrincipal represents a tenant-managed non-human identity.                    |
| `updateMask`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |