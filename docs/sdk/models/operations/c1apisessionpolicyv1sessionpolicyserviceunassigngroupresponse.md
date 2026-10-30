# C1ApiSessionPolicyV1SessionPolicyServiceUnassignGroupResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceUnassignGroupResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSessionPolicyV1SessionPolicyServiceUnassignGroupResponse = {
  contentType: "<value>",
  statusCode: 85677,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `sessionPolicyServiceUnassignGroupResponse`                                                                                 | [shared.SessionPolicyServiceUnassignGroupResponse](../../../sdk/models/shared/sessionpolicyserviceunassigngroupresponse.md) | :heavy_minus_sign:                                                                                                          | Successful response                                                                                                         |