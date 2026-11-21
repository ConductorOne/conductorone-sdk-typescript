# C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncErrorDigestResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncErrorDigestResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorSyncDiagnosticsServiceGetSyncErrorDigestResponse =
  {
    contentType: "<value>",
    statusCode: 41813,
  };
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | HTTP response content type for this operation                                                                                          |
| `statusCode`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | HTTP response status code for this operation                                                                                           |
| `rawResponse`                                                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                  | :heavy_check_mark:                                                                                                                     | Raw HTTP response; suitable for custom response parsing                                                                                |
| `getSyncErrorDigestResponse`                                                                                                           | [shared.GetSyncErrorDigestResponse](../../../sdk/models/shared/getsyncerrordigestresponse.md)                                          | :heavy_minus_sign:                                                                                                                     | GetSyncErrorDigestResponse contains a fresh bounded summary of recent errors, using structured errors and heuristic activity matching. |