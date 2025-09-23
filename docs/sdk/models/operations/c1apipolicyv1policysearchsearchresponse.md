# C1ApiPolicyV1PolicySearchSearchResponse

## Example Usage

```typescript
import { C1ApiPolicyV1PolicySearchSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1PolicySearchSearchResponse = {
  contentType: "<value>",
  statusCode: 534698,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `searchPoliciesResponse`                                                              | [shared.SearchPoliciesResponse](../../../sdk/models/shared/searchpoliciesresponse.md) | :heavy_minus_sign:                                                                    | Successful response                                                                   |