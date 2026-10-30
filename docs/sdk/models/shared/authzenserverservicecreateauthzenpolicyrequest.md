# AuthzenServerServiceCreateAuthzenPolicyRequest

AuthzenServerServiceCreateAuthzenPolicyRequest creates a new CEL policy
 revision for an app.

This message contains a oneof named engine. Only a single field of the following list may be set at a time:
  - cel


## Example Usage

```typescript
import { AuthzenServerServiceCreateAuthzenPolicyRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenServerServiceCreateAuthzenPolicyRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cel`                                                                     | [shared.AuthzenCelPolicy](../../../sdk/models/shared/authzencelpolicy.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `description`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Free-text description of what this revision changes or is for.            |
| `displayName`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Display name for the policy revision.                                     |