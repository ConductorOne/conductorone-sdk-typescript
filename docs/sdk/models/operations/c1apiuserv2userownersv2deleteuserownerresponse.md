# C1ApiUserV2UserOwnersV2DeleteUserOwnerResponse

## Example Usage

```typescript
import { C1ApiUserV2UserOwnersV2DeleteUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV2UserOwnersV2DeleteUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 568229,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `deleteUserUserOwnerResponse`                                                                                       | [shared.DeleteUserUserOwnerResponse](../../../sdk/models/shared/deleteuseruserownerresponse.md)                     | :heavy_minus_sign:                                                                                                  | DeleteUserUserOwnerResponse is the empty response for deleting a user ownership source on a user (service account). |