# C1ApiPolicyV1PoliciesGetResponse

## Example Usage

```typescript
import { C1ApiPolicyV1PoliciesGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1PoliciesGetResponse = {
  contentType: "<value>",
  statusCode: 359508,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `getPolicyResponse`                                                         | [shared.GetPolicyResponse](../../../sdk/models/shared/getpolicyresponse.md) | :heavy_minus_sign:                                                          | The GetPolicyResponse message contains the policy object.                   |