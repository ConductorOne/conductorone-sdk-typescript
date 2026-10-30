# C1ApiSpendinsightsV1SpendInsightsServiceSearchDenialsResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceSearchDenialsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSpendinsightsV1SpendInsightsServiceSearchDenialsResponse = {
  contentType: "<value>",
  statusCode: 880253,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `searchDenialsResponse`                                                             | [shared.SearchDenialsResponse](../../../sdk/models/shared/searchdenialsresponse.md) | :heavy_minus_sign:                                                                  | SearchDenialsResponse contains one page of denial episodes.                         |