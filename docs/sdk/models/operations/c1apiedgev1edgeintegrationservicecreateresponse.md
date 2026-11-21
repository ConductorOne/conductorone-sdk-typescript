# C1ApiEdgeV1EdgeIntegrationServiceCreateResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeIntegrationServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeIntegrationServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 800485,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `edgeIntegrationServiceCreateResponse`                                                                            | [shared.EdgeIntegrationServiceCreateResponse](../../../sdk/models/shared/edgeintegrationservicecreateresponse.md) | :heavy_minus_sign:                                                                                                | EdgeIntegrationServiceCreateResponse contains the created integration.                                            |