# C1ApiAppV2AppResourceOwnersV2GetUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2GetUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2GetUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 122251,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `getAppResourceUserOwnerResponse`                                                                       | [shared.GetAppResourceUserOwnerResponse](../../../sdk/models/shared/getappresourceuserownerresponse.md) | :heavy_minus_sign:                                                                                      | GetAppResourceUserOwnerResponse is the response for getting a user ownership source on a resource.      |