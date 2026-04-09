# LocalDirectoryConfigServiceCreateRequest

The LocalDirectoryConfigServiceCreateRequest message.

## Example Usage

```typescript
import { LocalDirectoryConfigServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LocalDirectoryConfigServiceCreateRequest = {
  appId: "<id>",
  displayName: "Maureen97",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `allowSelfRegistration`                                            | *boolean*                                                          | :heavy_minus_sign:                                                 | The allowSelfRegistration field.                                   |
| `appId`                                                            | *string*                                                           | :heavy_check_mark:                                                 | FK to the existing App that will back this local directory.        |
| `defaultProfileTypeId`                                             | *string*                                                           | :heavy_minus_sign:                                                 | The defaultProfileTypeId field.                                    |
| `displayName`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The displayName field.                                             |
| `invitationTtl`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `isDefault`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether this should be the default local directory for the tenant. |
| `onboardingFlowId`                                                 | *string*                                                           | :heavy_minus_sign:                                                 | The onboardingFlowId field.                                        |
| `organizationId`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | Optional FK to a ThirdPartyOrganization.                           |
| `selfRegistrationDomains`                                          | *string*[]                                                         | :heavy_minus_sign:                                                 | The selfRegistrationDomains field.                                 |