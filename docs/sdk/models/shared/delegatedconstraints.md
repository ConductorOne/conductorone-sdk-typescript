# DelegatedConstraints

DelegatedConstraints controls which third-party sign-in providers are
 accepted as proof of email ownership, and how they are scoped.

## Example Usage

```typescript
import { DelegatedConstraints } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DelegatedConstraints = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `googleEnabled`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | Accept "Sign in with Google".                                                  |
| `googleHostedDomains`                                                          | *string*[]                                                                     | :heavy_minus_sign:                                                             | Restrict Google sign-in to these Google Workspace domains. Empty = any domain. |
| `microsoftEnabled`                                                             | *boolean*                                                                      | :heavy_minus_sign:                                                             | Accept "Sign in with Microsoft".                                               |
| `microsoftTenantIds`                                                           | *string*[]                                                                     | :heavy_minus_sign:                                                             | Restrict Microsoft sign-in to these Microsoft tenant IDs. Empty = any tenant.  |