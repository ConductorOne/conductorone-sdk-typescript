# C1ApiAppV1AppResourceOwnersRemoveResponse

## Example Usage

```typescript
import { C1ApiAppV1AppResourceOwnersRemoveResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceOwnersRemoveResponse = {
  contentType: "<value>",
  statusCode: 832859,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `removeAppResourceOwnerResponse`                                                                      | [shared.RemoveAppResourceOwnerResponse](../../../sdk/models/shared/removeappresourceownerresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |