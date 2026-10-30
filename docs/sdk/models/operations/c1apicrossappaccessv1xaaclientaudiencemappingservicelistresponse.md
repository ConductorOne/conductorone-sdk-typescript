# C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceListResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceListResponse = {
  contentType: "<value>",
  statusCode: 397992,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `xaaClientAudienceMappingServiceListResponse`                                                                                   | [shared.XAAClientAudienceMappingServiceListResponse](../../../sdk/models/shared/xaaclientaudiencemappingservicelistresponse.md) | :heavy_minus_sign:                                                                                                              | XAAClientAudienceMappingServiceListResponse returns a page of mappings.                                                         |