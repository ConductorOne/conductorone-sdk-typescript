# C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse

## Example Usage

```typescript
import { C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAccessconflictV1AccessConflictServiceUpdateMonitorResponse = {
  contentType: "<value>",
  statusCode: 63684,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |
| `conflictMonitor`                                                       | [shared.ConflictMonitor](../../../sdk/models/shared/conflictmonitor.md) | :heavy_minus_sign:                                                      | Successful response                                                     |