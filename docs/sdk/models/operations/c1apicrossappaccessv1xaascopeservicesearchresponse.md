# C1ApiCrossAppAccessV1XAAScopeServiceSearchResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAScopeServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAScopeServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 678509,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `xaaScopeServiceSearchResponse`                                                                     | [shared.XAAScopeServiceSearchResponse](../../../sdk/models/shared/xaascopeservicesearchresponse.md) | :heavy_minus_sign:                                                                                  | XAAScopeServiceSearchResponse returns matching scopes.                                              |