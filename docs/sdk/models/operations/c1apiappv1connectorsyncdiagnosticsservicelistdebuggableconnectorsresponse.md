# C1ApiAppV1ConnectorSyncDiagnosticsServiceListDebuggableConnectorsResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorSyncDiagnosticsServiceListDebuggableConnectorsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1ConnectorSyncDiagnosticsServiceListDebuggableConnectorsResponse = {
    contentType: "<value>",
    statusCode: 39503,
  };
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `listDebuggableConnectorsResponse`                                                                        | [shared.ListDebuggableConnectorsResponse](../../../sdk/models/shared/listdebuggableconnectorsresponse.md) | :heavy_minus_sign:                                                                                        | ListDebuggableConnectorsResponse contains eligible connectors from the inspected page.                    |