# MyAPIKeyUsage

MyAPIKeyUsage is the live usage of one of the caller's API keys.

## Example Usage

```typescript
import { MyAPIKeyUsage } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyAPIKeyUsage = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `apiKey`                                                                | [shared.APIKeyIdentity](../../../sdk/models/shared/apikeyidentity.md)   | :heavy_minus_sign:                                                      | N/A                                                                     |
| `usage`                                                                 | [shared.RateLimitUsage](../../../sdk/models/shared/ratelimitusage.md)[] | :heavy_minus_sign:                                                      | Live usage of the key's own limits.                                     |