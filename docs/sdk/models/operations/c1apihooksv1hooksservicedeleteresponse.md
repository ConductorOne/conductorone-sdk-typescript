# C1ApiHooksV1HooksServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiHooksV1HooksServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiHooksV1HooksServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 174406,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `hooksServiceDeleteResponse`                                                                  | [shared.HooksServiceDeleteResponse](../../../sdk/models/shared/hooksservicedeleteresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |