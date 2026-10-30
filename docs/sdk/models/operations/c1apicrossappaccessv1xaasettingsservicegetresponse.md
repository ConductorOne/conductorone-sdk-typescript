# C1ApiCrossAppAccessV1XAASettingsServiceGetResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAASettingsServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAASettingsServiceGetResponse = {
  contentType: "<value>",
  statusCode: 474265,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `xaaSettingsServiceGetResponse`                                                                     | [shared.XAASettingsServiceGetResponse](../../../sdk/models/shared/xaasettingsservicegetresponse.md) | :heavy_minus_sign:                                                                                  | XAASettingsServiceGetResponse returns the tenant's cross-app-access settings.                       |