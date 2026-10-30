# C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndExcludedEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndExcludedEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndExcludedEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 581993,
    };
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                   | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | HTTP response content type for this operation                                                                                                                   |
| `statusCode`                                                                                                                                                    | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | HTTP response status code for this operation                                                                                                                    |
| `rawResponse`                                                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                           | :heavy_check_mark:                                                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                                                         |
| `accessReviewSetCampaignScopeAndExcludedEntitlementsResponse`                                                                                                   | [shared.AccessReviewSetCampaignScopeAndExcludedEntitlementsResponse](../../../sdk/models/shared/accessreviewsetcampaignscopeandexcludedentitlementsresponse.md) | :heavy_minus_sign:                                                                                                                                              | AccessReviewSetCampaignScopeAndExcludedEntitlementsResponse contains the resulting excluded entitlements and scope.                                             |