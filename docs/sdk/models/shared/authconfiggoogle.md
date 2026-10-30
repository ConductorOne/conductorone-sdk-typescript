# AuthConfigGoogle

The AuthConfigGoogle message.

## Example Usage

```typescript
import { AuthConfigGoogle } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthConfigGoogle = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `additionalHostedDomains`                                          | *string*[]                                                         | :heavy_minus_sign:                                                 | Additional hosted domains accepted at login beyond hosted_domains. |
| `hostedDomains`                                                    | *string*[]                                                         | :heavy_minus_sign:                                                 | The hostedDomains field.                                           |