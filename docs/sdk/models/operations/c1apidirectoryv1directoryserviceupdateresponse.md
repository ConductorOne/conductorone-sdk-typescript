# C1ApiDirectoryV1DirectoryServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiDirectoryV1DirectoryServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiDirectoryV1DirectoryServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 387701,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `directoryServiceUpdateResponse`                                                                      | [shared.DirectoryServiceUpdateResponse](../../../sdk/models/shared/directoryserviceupdateresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |