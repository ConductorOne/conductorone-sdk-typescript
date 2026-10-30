# C1ApiReportingV1ReportingServiceListResponse

## Example Usage

```typescript
import { C1ApiReportingV1ReportingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiReportingV1ReportingServiceListResponse = {
  contentType: "<value>",
  statusCode: 775465,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `reportingServiceListResponse`                                                                    | [shared.ReportingServiceListResponse](../../../sdk/models/shared/reportingservicelistresponse.md) | :heavy_minus_sign:                                                                                | Successful response                                                                               |