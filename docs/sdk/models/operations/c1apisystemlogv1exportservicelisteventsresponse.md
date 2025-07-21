# C1ApiSystemlogV1ExportServiceListEventsResponse

## Example Usage

```typescript
import { C1ApiSystemlogV1ExportServiceListEventsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSystemlogV1ExportServiceListEventsResponse = {
  contentType: "<value>",
  statusCode: 408874,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `exportServiceListEventsResponse`                                                                       | [shared.ExportServiceListEventsResponse](../../../sdk/models/shared/exportservicelisteventsresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |