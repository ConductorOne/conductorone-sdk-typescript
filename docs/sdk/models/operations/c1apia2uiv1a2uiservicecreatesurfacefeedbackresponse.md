# C1ApiA2uiV1A2UIServiceCreateSurfaceFeedbackResponse

## Example Usage

```typescript
import { C1ApiA2uiV1A2UIServiceCreateSurfaceFeedbackResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiA2uiV1A2UIServiceCreateSurfaceFeedbackResponse = {
  contentType: "<value>",
  statusCode: 986529,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `a2UIServiceCreateSurfaceFeedbackResponse`                                                                                | [shared.A2UIServiceCreateSurfaceFeedbackResponse](../../../sdk/models/shared/a2uiservicecreatesurfacefeedbackresponse.md) | :heavy_minus_sign:                                                                                                        | A2UIServiceCreateSurfaceFeedbackResponse returns the created feedback.                                                    |