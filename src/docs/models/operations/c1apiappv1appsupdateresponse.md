# C1ApiAppV1AppsUpdateResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | HTTP response content type for this operation                        |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP response status code for this operation                         |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | Raw HTTP response; suitable for custom response parsing              |
| `updateAppResponse`                                                  | [shared.UpdateAppResponse](../../models/shared/updateappresponse.md) | :heavy_minus_sign:                                                   | Returns the updated app's new values.                                |