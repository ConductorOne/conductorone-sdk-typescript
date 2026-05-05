# TestAccountProvisionPolicyResponse

TestAccountProvisionPolicyResponse is the response for testing an account provision policy.

## Example Usage

```typescript
import { TestAccountProvisionPolicyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TestAccountProvisionPolicyResponse = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The data type of the computed result value.                 |
| `value`                                                     | *string*                                                    | :heavy_minus_sign:                                          | The computed result value of the CEL expression evaluation. |