# C1ApiSsov1SSOSettingsServiceGetResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOSettingsServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOSettingsServiceGetResponse = {
  contentType: "<value>",
  statusCode: 580025,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `ssoSettingsServiceGetResponse`                                                                     | [shared.SSOSettingsServiceGetResponse](../../../sdk/models/shared/ssosettingsservicegetresponse.md) | :heavy_minus_sign:                                                                                  | SSOSettingsServiceGetResponse returns the tenant's SSO provider settings.                           |