# C1ApiEdgeV1EdgeServiceListInferenceCatalogResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListInferenceCatalogResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListInferenceCatalogResponse = {
  contentType: "<value>",
  statusCode: 756907,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `edgeServiceListInferenceCatalogResponse`                                                                               | [shared.EdgeServiceListInferenceCatalogResponse](../../../sdk/models/shared/edgeservicelistinferencecatalogresponse.md) | :heavy_minus_sign:                                                                                                      | EdgeServiceListInferenceCatalogResponse contains every catalog entry.                                                   |