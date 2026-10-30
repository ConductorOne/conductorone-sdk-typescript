# C1ApiSessionPolicyV1SessionPolicyServiceGetEffectiveSessionPolicyResponse

## Example Usage

```typescript
import { C1ApiSessionPolicyV1SessionPolicyServiceGetEffectiveSessionPolicyResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiSessionPolicyV1SessionPolicyServiceGetEffectiveSessionPolicyResponse = {
    contentType: "<value>",
    statusCode: 905281,
  };
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response content type for this operation                                                                                                       |
| `statusCode`                                                                                                                                        | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response status code for this operation                                                                                                        |
| `rawResponse`                                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                               | :heavy_check_mark:                                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                                             |
| `sessionPolicyServiceGetEffectiveSessionPolicyResponse`                                                                                             | [shared.SessionPolicyServiceGetEffectiveSessionPolicyResponse](../../../sdk/models/shared/sessionpolicyservicegeteffectivesessionpolicyresponse.md) | :heavy_minus_sign:                                                                                                                                  | SessionPolicyServiceGetEffectiveSessionPolicyResponse carries the effective<br/> policy and why it applies.                                         |