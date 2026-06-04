# C1ApiAppV2AppResourceOwnersV2DeleteUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2DeleteUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2DeleteUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 593887,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `deleteAppResourceUserOwnerResponse`                                                                          | [shared.DeleteAppResourceUserOwnerResponse](../../../sdk/models/shared/deleteappresourceuserownerresponse.md) | :heavy_minus_sign:                                                                                            | DeleteAppResourceUserOwnerResponse is the empty response for deleting a user ownership source on a resource.  |