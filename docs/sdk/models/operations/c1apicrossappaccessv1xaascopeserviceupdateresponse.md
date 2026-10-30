# C1ApiCrossAppAccessV1XAAScopeServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAScopeServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAScopeServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 196578,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `xaaScopeServiceUpdateResponse`                                                                     | [shared.XAAScopeServiceUpdateResponse](../../../sdk/models/shared/xaascopeserviceupdateresponse.md) | :heavy_minus_sign:                                                                                  | XAAScopeServiceUpdateResponse returns the updated scope.                                            |