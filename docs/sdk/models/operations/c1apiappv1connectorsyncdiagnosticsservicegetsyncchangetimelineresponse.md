# C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncChangeTimelineResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncChangeTimelineResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncChangeTimelineResponse = {
    contentType: "<value>",
    statusCode: 896171,
  };
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `getSyncChangeTimelineResponse`                                                                       | [shared.GetSyncChangeTimelineResponse](../../../sdk/models/shared/getsyncchangetimelineresponse.md)   | :heavy_minus_sign:                                                                                    | GetSyncChangeTimelineResponse contains the observed window and explicitly incomplete source coverage. |