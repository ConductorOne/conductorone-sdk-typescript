# C1ApiSettingsV1UserNotificationSettingsServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiSettingsV1UserNotificationSettingsServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1UserNotificationSettingsServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 958832,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `updateUserNotificationSettingsResponse`                                                                              | [shared.UpdateUserNotificationSettingsResponse](../../../sdk/models/shared/updateusernotificationsettingsresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |