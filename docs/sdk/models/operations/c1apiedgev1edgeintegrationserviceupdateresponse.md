# C1ApiEdgeV1EdgeIntegrationServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeIntegrationServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeIntegrationServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 67808,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `edgeIntegrationServiceUpdateResponse`                                                                            | [shared.EdgeIntegrationServiceUpdateResponse](../../../sdk/models/shared/edgeintegrationserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                | EdgeIntegrationServiceUpdateResponse contains the updated integration.                                            |