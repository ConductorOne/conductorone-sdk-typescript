# C1ApiAppV1ConnectorServiceResumeSyncResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorServiceResumeSyncResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorServiceResumeSyncResponse = {
  contentType: "<value>",
  statusCode: 358096,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |
| `resumeSyncResponse`                                                          | [shared.ResumeSyncResponse](../../../sdk/models/shared/resumesyncresponse.md) | :heavy_minus_sign:                                                            | Successful response                                                           |