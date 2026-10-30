# C1ApiSignInPolicyV1SignInPolicyServiceSearchResponse

## Example Usage

```typescript
import { C1ApiSignInPolicyV1SignInPolicyServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSignInPolicyV1SignInPolicyServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 61927,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `signInPolicyServiceSearchResponse`                                                                         | [shared.SignInPolicyServiceSearchResponse](../../../sdk/models/shared/signinpolicyservicesearchresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |