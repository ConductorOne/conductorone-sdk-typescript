# C1ApiAppV2AppResourceOwnersV2CreateUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2CreateUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2CreateUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 580206,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `createAppResourceUserOwnerResponse`                                                                          | [shared.CreateAppResourceUserOwnerResponse](../../../sdk/models/shared/createappresourceuserownerresponse.md) | :heavy_minus_sign:                                                                                            | CreateAppResourceUserOwnerResponse is the response for creating a user ownership source on a resource.        |