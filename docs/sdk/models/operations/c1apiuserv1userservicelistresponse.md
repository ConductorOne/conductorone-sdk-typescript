# C1ApiUserV1UserServiceListResponse

## Example Usage

```typescript
import { C1ApiUserV1UserServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV1UserServiceListResponse = {
  contentType: "<value>",
  statusCode: 880039,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `userServiceListResponse`                                                                         | [shared.UserServiceListResponse](../../../sdk/models/shared/userservicelistresponse.md)           | :heavy_minus_sign:                                                                                | The UserServiceListResponse message contains a list of results and a nextPageToken if applicable. |