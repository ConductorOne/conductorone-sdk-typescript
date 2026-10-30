# C1ApiCrossAppAccessV1XAAScopeServiceGetResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAScopeServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAScopeServiceGetResponse = {
  contentType: "<value>",
  statusCode: 449755,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `xaaScopeServiceGetResponse`                                                                  | [shared.XAAScopeServiceGetResponse](../../../sdk/models/shared/xaascopeservicegetresponse.md) | :heavy_minus_sign:                                                                            | XAAScopeServiceGetResponse returns a single scope.                                            |