# C1ApiSsov1SSOSettingsServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOSettingsServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOSettingsServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 590342,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `ssoSettingsServiceUpdateResponse`                                                                        | [shared.SSOSettingsServiceUpdateResponse](../../../sdk/models/shared/ssosettingsserviceupdateresponse.md) | :heavy_minus_sign:                                                                                        | SSOSettingsServiceUpdateResponse returns the updated settings.                                            |