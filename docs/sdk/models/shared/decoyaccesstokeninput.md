# DecoyAccessTokenInput

DecoyAccessTokenInput mints a session access-token decoy under an
 existing User.

## Example Usage

```typescript
import { DecoyAccessTokenInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DecoyAccessTokenInput = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `expiresIn`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `subjectUserId`                                            | *string*                                                   | :heavy_minus_sign:                                         | Existing User the access token's subject claim references. |