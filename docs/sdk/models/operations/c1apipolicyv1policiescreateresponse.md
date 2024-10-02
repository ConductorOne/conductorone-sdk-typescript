# C1ApiPolicyV1PoliciesCreateResponse

## Example Usage

```typescript
import { C1ApiPolicyV1PoliciesCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1PoliciesCreateResponse = {
  contentType: "<value>",
  statusCode: 102,
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
| `createPolicyResponse`                                                            | [shared.CreatePolicyResponse](../../../sdk/models/shared/createpolicyresponse.md) | :heavy_minus_sign:                                                                | The CreatePolicyResponse message contains the created policy object.              |