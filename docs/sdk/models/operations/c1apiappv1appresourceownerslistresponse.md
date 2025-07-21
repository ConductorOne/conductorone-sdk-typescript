# C1ApiAppV1AppResourceOwnersListResponse

## Example Usage

```typescript
import { C1ApiAppV1AppResourceOwnersListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceOwnersListResponse = {
  contentType: "<value>",
  statusCode: 511225,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response content type for this operation                                                          |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response status code for this operation                                                           |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_check_mark:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |
| `listAppResourceOwnersResponse`                                                                        | [shared.ListAppResourceOwnersResponse](../../../sdk/models/shared/listappresourceownersresponse.md)    | :heavy_minus_sign:                                                                                     | The ListAppResourceOwnersResponse message contains a list of results and a nextPageToken if applicable |