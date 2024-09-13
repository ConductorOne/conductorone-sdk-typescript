# C1ApiPolicyV1PoliciesUpdateResponse

## Example Usage

```typescript
import { C1ApiPolicyV1PoliciesUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1PoliciesUpdateResponse = {
  contentType: "<value>",
  statusCode: 613064,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `updatePolicyResponse`                                                            | [shared.UpdatePolicyResponse](../../../sdk/models/shared/updatepolicyresponse.md) | :heavy_minus_sign:                                                                | The UpdatePolicyResponse message contains the updated policy object.              |