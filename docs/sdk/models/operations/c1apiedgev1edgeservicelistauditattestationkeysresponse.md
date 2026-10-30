# C1ApiEdgeV1EdgeServiceListAuditAttestationKeysResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListAuditAttestationKeysResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListAuditAttestationKeysResponse = {
  contentType: "<value>",
  statusCode: 980611,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `edgeServiceListAuditAttestationKeysResponse`                                                                                   | [shared.EdgeServiceListAuditAttestationKeysResponse](../../../sdk/models/shared/edgeservicelistauditattestationkeysresponse.md) | :heavy_minus_sign:                                                                                                              | Successful response                                                                                                             |