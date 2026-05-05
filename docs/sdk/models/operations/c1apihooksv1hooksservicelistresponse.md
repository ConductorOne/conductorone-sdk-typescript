# C1ApiHooksV1HooksServiceListResponse

## Example Usage

```typescript
import { C1ApiHooksV1HooksServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiHooksV1HooksServiceListResponse = {
  contentType: "<value>",
  statusCode: 892152,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `hooksServiceListResponse`                                                                | [shared.HooksServiceListResponse](../../../sdk/models/shared/hooksservicelistresponse.md) | :heavy_minus_sign:                                                                        | Successful response                                                                       |