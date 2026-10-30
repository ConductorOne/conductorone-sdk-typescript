# C1ApiSsov1SSOSettingsServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOSettingsServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOSettingsServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 912146,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `ssoSettingsServiceListHistoryResponse`                                                                             | [shared.SSOSettingsServiceListHistoryResponse](../../../sdk/models/shared/ssosettingsservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                  | SSOSettingsServiceListHistoryResponse returns SSO settings history entries.                                         |