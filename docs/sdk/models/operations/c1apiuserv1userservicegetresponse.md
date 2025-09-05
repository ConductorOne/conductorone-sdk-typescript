# C1ApiUserV1UserServiceGetResponse

## Example Usage

```typescript
import { C1ApiUserV1UserServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV1UserServiceGetResponse = {
  contentType: "<value>",
  statusCode: 7988,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | HTTP response content type for this operation                                                                                    |
| `statusCode`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | HTTP response status code for this operation                                                                                     |
| `rawResponse`                                                                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                            | :heavy_check_mark:                                                                                                               | Raw HTTP response; suitable for custom response parsing                                                                          |
| `userServiceGetResponse`                                                                                                         | [shared.UserServiceGetResponse](../../../sdk/models/shared/userservicegetresponse.md)                                            | :heavy_minus_sign:                                                                                                               | The UserServiceGetResponse returns a user view which has a user including JSONPATHs to the expanded items in the expanded array. |