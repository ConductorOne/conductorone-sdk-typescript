# DecoyUserClientCredentialInput

DecoyUserClientCredentialInput plants a client-credential decoy
 under an existing User. The User must be typ=HUMAN or typ=SERVICE.

## Example Usage

```typescript
import { DecoyUserClientCredentialInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DecoyUserClientCredentialInput = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `userId`                                           | *string*                                           | :heavy_minus_sign:                                 | Existing User to plant the decoy credential under. |