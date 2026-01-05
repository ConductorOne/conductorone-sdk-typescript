# C1ApiAccessreviewV1AccessReviewTemplateServiceGetResponse

## Example Usage

```typescript
import { C1ApiAccessreviewV1AccessReviewTemplateServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAccessreviewV1AccessReviewTemplateServiceGetResponse = {
  contentType: "<value>",
  statusCode: 31735,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `accessReviewTemplateServiceGetResponse`                                                                              | [shared.AccessReviewTemplateServiceGetResponse](../../../sdk/models/shared/accessreviewtemplateservicegetresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |