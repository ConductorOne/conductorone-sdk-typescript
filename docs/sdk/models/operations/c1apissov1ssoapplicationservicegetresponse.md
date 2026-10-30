# C1ApiSsov1SSOApplicationServiceGetResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOApplicationServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOApplicationServiceGetResponse = {
  contentType: "<value>",
  statusCode: 436338,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `ssoApplicationServiceGetResponse`                                                                        | [shared.SSOApplicationServiceGetResponse](../../../sdk/models/shared/ssoapplicationservicegetresponse.md) | :heavy_minus_sign:                                                                                        | SSOApplicationServiceGetResponse returns a single SSO application.                                        |