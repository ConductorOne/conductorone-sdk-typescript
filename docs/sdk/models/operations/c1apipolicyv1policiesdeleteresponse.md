# C1ApiPolicyV1PoliciesDeleteResponse

## Example Usage

```typescript
import { C1ApiPolicyV1PoliciesDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1PoliciesDeleteResponse = {
  contentType: "<value>",
  statusCode: 449950,
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
| `deletePolicyResponse`                                                            | [shared.DeletePolicyResponse](../../../sdk/models/shared/deletepolicyresponse.md) | :heavy_minus_sign:                                                                | Empty response with a status code indicating success.                             |