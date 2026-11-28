# C1ApiAppV1ConnectorSyncDiagnosticsServiceCompareSyncStatsResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorSyncDiagnosticsServiceCompareSyncStatsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorSyncDiagnosticsServiceCompareSyncStatsResponse = {
  contentType: "<value>",
  statusCode: 666978,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `compareSyncStatsResponse`                                                                  | [shared.CompareSyncStatsResponse](../../../sdk/models/shared/comparesyncstatsresponse.md)   | :heavy_minus_sign:                                                                          | CompareSyncStatsResponse contains count deltas only, without synced records or file access. |