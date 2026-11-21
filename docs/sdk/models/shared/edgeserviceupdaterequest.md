# EdgeServiceUpdateRequest

EdgeServiceUpdateRequest updates an existing Edge via update_mask. Editable
 paths: mode, enabled_kinds, egress_rules, egress_unmatched_rule, egress_checks,
 credential_injections, inference_routes, inference_connections, allow_inference_bearer_tokens,
 egress_tls, response_inspection_profile.
 The legacy inference mask may clear or replace one graph.

## Example Usage

```typescript
import { EdgeServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceUpdateRequest = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `edge`                                            | [shared.Edge](../../../sdk/models/shared/edge.md) | :heavy_minus_sign:                                | N/A                                               |
| `updateMask`                                      | *string*                                          | :heavy_minus_sign:                                | N/A                                               |