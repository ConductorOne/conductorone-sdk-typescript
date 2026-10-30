# C1ApiSessionPolicyV1SessionPolicyServiceListResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSessionPolicyV1SessionPolicyServiceListResponse = {
  contentType: "<value>",
  statusCode: 679872,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `sessionPolicyServiceListResponse`                                                                        | [shared.SessionPolicyServiceListResponse](../../../sdk/models/shared/sessionpolicyservicelistresponse.md) | :heavy_minus_sign:                                                                                        | Successful response                                                                                       |