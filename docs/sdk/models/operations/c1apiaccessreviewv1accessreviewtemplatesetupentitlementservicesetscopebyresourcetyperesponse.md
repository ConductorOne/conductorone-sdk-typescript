# C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByResourceTypeResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByResourceTypeResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByResourceTypeResponse =
    {
      contentType: "<value>",
      statusCode: 574773,
    };
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                         | :heavy_check_mark:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
| `accessReviewTemplateSetScopeByResourceTypeResponse`                                                                                          | [shared.AccessReviewTemplateSetScopeByResourceTypeResponse](../../../sdk/models/shared/accessreviewtemplatesetscopebyresourcetyperesponse.md) | :heavy_minus_sign:                                                                                                                            | Successful response                                                                                                                           |