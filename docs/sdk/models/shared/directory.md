# Directory

This object indicates that an app is also a directory.

This message contains a oneof named account_filter. Only a single field of the following list may be set at a time:
  - all
  - celExpression


## Example Usage

```typescript
import { Directory } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Directory = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `all`                                                                                         | [shared.DirectoryAccountFilterAll](../../../sdk/models/shared/directoryaccountfilterall.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app associated with the directory.                                              |
| `celExpression`                                                                               | [shared.DirectoryAccountFilterCel](../../../sdk/models/shared/directoryaccountfiltercel.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |