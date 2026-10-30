# PasskeyConstraints

PasskeyConstraints controls how users may enroll passkeys (FIDO2 / WebAuthn).

## Example Usage

```typescript
import { PasskeyConstraints } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PasskeyConstraints = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `allowedAaguids`                                                                   | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Allowed authenticator models, by AAGUID. Leave empty to permit any<br/> authenticator. |
| `attestation`                                                                      | [shared.Attestation](../../../sdk/models/shared/attestation.md)                    | :heavy_minus_sign:                                                                 | How strictly the authenticator's origin must be attested.                          |
| `requireUserVerification`                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Require the authenticator to verify the user (PIN or biometric) at enrollment.     |