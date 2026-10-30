# C1ApiSessionPolicyV1SessionPolicyServiceUnassignUserResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceUnassignUserResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSessionPolicyV1SessionPolicyServiceUnassignUserResponse = {
  contentType: "<value>",
  statusCode: 88825,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `sessionPolicyServiceUnassignUserResponse`                                                                                | [shared.SessionPolicyServiceUnassignUserResponse](../../../sdk/models/shared/sessionpolicyserviceunassignuserresponse.md) | :heavy_minus_sign:                                                                                                        | Successful response                                                                                                       |