# C1ApiSettingsV1OrgNotificationSettingsServiceGetResponse

## Example Usage

```typescript
import { C1ApiSettingsV1OrgNotificationSettingsServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1OrgNotificationSettingsServiceGetResponse = {
  contentType: "<value>",
  statusCode: 560900,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `getOrgNotificationSettingsResponse`                                                                          | [shared.GetOrgNotificationSettingsResponse](../../../sdk/models/shared/getorgnotificationsettingsresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |