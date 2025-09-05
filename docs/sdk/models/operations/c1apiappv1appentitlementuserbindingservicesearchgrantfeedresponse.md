# C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementUserBindingServiceSearchGrantFeedResponse = {
  contentType: "<value>",
  statusCode: 281088,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `searchGrantFeedResponse`                                                                                     | [shared.SearchGrantFeedResponse](../../../sdk/models/shared/searchgrantfeedresponse.md)                       | :heavy_minus_sign:                                                                                            | The SearchGrantFeedResponse message contains a list of grant event results and a nextPageToken if applicable. |