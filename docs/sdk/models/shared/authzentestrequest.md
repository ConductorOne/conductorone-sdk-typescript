# AuthzenTestRequest

AuthzenTestRequest is one AuthZEN access-evaluation request tuple to test
 a policy against.

## Example Usage

```typescript
import { AuthzenTestRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenTestRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `action`                                                                        | [shared.AuthzenTestAction](../../../sdk/models/shared/authzentestaction.md)     | :heavy_minus_sign:                                                              | N/A                                                                             |
| `context`                                                                       | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `resource`                                                                      | [shared.AuthzenTestResource](../../../sdk/models/shared/authzentestresource.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `subject`                                                                       | [shared.AuthzenTestSubject](../../../sdk/models/shared/authzentestsubject.md)   | :heavy_minus_sign:                                                              | N/A                                                                             |