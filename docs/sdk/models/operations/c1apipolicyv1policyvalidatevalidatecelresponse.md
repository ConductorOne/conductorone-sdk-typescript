# C1ApiPolicyV1PolicyValidateValidateCELResponse

## Example Usage

```typescript
import { C1ApiPolicyV1PolicyValidateValidateCELResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1PolicyValidateValidateCELResponse = {
  contentType: "<value>",
  statusCode: 437032,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `validatePolicyCELResponse`                                                                 | [shared.ValidatePolicyCELResponse](../../../sdk/models/shared/validatepolicycelresponse.md) | :heavy_minus_sign:                                                                          | Successful response                                                                         |