# TOTPConstraints

TOTPConstraints configures authenticator-app one-time codes (RFC 6238).

## Example Usage

```typescript
import { TOTPConstraints } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TOTPConstraints = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `codeLength`                                                        | *number*                                                            | :heavy_minus_sign:                                                  | Number of digits in each code.                                      |
| `periodSeconds`                                                     | *number*                                                            | :heavy_minus_sign:                                                  | How often a new code is generated, in seconds (typically 30 or 60). |
| `skewTolerance`                                                     | *number*                                                            | :heavy_minus_sign:                                                  | How many adjacent time windows to accept, to tolerate clock drift.  |