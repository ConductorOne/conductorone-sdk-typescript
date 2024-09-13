# DirectoryServiceCreateRequest

Uplevel an app into a full directory.

## Example Usage

```typescript
import { DirectoryServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryServiceCreateRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `appId`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | The AppID to make into a directory, providing identities and more for the C1 app. |
| `directoryExpandMask`                                                             | [shared.DirectoryExpandMask](../../../sdk/models/shared/directoryexpandmask.md)   | :heavy_minus_sign:                                                                | The fields to be included in the directory response.                              |