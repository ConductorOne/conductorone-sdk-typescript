# C1ApiReportingV1ReportingServiceGetRunProvenanceResponse

## Example Usage

```typescript
import { C1ApiReportingV1ReportingServiceGetRunProvenanceResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiReportingV1ReportingServiceGetRunProvenanceResponse = {
  contentType: "<value>",
  statusCode: 585489,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `reportingServiceGetRunProvenanceResponse`                                                                                | [shared.ReportingServiceGetRunProvenanceResponse](../../../sdk/models/shared/reportingservicegetrunprovenanceresponse.md) | :heavy_minus_sign:                                                                                                        | Successful response                                                                                                       |