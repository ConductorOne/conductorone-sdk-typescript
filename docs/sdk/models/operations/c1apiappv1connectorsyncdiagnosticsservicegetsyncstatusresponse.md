# C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncStatusResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncStatusResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncStatusResponse = {
  contentType: "<value>",
  statusCode: 479527,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `getSyncStatusResponse`                                                             | [shared.GetSyncStatusResponse](../../../sdk/models/shared/getsyncstatusresponse.md) | :heavy_minus_sign:                                                                  | GetSyncStatusResponse contains the current diagnostic status.                       |