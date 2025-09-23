# C1ApiUserV1UserServiceGetUserProfileTypesResponse

## Example Usage

```typescript
import { C1ApiUserV1UserServiceGetUserProfileTypesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV1UserServiceGetUserProfileTypesResponse = {
  contentType: "<value>",
  statusCode: 148814,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `getUserProfileTypesResponse`                                                                   | [shared.GetUserProfileTypesResponse](../../../sdk/models/shared/getuserprofiletypesresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |