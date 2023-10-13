# C1ApiIamV1RolesUpdateResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | HTTP response content type for this operation                            |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP response status code for this operation                             |
| `rawResponse`                                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)                  | :heavy_minus_sign:                                                       | Raw HTTP response; suitable for custom response parsing                  |
| `updateRolesResponse`                                                    | [shared.UpdateRolesResponse](../../models/shared/updaterolesresponse.md) | :heavy_minus_sign:                                                       | UpdateRolesResponse is the response message containing the updated role. |