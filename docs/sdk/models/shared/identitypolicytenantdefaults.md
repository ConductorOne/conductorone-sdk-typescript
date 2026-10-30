# IdentityPolicyTenantDefaults

IdentityPolicyTenantDefaults is the tenant-wide set of default identity
 policies applied when no more specific policy matches a user.

## Example Usage

```typescript
import { IdentityPolicyTenantDefaults } from "conductorone-sdk-typescript/sdk/models/shared";

let value: IdentityPolicyTenantDefaults = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `credentialInventoryPolicyId`                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The default credential inventory policy (which credential types users may enroll).            |
| `enrollmentRequirementId`                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The default enrollment requirement.                                                           |
| `recoveryPolicyId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The default recovery policy.                                                                  |
| `resourcePolicyId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The default resource policy.                                                                  |
| `sessionPolicyId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The default session policy.                                                                   |
| `signInPolicyId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The default sign-in policy.                                                                   |
| `universalPromiseIds`                                                                         | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Tenant-wide promises every user must satisfy (e.g. terms-of-service<br/> acceptance).         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |