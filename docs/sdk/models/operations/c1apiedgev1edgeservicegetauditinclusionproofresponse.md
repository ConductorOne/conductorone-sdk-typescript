# C1ApiEdgeV1EdgeServiceGetAuditInclusionProofResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceGetAuditInclusionProofResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceGetAuditInclusionProofResponse = {
  contentType: "<value>",
  statusCode: 952684,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `edgeServiceGetAuditInclusionProofResponse`                                                                                 | [shared.EdgeServiceGetAuditInclusionProofResponse](../../../sdk/models/shared/edgeservicegetauditinclusionproofresponse.md) | :heavy_minus_sign:                                                                                                          | Successful response                                                                                                         |