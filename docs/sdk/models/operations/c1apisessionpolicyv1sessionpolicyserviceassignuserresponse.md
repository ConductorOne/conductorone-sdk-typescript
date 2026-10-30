# C1ApiSessionPolicyV1SessionPolicyServiceAssignUserResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceAssignUserResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSessionPolicyV1SessionPolicyServiceAssignUserResponse = {
  contentType: "<value>",
  statusCode: 210150,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `sessionPolicyServiceAssignUserResponse`                                                                              | [shared.SessionPolicyServiceAssignUserResponse](../../../sdk/models/shared/sessionpolicyserviceassignuserresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |