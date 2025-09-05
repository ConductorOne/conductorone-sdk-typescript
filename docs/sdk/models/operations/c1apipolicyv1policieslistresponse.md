# C1ApiPolicyV1PoliciesListResponse

## Example Usage

```typescript
import { C1ApiPolicyV1PoliciesListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1PoliciesListResponse = {
  contentType: "<value>",
  statusCode: 291805,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |
| `listPolicyResponse`                                                          | [shared.ListPolicyResponse](../../../sdk/models/shared/listpolicyresponse.md) | :heavy_minus_sign:                                                            | Successful response                                                           |