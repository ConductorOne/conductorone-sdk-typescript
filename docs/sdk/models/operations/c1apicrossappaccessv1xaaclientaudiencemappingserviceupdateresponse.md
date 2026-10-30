# C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceUpdateResponse =
  {
    contentType: "<value>",
    statusCode: 301535,
  };
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `xaaClientAudienceMappingServiceUpdateResponse`                                                                                     | [shared.XAAClientAudienceMappingServiceUpdateResponse](../../../sdk/models/shared/xaaclientaudiencemappingserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                                  | XAAClientAudienceMappingServiceUpdateResponse returns the updated mapping.                                                          |