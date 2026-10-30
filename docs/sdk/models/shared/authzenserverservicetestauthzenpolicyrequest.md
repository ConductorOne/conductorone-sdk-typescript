# AuthzenServerServiceTestAuthzenPolicyRequest

AuthzenServerServiceTestAuthzenPolicyRequest evaluates a stored or inline
 CEL policy against a live request tuple without requiring activation.

This message contains a oneof named policy. Only a single field of the following list may be set at a time:
  - policyId
  - cel


## Example Usage

```typescript
import { AuthzenServerServiceTestAuthzenPolicyRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenServerServiceTestAuthzenPolicyRequest = {};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cel`                                                                                                                                                                                                | [shared.AuthzenCelPolicy](../../../sdk/models/shared/authzencelpolicy.md)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `policyId`                                                                                                                                                                                           | *string*                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                   | Test an already-stored policy revision by id.<br/>This field is part of the `policy` oneof.<br/>See the documentation for `c1.api.authzen.v1.AuthzenServerServiceTestAuthzenPolicyRequest` for more details. |
| `request`                                                                                                                                                                                            | [shared.AuthzenTestRequest](../../../sdk/models/shared/authzentestrequest.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |