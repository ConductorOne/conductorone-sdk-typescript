# C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceSearchResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceSearchResponse =
  {
    contentType: "<value>",
    statusCode: 522780,
  };
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `xaaClientAudienceMappingServiceSearchResponse`                                                                                     | [shared.XAAClientAudienceMappingServiceSearchResponse](../../../sdk/models/shared/xaaclientaudiencemappingservicesearchresponse.md) | :heavy_minus_sign:                                                                                                                  | XAAClientAudienceMappingServiceSearchResponse returns matching mappings.                                                            |