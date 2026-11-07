# C1ApiEdgeV1EdgeIntegrationServiceGetResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeIntegrationServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeIntegrationServiceGetResponse = {
  contentType: "<value>",
  statusCode: 120953,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `edgeIntegrationServiceGetResponse`                                                                         | [shared.EdgeIntegrationServiceGetResponse](../../../sdk/models/shared/edgeintegrationservicegetresponse.md) | :heavy_minus_sign:                                                                                          | EdgeIntegrationServiceGetResponse contains integration metadata.                                            |