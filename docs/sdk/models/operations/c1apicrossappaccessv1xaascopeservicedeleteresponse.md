# C1ApiCrossAppAccessV1XAAScopeServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAScopeServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAScopeServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 636445,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `xaaScopeServiceDeleteResponse`                                                                     | [shared.XAAScopeServiceDeleteResponse](../../../sdk/models/shared/xaascopeservicedeleteresponse.md) | :heavy_minus_sign:                                                                                  | XAAScopeServiceDeleteResponse confirms deletion.                                                    |