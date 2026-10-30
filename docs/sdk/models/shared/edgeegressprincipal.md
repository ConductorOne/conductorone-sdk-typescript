# EdgeEgressPrincipal

EdgeEgressPrincipal is the caller a rule matches against. Exactly one arm
 must be set.

This message contains a oneof named scope. Only a single field of the following list may be set at a time:
  - all
  - userId
  - entitlementId


## Example Usage

```typescript
import { EdgeEgressPrincipal } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeEgressPrincipal = {};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `all`                                                                                                                                                                                       | *boolean*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                          | The all field.<br/>This field is part of the `scope` oneof.<br/>See the documentation for `c1.api.edge.v1.EdgeEgressPrincipal` for more details.                                            |
| `entitlementId`                                                                                                                                                                             | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | An App Entitlement belonging to the same App the Edge belongs to.<br/>This field is part of the `scope` oneof.<br/>See the documentation for `c1.api.edge.v1.EdgeEgressPrincipal` for more details. |
| `userId`                                                                                                                                                                                    | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The userId field.<br/>This field is part of the `scope` oneof.<br/>See the documentation for `c1.api.edge.v1.EdgeEgressPrincipal` for more details.                                         |