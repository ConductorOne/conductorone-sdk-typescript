# APIKeyUsageSummary

APIKeyUsageSummary is the live usage of one API key.

## Example Usage

```typescript
import { APIKeyUsageSummary } from "conductorone-sdk-typescript/sdk/models/shared";

let value: APIKeyUsageSummary = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | [shared.APIKeyIdentity](../../../sdk/models/shared/apikeyidentity.md)   | :heavy_minus_sign:                                                      | N/A                                                                     |
| `usage`                                                                 | [shared.RateLimitUsage](../../../sdk/models/shared/ratelimitusage.md)[] | :heavy_minus_sign:                                                      | Live usage of the key's own limits.                                     |