# C1ApiTaskV1TaskServiceGetSpendRemedyReviewResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskServiceGetSpendRemedyReviewResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskServiceGetSpendRemedyReviewResponse = {
  contentType: "<value>",
  statusCode: 896411,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `taskServiceGetSpendRemedyReviewResponse`                                                                               | [shared.TaskServiceGetSpendRemedyReviewResponse](../../../sdk/models/shared/taskservicegetspendremedyreviewresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |