# C1ApiAuthzenV1AuthzenServerServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 274392,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `authzenServerServiceUpdateResponse`                                                                          | [shared.AuthzenServerServiceUpdateResponse](../../../sdk/models/shared/authzenserverserviceupdateresponse.md) | :heavy_minus_sign:                                                                                            | AuthzenServerServiceUpdateResponse returns the updated server.                                                |