# C1ApiReportingV1ReportingServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiReportingV1ReportingServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiReportingV1ReportingServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 788599,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `reportingServiceDeleteResponse`                                                                      | [shared.ReportingServiceDeleteResponse](../../../sdk/models/shared/reportingservicedeleteresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |