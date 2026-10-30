# C1ApiTaskV1TaskServiceCreateSpendRemedyTaskResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskServiceCreateSpendRemedyTaskResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskServiceCreateSpendRemedyTaskResponse = {
  contentType: "<value>",
  statusCode: 366338,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `taskServiceCreateSpendRemedyResponse`                                                                            | [shared.TaskServiceCreateSpendRemedyResponse](../../../sdk/models/shared/taskservicecreatespendremedyresponse.md) | :heavy_minus_sign:                                                                                                | Successful response                                                                                               |