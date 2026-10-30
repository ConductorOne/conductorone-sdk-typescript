# AuthzenServerServiceTestAuthzenPolicyResponse

AuthzenServerServiceTestAuthzenPolicyResponse returns the evaluation
 outcome for authoring feedback.

## Example Usage

```typescript
import { AuthzenServerServiceTestAuthzenPolicyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenServerServiceTestAuthzenPolicyResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `decision`                                                            | *boolean*                                                             | :heavy_minus_sign:                                                    | The policy's decision. Only meaningful when `error` is empty.         |
| `error`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Compile or runtime error, if evaluation could not produce a decision. |
| `variables`                                                           | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | N/A                                                                   |