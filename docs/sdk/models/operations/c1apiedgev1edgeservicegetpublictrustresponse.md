# C1ApiEdgeV1EdgeServiceGetPublicTrustResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceGetPublicTrustResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceGetPublicTrustResponse = {
  contentType: "<value>",
  statusCode: 578461,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `edgeServiceGetPublicTrustResponse`                                                                         | [shared.EdgeServiceGetPublicTrustResponse](../../../sdk/models/shared/edgeservicegetpublictrustresponse.md) | :heavy_minus_sign:                                                                                          | EdgeServiceGetPublicTrustResponse contains public metadata and no signing material.                         |