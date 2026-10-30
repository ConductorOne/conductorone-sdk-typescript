# C1ApiFundsV1FundAssignmentServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiFundsV1FundAssignmentServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1FundAssignmentServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 423373,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `fundAssignmentServiceListHistoryResponse`                                                                                | [shared.FundAssignmentServiceListHistoryResponse](../../../sdk/models/shared/fundassignmentservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                        | Successful response                                                                                                       |