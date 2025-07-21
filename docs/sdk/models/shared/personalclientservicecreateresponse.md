# PersonalClientServiceCreateResponse

The PersonalClientServiceCreateResponse message contains the created personal client and client secret.

## Example Usage

```typescript
import { PersonalClientServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalClientServiceCreateResponse = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `personalClient`                                                                                                                   | [shared.PersonalClient](../../../sdk/models/shared/personalclient.md)                                                              | :heavy_minus_sign:                                                                                                                 | The PersonalClient message contains information about a presonal client credential.                                                |
| `clientSecret`                                                                                                                     | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The client secret that corresponds to the personal client. Make sure to save this, because it cannot be returned or queried again. |