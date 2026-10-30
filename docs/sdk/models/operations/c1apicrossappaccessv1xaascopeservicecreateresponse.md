# C1ApiCrossAppAccessV1XAAScopeServiceCreateResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAScopeServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAScopeServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 772278,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `xaaScopeServiceCreateResponse`                                                                     | [shared.XAAScopeServiceCreateResponse](../../../sdk/models/shared/xaascopeservicecreateresponse.md) | :heavy_minus_sign:                                                                                  | XAAScopeServiceCreateResponse returns the created scope.                                            |