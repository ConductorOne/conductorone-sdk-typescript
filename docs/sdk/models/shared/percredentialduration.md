# PerCredentialDuration

PerCredentialDuration overrides session lifetimes for sessions established
 with a particular credential type — stronger credentials can earn longer
 sessions.

## Example Usage

```typescript
import { PerCredentialDuration } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PerCredentialDuration = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accessTokenTtlSeconds`                                               | *number*                                                              | :heavy_minus_sign:                                                    | Access-token lifetime for this credential type, in seconds.           |
| `credentialType`                                                      | [shared.CredentialType](../../../sdk/models/shared/credentialtype.md) | :heavy_minus_sign:                                                    | The credentialType field.                                             |
| `maxSessionDurationSeconds`                                           | *number*                                                              | :heavy_minus_sign:                                                    | Maximum total session duration for this credential type, in seconds.  |