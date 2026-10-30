# C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeAndExcludedEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeAndExcludedEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeAndExcludedEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 59427,
    };
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | HTTP response content type for this operation                                                                                                                   |
| `statusCode`                                                                                                                                                    | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | HTTP response status code for this operation                                                                                                                    |
| `rawResponse`                                                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                           | :heavy_check_mark:                                                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                                                         |
| `accessReviewSetTemplateScopeAndExcludedEntitlementsResponse`                                                                                                   | [shared.AccessReviewSetTemplateScopeAndExcludedEntitlementsResponse](../../../sdk/models/shared/accessreviewsettemplatescopeandexcludedentitlementsresponse.md) | :heavy_minus_sign:                                                                                                                                              | AccessReviewSetTemplateScopeAndExcludedEntitlementsResponse contains the resulting excluded entitlements and scope.                                             |