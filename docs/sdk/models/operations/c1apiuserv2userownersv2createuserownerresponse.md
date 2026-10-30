# C1ApiUserV2UserOwnersV2CreateUserOwnerResponse

## Example Usage

```typescript
import { C1ApiUserV2UserOwnersV2CreateUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV2UserOwnersV2CreateUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 501885,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `createUserUserOwnerResponse`                                                                                 | [shared.CreateUserUserOwnerResponse](../../../sdk/models/shared/createuseruserownerresponse.md)               | :heavy_minus_sign:                                                                                            | CreateUserUserOwnerResponse is the response for creating a user ownership source on a user (service account). |