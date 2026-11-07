# C1ApiEdgeV1EdgeServiceCheckVaultAccessResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceCheckVaultAccessResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceCheckVaultAccessResponse = {
  contentType: "<value>",
  statusCode: 194866,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `edgeServiceCheckVaultAccessResponse`                                                                           | [shared.EdgeServiceCheckVaultAccessResponse](../../../sdk/models/shared/edgeservicecheckvaultaccessresponse.md) | :heavy_minus_sign:                                                                                              | EdgeServiceCheckVaultAccessResponse reports metadata, never secret values.                                      |