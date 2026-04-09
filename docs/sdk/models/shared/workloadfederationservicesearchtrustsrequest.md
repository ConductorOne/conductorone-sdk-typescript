# WorkloadFederationServiceSearchTrustsRequest

The WorkloadFederationServiceSearchTrustsRequest message.

## Example Usage

```typescript
import { WorkloadFederationServiceSearchTrustsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceSearchTrustsRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `pageSize`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The pageSize field.                                               |
| `pageToken`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The pageToken field.                                              |
| `providerId`                                                      | *string*                                                          | :heavy_minus_sign:                                                | Optional: filter trusts by provider ID.                           |
| `query`                                                           | *string*                                                          | :heavy_minus_sign:                                                | Optional: full-text search on trust display name and description. |
| `servicePrincipalId`                                              | *string*                                                          | :heavy_minus_sign:                                                | Optional: filter trusts by service principal ID.                  |