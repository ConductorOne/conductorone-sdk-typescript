# C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 708158,
    };
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                         | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | HTTP response content type for this operation                                                                                                         |
| `statusCode`                                                                                                                                          | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | HTTP response status code for this operation                                                                                                          |
| `rawResponse`                                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                 | :heavy_check_mark:                                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                                               |
| `accessReviewSetupEntitlementAndScopeServiceSetResponse`                                                                                              | [shared.AccessReviewSetupEntitlementAndScopeServiceSetResponse](../../../sdk/models/shared/accessreviewsetupentitlementandscopeservicesetresponse.md) | :heavy_minus_sign:                                                                                                                                    | Successful response                                                                                                                                   |