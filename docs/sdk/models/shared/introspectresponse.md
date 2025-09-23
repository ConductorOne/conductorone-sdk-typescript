# IntrospectResponse

IntrospectResponse contains information about the current user who is authenticated.

## Example Usage

```typescript
import { IntrospectResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: IntrospectResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `features`                                                                      | *string*[]                                                                      | :heavy_minus_sign:                                                              | The list of feature flags enabled for the tenant the logged in user belongs to. |
| `permissions`                                                                   | *string*[]                                                                      | :heavy_minus_sign:                                                              | The list of permissions that the current logged in user has.                    |
| `principleId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | The principleID of the current logged in user.                                  |
| `roles`                                                                         | *string*[]                                                                      | :heavy_minus_sign:                                                              | The list of roles that the current logged in user has.                          |
| `userId`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | The userID of the current logged in user.                                       |