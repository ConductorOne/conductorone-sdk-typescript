# C1ApiEdgeV1EdgeIntegrationServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeIntegrationServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeIntegrationServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 530497,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `edgeIntegrationServiceDeleteResponse`                                                                            | [shared.EdgeIntegrationServiceDeleteResponse](../../../sdk/models/shared/edgeintegrationservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                | EdgeIntegrationServiceDeleteResponse confirms deletion of the integration only.                                   |