# C1ApiSessionPolicyV1SessionPolicyServiceAssignGroupResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceAssignGroupResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSessionPolicyV1SessionPolicyServiceAssignGroupResponse = {
  contentType: "<value>",
  statusCode: 94419,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `sessionPolicyServiceAssignGroupResponse`                                                                               | [shared.SessionPolicyServiceAssignGroupResponse](../../../sdk/models/shared/sessionpolicyserviceassigngroupresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |