# CreateAppRequest

The CreateAppRequest message is used to create a new app.

## Example Usage

```typescript
import { CreateAppRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAppRequest = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `certifyPolicyId`                                | *string*                                         | :heavy_minus_sign:                               | Creates the app with this certify policy.        |
| `description`                                    | *string*                                         | :heavy_minus_sign:                               | Creates the app with this description.           |
| `displayName`                                    | *string*                                         | :heavy_minus_sign:                               | Creates the app with this display name.          |
| `grantPolicyId`                                  | *string*                                         | :heavy_minus_sign:                               | Creates the app with this grant policy.          |
| `monthlyCostUsd`                                 | *number*                                         | :heavy_minus_sign:                               | Creates the app with this monthly cost per seat. |
| `owners`                                         | *string*[]                                       | :heavy_minus_sign:                               | Creates the app with this array of owners.       |
| `revokePolicyId`                                 | *string*                                         | :heavy_minus_sign:                               | Creates the app with this revoke policy.         |