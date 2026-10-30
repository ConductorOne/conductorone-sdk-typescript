# C1ApiCrossAppAccessV1XAASettingsServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAASettingsServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAASettingsServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 951499,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `xaaSettingsServiceListHistoryResponse`                                                                             | [shared.XAASettingsServiceListHistoryResponse](../../../sdk/models/shared/xaasettingsservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                  | XAASettingsServiceListHistoryResponse returns cross-app-access settings<br/> history entries.                       |