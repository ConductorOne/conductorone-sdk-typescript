# C1APIIamV1ModelAPIKeyServiceListResponse

## Example Usage

```typescript
import { C1APIIamV1ModelAPIKeyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1APIIamV1ModelAPIKeyServiceListResponse = {
  contentType: "<value>",
  statusCode: 262190,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `modelAPIKeyServiceListResponse`                                                                      | [shared.ModelAPIKeyServiceListResponse](../../../sdk/models/shared/modelapikeyservicelistresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |