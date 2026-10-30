# EmailOTPConstraints

EmailOTPConstraints configures one-time codes delivered by email.

## Example Usage

```typescript
import { EmailOTPConstraints } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EmailOTPConstraints = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `codeLength`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | Number of digits in each code.                                       |
| `maxAttempts`                                                        | *number*                                                             | :heavy_minus_sign:                                                   | Number of incorrect attempts allowed before the code is invalidated. |
| `ttlSeconds`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | How long a code remains valid, in seconds.                           |