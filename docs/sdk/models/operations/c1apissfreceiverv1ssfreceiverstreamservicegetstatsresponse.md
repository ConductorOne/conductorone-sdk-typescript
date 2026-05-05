# C1ApiSSFReceiverV1SSFReceiverStreamServiceGetStatsResponse

## Example Usage

```typescript
import { C1ApiSSFReceiverV1SSFReceiverStreamServiceGetStatsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSSFReceiverV1SSFReceiverStreamServiceGetStatsResponse = {
  contentType: "<value>",
  statusCode: 242078,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `ssfReceiverStreamServiceGetStatsResponse`                                                                                | [shared.SSFReceiverStreamServiceGetStatsResponse](../../../sdk/models/shared/ssfreceiverstreamservicegetstatsresponse.md) | :heavy_minus_sign:                                                                                                        | SSFReceiverStreamServiceGetStatsResponse contains the event processing statistics for the stream.                         |