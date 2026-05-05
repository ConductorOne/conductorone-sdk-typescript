# C1ApiA2uiV1A2UIServiceListSurfaceFeedbackResponse

## Example Usage

```typescript
import { C1ApiA2uiV1A2UIServiceListSurfaceFeedbackResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiA2uiV1A2UIServiceListSurfaceFeedbackResponse = {
  contentType: "<value>",
  statusCode: 740941,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `a2UIServiceListSurfaceFeedbackResponse`                                                                              | [shared.A2UIServiceListSurfaceFeedbackResponse](../../../sdk/models/shared/a2uiservicelistsurfacefeedbackresponse.md) | :heavy_minus_sign:                                                                                                    | A2UIServiceListSurfaceFeedbackResponse returns feedback for a surface.                                                |