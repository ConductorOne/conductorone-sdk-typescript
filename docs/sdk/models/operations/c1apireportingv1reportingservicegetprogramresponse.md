# C1ApiReportingV1ReportingServiceGetProgramResponse

## Example Usage

```typescript
import { C1ApiReportingV1ReportingServiceGetProgramResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiReportingV1ReportingServiceGetProgramResponse = {
  contentType: "<value>",
  statusCode: 879407,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `reportingServiceGetProgramResponse`                                                                          | [shared.ReportingServiceGetProgramResponse](../../../sdk/models/shared/reportingservicegetprogramresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |