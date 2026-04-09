# C1ApiAccessreviewV1AccessReviewTemplateServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiAccessreviewV1AccessReviewTemplateServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAccessreviewV1AccessReviewTemplateServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 634898,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `accessReviewTemplateServiceDeleteResponse`                                                                                 | [shared.AccessReviewTemplateServiceDeleteResponse](../../../sdk/models/shared/accessreviewtemplateservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                          | Successful response                                                                                                         |