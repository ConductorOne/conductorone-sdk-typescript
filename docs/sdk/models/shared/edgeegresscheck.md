# EdgeEgressCheck

EdgeEgressCheck requires an integration's authorization in addition to egress policy.

This message contains a oneof named authorizer. Only a single field of the following list may be set at a time:
  - integration


## Example Usage

```typescript
import { EdgeEgressCheck } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressCheck = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `enabled`                                                                             | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether this check is enforced. Disabled checks still reference the integration.      |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | Stable identifier unique within the Edge.                                             |
| `integration`                                                                         | [shared.EdgeIntegrationRef](../../../sdk/models/shared/edgeintegrationref.md)         | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `match`                                                                               | [shared.EdgeEgressRequestMatch](../../../sdk/models/shared/edgeegressrequestmatch.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |