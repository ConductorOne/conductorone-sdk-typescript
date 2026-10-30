# C1ApiSessionPolicyV1SessionPolicyServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSessionPolicyV1SessionPolicyServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 4876,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `sessionPolicyServiceDeleteResponse`                                                                          | [shared.SessionPolicyServiceDeleteResponse](../../../sdk/models/shared/sessionpolicyservicedeleteresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |