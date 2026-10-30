# C1ApiFeedbackV1FeedbackServiceCreateFeedbackResponse

## Example Usage

```typescript
import { C1ApiFeedbackV1FeedbackServiceCreateFeedbackResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFeedbackV1FeedbackServiceCreateFeedbackResponse = {
  contentType: "<value>",
  statusCode: 781553,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `createFeedbackResponse`                                                              | [shared.CreateFeedbackResponse](../../../sdk/models/shared/createfeedbackresponse.md) | :heavy_minus_sign:                                                                    | Successful response                                                                   |