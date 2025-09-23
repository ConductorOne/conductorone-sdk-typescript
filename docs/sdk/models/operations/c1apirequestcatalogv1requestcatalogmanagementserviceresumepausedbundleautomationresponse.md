# C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse

## Example Usage

```typescript
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse =
    {
      contentType: "<value>",
      statusCode: 770880,
    };
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `resumePausedBundleAutomationResponse`                                                                            | [shared.ResumePausedBundleAutomationResponse](../../../sdk/models/shared/resumepausedbundleautomationresponse.md) | :heavy_minus_sign:                                                                                                | Successful response                                                                                               |