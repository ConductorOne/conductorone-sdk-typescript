# DirectoryServiceUpdateRequest

Update a directory by app_id.

This message contains a oneof named account_filter. Only a single field of the following list may be set at a time:
  - all
  - celExpression


## Example Usage

```typescript
import { DirectoryServiceUpdateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryServiceUpdateRequest = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `all`                                                                                       | [shared.DirectoryAccountFilterAll](../../../sdk/models/shared/directoryaccountfilterall.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `celExpression`                                                                             | [shared.DirectoryAccountFilterCel](../../../sdk/models/shared/directoryaccountfiltercel.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `expandMask`                                                                                | [shared.DirectoryExpandMask](../../../sdk/models/shared/directoryexpandmask.md)             | :heavy_minus_sign:                                                                          | N/A                                                                                         |