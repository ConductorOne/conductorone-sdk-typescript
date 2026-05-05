# C1ApiLocalDirectoryV1LocalDirectoryConfigServiceListResponse

## Example Usage

```typescript
import { C1ApiLocalDirectoryV1LocalDirectoryConfigServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiLocalDirectoryV1LocalDirectoryConfigServiceListResponse = {
  contentType: "<value>",
  statusCode: 293618,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `localDirectoryConfigServiceListResponse`                                                                               | [shared.LocalDirectoryConfigServiceListResponse](../../../sdk/models/shared/localdirectoryconfigservicelistresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |