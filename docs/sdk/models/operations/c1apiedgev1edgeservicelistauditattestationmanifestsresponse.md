# C1ApiEdgeV1EdgeServiceListAuditAttestationManifestsResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListAuditAttestationManifestsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListAuditAttestationManifestsResponse = {
  contentType: "<value>",
  statusCode: 295421,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response content type for this operation                                                                                             |
| `statusCode`                                                                                                                              | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response status code for this operation                                                                                              |
| `rawResponse`                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                     | :heavy_check_mark:                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                   |
| `edgeServiceListAuditAttestationManifestsResponse`                                                                                        | [shared.EdgeServiceListAuditAttestationManifestsResponse](../../../sdk/models/shared/edgeservicelistauditattestationmanifestsresponse.md) | :heavy_minus_sign:                                                                                                                        | Successful response                                                                                                                       |