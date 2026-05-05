# C1ApiLocalDirectoryV1LocalDirectoryConfigServiceGetResponse

## Example Usage

```typescript
import { C1ApiLocalDirectoryV1LocalDirectoryConfigServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiLocalDirectoryV1LocalDirectoryConfigServiceGetResponse = {
  contentType: "<value>",
  statusCode: 884634,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `localDirectoryConfigServiceGetResponse`                                                                              | [shared.LocalDirectoryConfigServiceGetResponse](../../../sdk/models/shared/localdirectoryconfigservicegetresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |