# C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncHistoryResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncHistoryResponse = {
  contentType: "<value>",
  statusCode: 162441,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `getSyncHistoryResponse`                                                              | [shared.GetSyncHistoryResponse](../../../sdk/models/shared/getsynchistoryresponse.md) | :heavy_minus_sign:                                                                    | GetSyncHistoryResponse contains newest-first runs and the trend within that window.   |