# C1ApiSignInPolicyV1SignInPolicyServiceListResponse

## Example Usage

```typescript
import { C1ApiSignInPolicyV1SignInPolicyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSignInPolicyV1SignInPolicyServiceListResponse = {
  contentType: "<value>",
  statusCode: 104994,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `signInPolicyServiceListResponse`                                                                       | [shared.SignInPolicyServiceListResponse](../../../sdk/models/shared/signinpolicyservicelistresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |