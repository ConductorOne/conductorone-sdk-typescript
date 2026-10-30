# C1ApiSignInPolicyV1SignInPolicyServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiSignInPolicyV1SignInPolicyServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSignInPolicyV1SignInPolicyServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 501314,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `signInPolicyServiceDeleteResponse`                                                                         | [shared.SignInPolicyServiceDeleteResponse](../../../sdk/models/shared/signinpolicyservicedeleteresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |