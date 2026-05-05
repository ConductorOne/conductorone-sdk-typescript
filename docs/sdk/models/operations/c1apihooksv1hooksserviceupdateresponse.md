# C1ApiHooksV1HooksServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiHooksV1HooksServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiHooksV1HooksServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 660679,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `hooksServiceUpdateResponse`                                                                  | [shared.HooksServiceUpdateResponse](../../../sdk/models/shared/hooksserviceupdateresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |