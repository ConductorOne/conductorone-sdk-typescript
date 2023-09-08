# C1ApiTaskV1TaskServiceCreateRevokeTaskResponse


## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `rawResponse`                                                                                                                               | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                                                                    | :heavy_minus_sign:                                                                                                                          | N/A                                                                                                                                         |
| `taskServiceCreateRevokeResponse`                                                                                                           | [shared.TaskServiceCreateRevokeResponse](../../models/shared/taskservicecreaterevokeresponse.md)                                            | :heavy_minus_sign:                                                                                                                          |  The TaskServiceCreateRevokeResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.<br/> |