# LocalDirectoryConfigInput

LocalDirectoryConfig is the public representation of a C1-managed local
 directory configuration. The underlying directory infrastructure is provided
 by the linked App (identified by app_id).

## Example Usage

```typescript
import { LocalDirectoryConfigInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LocalDirectoryConfigInput = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `allowSelfRegistration`                                                                                        | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Whether unauthenticated users may self-register in this directory.                                             |
| `defaultProfileTypeId`                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Optional FK to a ProfileType applied to new users created via this directory.                                  |
| `displayName`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The displayName field.                                                                                         |
| `invitationTtl`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `isDefault`                                                                                                    | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Whether this is the default local directory for the tenant.<br/> At most one config per tenant may be the default. |
| `onboardingFlowId`                                                                                             | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Optional FK to an onboarding flow applied by default when inviting users.                                      |
| `organizationId`                                                                                               | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Optional FK to a ThirdPartyOrganization. Empty means standalone (no vendor linkage).                           |
| `selfRegistrationDomains`                                                                                      | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | Email domain allowlist for self-registration. Empty allows any domain when<br/> allow_self_registration is true. |