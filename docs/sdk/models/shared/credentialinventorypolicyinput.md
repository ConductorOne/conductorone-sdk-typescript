# CredentialInventoryPolicyInput

CredentialInventoryPolicy defines which credential types your users may
 enroll and the rules for each type.

## Example Usage

```typescript
import { CredentialInventoryPolicyInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialInventoryPolicyInput = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `delegated`                                                                              | [shared.DelegatedConstraints](../../../sdk/models/shared/delegatedconstraints.md)        | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `displayName`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | A human-readable name for the policy.                                                    |
| `emailOtp`                                                                               | [shared.EmailOTPConstraints](../../../sdk/models/shared/emailotpconstraints.md)          | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enabledTypes`                                                                           | [shared.EnabledTypes](../../../sdk/models/shared/enabledtypes.md)[]                      | :heavy_minus_sign:                                                                       | The credential types users are permitted to enroll under this policy.                    |
| `passkey`                                                                                | [shared.PasskeyConstraints](../../../sdk/models/shared/passkeyconstraints.md)            | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `password`                                                                               | [shared.PasswordConstraints](../../../sdk/models/shared/passwordconstraints.md)          | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `priority`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | When a user matches more than one policy, the policy with the highest<br/> priority applies. |
| `totp`                                                                                   | [shared.TOTPConstraints](../../../sdk/models/shared/totpconstraints.md)                  | :heavy_minus_sign:                                                                       | N/A                                                                                      |