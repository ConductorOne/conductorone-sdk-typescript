# C1ApiCrossAppAccessV1XAASettingsServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAASettingsServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAASettingsServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 246650,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `xaaSettingsServiceUpdateResponse`                                                                        | [shared.XAASettingsServiceUpdateResponse](../../../sdk/models/shared/xaasettingsserviceupdateresponse.md) | :heavy_minus_sign:                                                                                        | XAASettingsServiceUpdateResponse returns the updated settings.                                            |