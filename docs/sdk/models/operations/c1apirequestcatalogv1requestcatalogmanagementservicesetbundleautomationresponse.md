# C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse

## Example Usage

```typescript
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse =
    {
      contentType: "<value>",
      statusCode: 358762,
    };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `contentType`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | HTTP response content type for this operation                             |
| `statusCode`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | HTTP response status code for this operation                              |
| `rawResponse`                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)     | :heavy_check_mark:                                                        | Raw HTTP response; suitable for custom response parsing                   |
| `bundleAutomation`                                                        | [shared.BundleAutomation](../../../sdk/models/shared/bundleautomation.md) | :heavy_minus_sign:                                                        | Successful response                                                       |