# C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAClientAudienceMappingServiceDeleteResponse =
  {
    contentType: "<value>",
    statusCode: 274222,
  };
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `xaaClientAudienceMappingServiceDeleteResponse`                                                                                     | [shared.XAAClientAudienceMappingServiceDeleteResponse](../../../sdk/models/shared/xaaclientaudiencemappingservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                                  | XAAClientAudienceMappingServiceDeleteResponse confirms deletion.                                                                    |