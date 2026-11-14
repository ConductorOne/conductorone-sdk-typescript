# C1ApiEdgeV1EdgeIntegrationServiceListResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeIntegrationServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeIntegrationServiceListResponse = {
  contentType: "<value>",
  statusCode: 86838,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `edgeIntegrationServiceListResponse`                                                                          | [shared.EdgeIntegrationServiceListResponse](../../../sdk/models/shared/edgeintegrationservicelistresponse.md) | :heavy_minus_sign:                                                                                            | EdgeIntegrationServiceListResponse is one page of integration metadata.                                       |