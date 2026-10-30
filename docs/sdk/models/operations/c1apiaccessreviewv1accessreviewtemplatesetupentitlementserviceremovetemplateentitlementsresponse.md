# C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceRemoveTemplateEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceRemoveTemplateEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceRemoveTemplateEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 369312,
    };
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `accessReviewRemoveTemplateEntitlementsResponse`                                                                                      | [shared.AccessReviewRemoveTemplateEntitlementsResponse](../../../sdk/models/shared/accessreviewremovetemplateentitlementsresponse.md) | :heavy_minus_sign:                                                                                                                    | Successful response                                                                                                                   |