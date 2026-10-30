# C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceAddTemplateEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceAddTemplateEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceAddTemplateEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 222735,
    };
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `accessReviewAddTemplateEntitlementsResponse`                                                                                   | [shared.AccessReviewAddTemplateEntitlementsResponse](../../../sdk/models/shared/accessreviewaddtemplateentitlementsresponse.md) | :heavy_minus_sign:                                                                                                              | Successful response                                                                                                             |