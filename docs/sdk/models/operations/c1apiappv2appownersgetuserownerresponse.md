# C1ApiAppV2AppOwnersGetUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersGetUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersGetUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 381434,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `getUserOwnerResponse`                                                            | [shared.GetUserOwnerResponse](../../../sdk/models/shared/getuserownerresponse.md) | :heavy_minus_sign:                                                                | GetUserOwnerResponse is the response for getting a user ownership source.         |