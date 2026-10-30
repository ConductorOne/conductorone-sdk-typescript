# XAAAccessProfileServiceCreateRequest

XAAAccessProfileServiceCreateRequest creates a new access profile.

## Example Usage

```typescript
import { XAAAccessProfileServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfileServiceCreateRequest = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `description`                                      | *string*                                           | :heavy_minus_sign:                                 | Description of what access this profile grants.    |
| `displayName`                                      | *string*                                           | :heavy_minus_sign:                                 | Display name for the profile.                      |
| `xaaResourceServerId`                              | *string*                                           | :heavy_minus_sign:                                 | The resource server this profile grants access to. |