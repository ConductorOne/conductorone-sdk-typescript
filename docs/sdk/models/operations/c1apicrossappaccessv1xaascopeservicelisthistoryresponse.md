# C1ApiCrossAppAccessV1XAAScopeServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAScopeServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAScopeServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 250133,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `xaaScopeServiceListHistoryResponse`                                                                          | [shared.XAAScopeServiceListHistoryResponse](../../../sdk/models/shared/xaascopeservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                            | XAAScopeServiceListHistoryResponse returns scope history entries.                                             |