# C1ApiIamV1PersonalClientServiceListResponse

## Example Usage

```typescript
import { C1ApiIamV1PersonalClientServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1PersonalClientServiceListResponse = {
  contentType: "<value>",
  statusCode: 858129,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `personalClientServiceListResponse`                                                                         | [shared.PersonalClientServiceListResponse](../../../sdk/models/shared/personalclientservicelistresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |