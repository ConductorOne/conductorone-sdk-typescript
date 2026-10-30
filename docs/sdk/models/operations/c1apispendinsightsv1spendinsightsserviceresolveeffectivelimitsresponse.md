# C1ApiSpendinsightsV1SpendInsightsServiceResolveEffectiveLimitsResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceResolveEffectiveLimitsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiSpendinsightsV1SpendInsightsServiceResolveEffectiveLimitsResponse = {
    contentType: "<value>",
    statusCode: 287347,
  };
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `resolveEffectiveLimitsResponse`                                                                      | [shared.ResolveEffectiveLimitsResponse](../../../sdk/models/shared/resolveeffectivelimitsresponse.md) | :heavy_minus_sign:                                                                                    | ResolveEffectiveLimitsResponse contains the limits currently applying to a user.                      |