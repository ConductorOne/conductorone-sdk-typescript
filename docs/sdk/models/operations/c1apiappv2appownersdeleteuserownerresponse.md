# C1ApiAppV2AppOwnersDeleteUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersDeleteUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersDeleteUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 514814,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `deleteAppUserOwnerResponse`                                                                  | [shared.DeleteAppUserOwnerResponse](../../../sdk/models/shared/deleteappuserownerresponse.md) | :heavy_minus_sign:                                                                            | DeleteUserOwnerResponse is the empty response for deleting a user ownership source.           |