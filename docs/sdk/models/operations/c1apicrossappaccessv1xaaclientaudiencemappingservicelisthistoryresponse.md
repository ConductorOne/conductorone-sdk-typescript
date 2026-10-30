# C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceListHistoryResponse = {
    contentType: "<value>",
    statusCode: 4757,
  };
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                         | :heavy_check_mark:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
| `xaaClientAudienceMappingServiceListHistoryResponse`                                                                                          | [shared.XAAClientAudienceMappingServiceListHistoryResponse](../../../sdk/models/shared/xaaclientaudiencemappingservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                                                            | XAAClientAudienceMappingServiceListHistoryResponse returns client audience<br/> mapping history entries.                                      |