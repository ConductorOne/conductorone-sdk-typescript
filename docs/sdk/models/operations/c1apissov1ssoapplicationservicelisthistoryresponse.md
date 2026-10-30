# C1ApiSsov1SSOApplicationServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOApplicationServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOApplicationServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 556222,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `ssoApplicationServiceListHistoryResponse`                                                                                | [shared.SSOApplicationServiceListHistoryResponse](../../../sdk/models/shared/ssoapplicationservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                        | SSOApplicationServiceListHistoryResponse returns SSO application history<br/> entries.                                    |