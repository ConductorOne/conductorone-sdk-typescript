# C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByExcludedResourceTypeResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByExcludedResourceTypeResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByExcludedResourceTypeResponse =
    {
      contentType: "<value>",
      statusCode: 504042,
    };
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                 | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response content type for this operation                                                                                                                 |
| `statusCode`                                                                                                                                                  | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response status code for this operation                                                                                                                  |
| `rawResponse`                                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                         | :heavy_check_mark:                                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                                       |
| `accessReviewSetTemplateScopeByExcludedResourceTypeResponse`                                                                                                  | [shared.AccessReviewSetTemplateScopeByExcludedResourceTypeResponse](../../../sdk/models/shared/accessreviewsettemplatescopebyexcludedresourcetyperesponse.md) | :heavy_minus_sign:                                                                                                                                            | AccessReviewSetTemplateScopeByExcludedResourceTypeResponse contains the resulting excluded resource types and scope.                                          |