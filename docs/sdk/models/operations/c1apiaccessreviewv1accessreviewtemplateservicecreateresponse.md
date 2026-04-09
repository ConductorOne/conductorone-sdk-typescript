# C1ApiAccessreviewV1AccessReviewTemplateServiceCreateResponse

## Example Usage

```typescript
import { C1ApiAccessreviewV1AccessReviewTemplateServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAccessreviewV1AccessReviewTemplateServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 641134,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `accessReviewTemplateServiceCreateResponse`                                                                                 | [shared.AccessReviewTemplateServiceCreateResponse](../../../sdk/models/shared/accessreviewtemplateservicecreateresponse.md) | :heavy_minus_sign:                                                                                                          | Successful response                                                                                                         |