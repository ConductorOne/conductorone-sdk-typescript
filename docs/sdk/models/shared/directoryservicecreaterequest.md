# DirectoryServiceCreateRequest

Uplevel an app into a full directory.

This message contains a oneof named account_filter. Only a single field of the following list may be set at a time:
  - all
  - celExpression


## Example Usage

```typescript
import { DirectoryServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryServiceCreateRequest = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `all`                                                                                       | [shared.DirectoryAccountFilterAll](../../../sdk/models/shared/directoryaccountfilterall.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `appId`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | The AppID to make into a directory, providing identities and more for the C1 app.           |
| `celExpression`                                                                             | [shared.DirectoryAccountFilterCel](../../../sdk/models/shared/directoryaccountfiltercel.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `expandMask`                                                                                | [shared.DirectoryExpandMask](../../../sdk/models/shared/directoryexpandmask.md)             | :heavy_minus_sign:                                                                          | N/A                                                                                         |