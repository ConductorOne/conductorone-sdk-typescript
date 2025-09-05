# C1ApiDirectoryV1DirectoryServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiDirectoryV1DirectoryServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiDirectoryV1DirectoryServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 828581,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `directoryServiceDeleteResponse`                                                                      | [shared.DirectoryServiceDeleteResponse](../../../sdk/models/shared/directoryservicedeleteresponse.md) | :heavy_minus_sign:                                                                                    | Empty response with a status code indicating success.                                                 |