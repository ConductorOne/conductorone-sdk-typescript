# AuthConfigOkta

The AuthConfigOkta message.

## Example Usage

```typescript
import { AuthConfigOkta } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthConfigOkta = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `domain`                                | *string*                                | :heavy_minus_sign:                      | The domain field.                       |
| `oidcClientId`                          | *string*                                | :heavy_minus_sign:                      | The oidcClientId field.                 |
| `oidcClientSecret`                      | *string*                                | :heavy_minus_sign:                      | Write-only. Never returned in get/list. |