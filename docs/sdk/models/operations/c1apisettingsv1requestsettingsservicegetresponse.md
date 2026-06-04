# C1ApiSettingsV1RequestSettingsServiceGetResponse

## Example Usage

```typescript
import { C1ApiSettingsV1RequestSettingsServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1RequestSettingsServiceGetResponse = {
  contentType: "<value>",
  statusCode: 507204,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `getRequestSettingsResponse`                                                                  | [shared.GetRequestSettingsResponse](../../../sdk/models/shared/getrequestsettingsresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |