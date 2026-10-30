# C1ApiReportingV1ReportingServiceGetResponse

## Example Usage

```typescript
import { C1ApiReportingV1ReportingServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiReportingV1ReportingServiceGetResponse = {
  contentType: "<value>",
  statusCode: 914605,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `reportingServiceGetResponse`                                                                   | [shared.ReportingServiceGetResponse](../../../sdk/models/shared/reportingservicegetresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |