# CredentialRevocation

CredentialRevocation describes the current revoke eligibility of a
 credential C1 issued through credential vending.

## Example Usage

```typescript
import { CredentialRevocation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialRevocation = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `state`                                                                                     | [shared.CredentialRevocationState](../../../sdk/models/shared/credentialrevocationstate.md) | :heavy_minus_sign:                                                                          | The state field.                                                                            |