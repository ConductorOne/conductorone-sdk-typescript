# SecretsMaskingConfig

SecretsMaskingConfig configures post-tool-use redaction of secret-shaped
 substrings (API keys, tokens, private keys) in tool output.

## Example Usage

```typescript
import { SecretsMaskingConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SecretsMaskingConfig = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `additionalPatterns`                                                                       | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | Extra RE2 regexes whose matches are redacted in addition to the built-in<br/> secret patterns. |
| `placeholder`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Replacement string for a matched secret. Empty = "***REDACTED-SECRET***".                  |