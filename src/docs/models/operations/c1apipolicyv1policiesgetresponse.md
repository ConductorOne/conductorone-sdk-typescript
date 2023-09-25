# C1ApiPolicyV1PoliciesGetResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | HTTP response content type for this operation                        |
| `getPolicyResponse`                                                  | [shared.GetPolicyResponse](../../models/shared/getpolicyresponse.md) | :heavy_minus_sign:                                                   | The GetPolicyResponse message contains the policy object.            |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP response status code for this operation                         |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | Raw HTTP response; suitable for custom response parsing              |