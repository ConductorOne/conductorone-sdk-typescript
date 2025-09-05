# C1ApiAppV1AppReportServiceListResponse

## Example Usage

```typescript
import { C1ApiAppV1AppReportServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppReportServiceListResponse = {
  contentType: "<value>",
  statusCode: 54126,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response content type for this operation                                                          |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response status code for this operation                                                           |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_check_mark:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |
| `appReportServiceListResponse`                                                                         | [shared.AppReportServiceListResponse](../../../sdk/models/shared/appreportservicelistresponse.md)      | :heavy_minus_sign:                                                                                     | The AppReportServiceListResponse message contains a list of results and a nextPageToken if applicable. |