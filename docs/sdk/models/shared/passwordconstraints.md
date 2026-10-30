# PasswordConstraints

PasswordConstraints sets the complexity rules a user's password must satisfy.

## Example Usage

```typescript
import { PasswordConstraints } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PasswordConstraints = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `checkBreached`                                                 | *boolean*                                                       | :heavy_minus_sign:                                              | Reject passwords found in known-breach corpora.                 |
| `historyDepth`                                                  | *number*                                                        | :heavy_minus_sign:                                              | Number of previous passwords to remember and disallow reuse of. |
| `minLength`                                                     | *number*                                                        | :heavy_minus_sign:                                              | Minimum length, in characters.                                  |
| `requireMixedCase`                                              | *boolean*                                                       | :heavy_minus_sign:                                              | Require both uppercase and lowercase letters.                   |
| `requireNumber`                                                 | *boolean*                                                       | :heavy_minus_sign:                                              | Require at least one digit.                                     |
| `requireSymbol`                                                 | *boolean*                                                       | :heavy_minus_sign:                                              | Require at least one symbol.                                    |