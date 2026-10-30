# C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeByExcludedResourceTypeResponse

## Example Usage

```typescript
import {
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeByExcludedResourceTypeResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeByExcludedResourceTypeResponse =
    {
      contentType: "<value>",
      statusCode: 289797,
    };
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                 | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response content type for this operation                                                                                                                 |
| `statusCode`                                                                                                                                                  | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response status code for this operation                                                                                                                  |
| `rawResponse`                                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                         | :heavy_check_mark:                                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                                       |
| `accessReviewSetCampaignScopeByExcludedResourceTypeResponse`                                                                                                  | [shared.AccessReviewSetCampaignScopeByExcludedResourceTypeResponse](../../../sdk/models/shared/accessreviewsetcampaignscopebyexcludedresourcetyperesponse.md) | :heavy_minus_sign:                                                                                                                                            | AccessReviewSetCampaignScopeByExcludedResourceTypeResponse contains the resulting excluded resource types and scope.                                          |