# TestAccountProvisionPolicyRequest

TestAccountProvisionPolicyRequest is the request for testing an account provision policy.

## Example Usage

```typescript
import { TestAccountProvisionPolicyRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TestAccountProvisionPolicyRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `cel`                                                            | *string*                                                         | :heavy_minus_sign:                                               | The CEL expression to evaluate for the account provision policy. |