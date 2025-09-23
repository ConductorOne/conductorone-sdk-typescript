# C1ApiDirectoryV1DirectoryServiceListResponse

## Example Usage

```typescript
import { C1ApiDirectoryV1DirectoryServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiDirectoryV1DirectoryServiceListResponse = {
  contentType: "<value>",
  statusCode: 834909,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response content type for this operation                                                          |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response status code for this operation                                                           |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_check_mark:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |
| `directoryServiceListResponse`                                                                         | [shared.DirectoryServiceListResponse](../../../sdk/models/shared/directoryservicelistresponse.md)      | :heavy_minus_sign:                                                                                     | The DirectoryServiceListResponse message contains a list of results and a nextPageToken if applicable. |