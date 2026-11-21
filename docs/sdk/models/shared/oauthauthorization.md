# OAuthAuthorization

OAuthAuthorization defines a confidential OAuth client's delegated access to
 the ConductorOne API. It controls who may consent and which roles they may
 approve. Each user's consent is separate and cannot exceed that user's permissions.

## Example Usage

```typescript
import { OAuthAuthorization } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorization = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accessMode`                                                                                  | [shared.AccessMode](../../../sdk/models/shared/accessmode.md)                                 | :heavy_minus_sign:                                                                            | The accessMode field.                                                                         |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The OAuth protocol client registered for this authorization.                                  |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `disabled`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether authorization and token use are disabled. New authorizations are enabled.             |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The displayName field.                                                                        |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `scopedRoleIds`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The maximum role selection a user may approve when consenting.                                |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `useEntitlementAppId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The C1 app containing the entitlement that governs use of this authorization.                 |
| `useEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The native Use entitlement that governs eligibility for this authorization.                   |