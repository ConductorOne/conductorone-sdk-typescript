# MagicVault

MagicVault configures a vault that grants time-limited credential access via magic links.

## Example Usage

```typescript
import { MagicVault } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MagicVault = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `allowUnauthedViews`                                                          | *boolean*                                                                     | :heavy_minus_sign:                                                            | Controls whether unauthenticated users can view credentials via a magic link. |
| `allowedViews`                                                                | *number*                                                                      | :heavy_minus_sign:                                                            | The maximum number of times a credential in this vault may be viewed.         |