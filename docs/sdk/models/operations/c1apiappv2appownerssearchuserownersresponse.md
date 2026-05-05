# C1ApiAppV2AppOwnersSearchUserOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersSearchUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersSearchUserOwnersResponse = {
  contentType: "<value>",
  statusCode: 772256,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `searchUserOwnersResponse`                                                                | [shared.SearchUserOwnersResponse](../../../sdk/models/shared/searchuserownersresponse.md) | :heavy_minus_sign:                                                                        | SearchUserOwnersResponse is the response for searching user ownership sources.            |