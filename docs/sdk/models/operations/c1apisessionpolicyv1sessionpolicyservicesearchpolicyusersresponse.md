# C1ApiSessionPolicyV1SessionPolicyServiceSearchPolicyUsersResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceSearchPolicyUsersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSessionPolicyV1SessionPolicyServiceSearchPolicyUsersResponse = {
  contentType: "<value>",
  statusCode: 306420,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `sessionPolicyServiceSearchPolicyUsersResponse`                                                                                     | [shared.SessionPolicyServiceSearchPolicyUsersResponse](../../../sdk/models/shared/sessionpolicyservicesearchpolicyusersresponse.md) | :heavy_minus_sign:                                                                                                                  | SessionPolicyServiceSearchPolicyUsersResponse carries one page of the users<br/> a policy applies to.                               |