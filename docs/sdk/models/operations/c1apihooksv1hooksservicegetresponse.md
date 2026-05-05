# C1ApiHooksV1HooksServiceGetResponse

## Example Usage

```typescript
import { C1ApiHooksV1HooksServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiHooksV1HooksServiceGetResponse = {
  contentType: "<value>",
  statusCode: 106975,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `hooksServiceGetResponse`                                                               | [shared.HooksServiceGetResponse](../../../sdk/models/shared/hooksservicegetresponse.md) | :heavy_minus_sign:                                                                      | Successful response                                                                     |