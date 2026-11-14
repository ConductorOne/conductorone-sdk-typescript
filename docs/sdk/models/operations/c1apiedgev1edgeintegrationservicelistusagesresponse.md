# C1ApiEdgeV1EdgeIntegrationServiceListUsagesResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeIntegrationServiceListUsagesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeIntegrationServiceListUsagesResponse = {
  contentType: "<value>",
  statusCode: 398368,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `edgeIntegrationServiceListUsagesResponse`                                                                                | [shared.EdgeIntegrationServiceListUsagesResponse](../../../sdk/models/shared/edgeintegrationservicelistusagesresponse.md) | :heavy_minus_sign:                                                                                                        | EdgeIntegrationServiceListUsagesResponse contains matching Edges in a candidate page.                                     |