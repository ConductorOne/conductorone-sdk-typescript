# IdentityPolicyTenantDefaultsInput

IdentityPolicyTenantDefaults is the tenant-wide set of default identity
 policies applied when no more specific policy matches a user.

## Example Usage

```typescript
import { IdentityPolicyTenantDefaultsInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: IdentityPolicyTenantDefaultsInput = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `credentialInventoryPolicyId`                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | The default credential inventory policy (which credential types users may enroll). |
| `enrollmentRequirementId`                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | The default enrollment requirement.                                                |
| `recoveryPolicyId`                                                                 | *string*                                                                           | :heavy_minus_sign:                                                                 | The default recovery policy.                                                       |
| `resourcePolicyId`                                                                 | *string*                                                                           | :heavy_minus_sign:                                                                 | The default resource policy.                                                       |
| `sessionPolicyId`                                                                  | *string*                                                                           | :heavy_minus_sign:                                                                 | The default session policy.                                                        |
| `signInPolicyId`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | The default sign-in policy.                                                        |
| `universalPromiseIds`                                                              | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Tenant-wide promises every user must satisfy (e.g. terms-of-service<br/> acceptance). |