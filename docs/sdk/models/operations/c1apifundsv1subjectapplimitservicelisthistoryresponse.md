# C1ApiFundsV1SubjectAppLimitServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiFundsV1SubjectAppLimitServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1SubjectAppLimitServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 295269,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `subjectAppLimitServiceListHistoryResponse`                                                                                 | [shared.SubjectAppLimitServiceListHistoryResponse](../../../sdk/models/shared/subjectapplimitservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                          | Successful response                                                                                                         |