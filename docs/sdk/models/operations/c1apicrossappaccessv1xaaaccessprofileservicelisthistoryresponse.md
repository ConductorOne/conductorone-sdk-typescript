# C1ApiCrossAppAccessV1XAAAccessProfileServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAAccessProfileServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 72294,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                         | :heavy_check_mark:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
| `xaaAccessProfileServiceListHistoryResponse`                                                                                  | [shared.XAAAccessProfileServiceListHistoryResponse](../../../sdk/models/shared/xaaaccessprofileservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                            | XAAAccessProfileServiceListHistoryResponse returns access profile history<br/> entries.                                       |