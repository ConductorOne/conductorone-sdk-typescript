# C1APIIamV1ModelAPIKeyServiceGetResponse

## Example Usage

```typescript
import { C1APIIamV1ModelAPIKeyServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1APIIamV1ModelAPIKeyServiceGetResponse = {
  contentType: "<value>",
  statusCode: 959595,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `modelAPIKeyServiceGetResponse`                                                                     | [shared.ModelAPIKeyServiceGetResponse](../../../sdk/models/shared/modelapikeyservicegetresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |