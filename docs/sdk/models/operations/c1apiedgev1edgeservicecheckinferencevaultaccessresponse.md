# C1ApiEdgeV1EdgeServiceCheckInferenceVaultAccessResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceCheckInferenceVaultAccessResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceCheckInferenceVaultAccessResponse = {
  contentType: "<value>",
  statusCode: 949964,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `edgeServiceCheckInferenceVaultAccessResponse`                                                                                    | [shared.EdgeServiceCheckInferenceVaultAccessResponse](../../../sdk/models/shared/edgeservicecheckinferencevaultaccessresponse.md) | :heavy_minus_sign:                                                                                                                | EdgeServiceCheckInferenceVaultAccessResponse reports the same Vault grant<br/> check Update runs before saving an inference route. |