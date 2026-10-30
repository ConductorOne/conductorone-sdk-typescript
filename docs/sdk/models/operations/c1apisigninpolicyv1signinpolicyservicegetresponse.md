# C1ApiSignInPolicyV1SignInPolicyServiceGetResponse

## Example Usage

```typescript
import { C1ApiSignInPolicyV1SignInPolicyServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSignInPolicyV1SignInPolicyServiceGetResponse = {
  contentType: "<value>",
  statusCode: 898573,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `signInPolicyServiceGetResponse`                                                                      | [shared.SignInPolicyServiceGetResponse](../../../sdk/models/shared/signinpolicyservicegetresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |