# C1ApiAuthzenV1AuthzenServerServiceListResponse

## Example Usage

```typescript
import { C1ApiAuthzenV1AuthzenServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthzenV1AuthzenServerServiceListResponse = {
  contentType: "<value>",
  statusCode: 746940,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `authzenServerServiceListResponse`                                                                        | [shared.AuthzenServerServiceListResponse](../../../sdk/models/shared/authzenserverservicelistresponse.md) | :heavy_minus_sign:                                                                                        | AuthzenServerServiceListResponse lists AuthZEN servers for an app.                                        |