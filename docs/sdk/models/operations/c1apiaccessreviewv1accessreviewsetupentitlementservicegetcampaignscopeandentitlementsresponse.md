# C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceGetCampaignScopeAndEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceGetCampaignScopeAndEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceGetCampaignScopeAndEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 99521,
    };
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                         | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | HTTP response content type for this operation                                                                                                         |
| `statusCode`                                                                                                                                          | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | HTTP response status code for this operation                                                                                                          |
| `rawResponse`                                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                 | :heavy_check_mark:                                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                                               |
| `accessReviewSetupEntitlementAndScopeServiceSetResponse`                                                                                              | [shared.AccessReviewSetupEntitlementAndScopeServiceSetResponse](../../../sdk/models/shared/accessreviewsetupentitlementandscopeservicesetresponse.md) | :heavy_minus_sign:                                                                                                                                    | Successful response                                                                                                                                   |