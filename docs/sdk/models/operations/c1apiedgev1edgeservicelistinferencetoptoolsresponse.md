# C1ApiEdgeV1EdgeServiceListInferenceTopToolsResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListInferenceTopToolsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListInferenceTopToolsResponse = {
  contentType: "<value>",
  statusCode: 38026,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `edgeServiceListInferenceTopToolsResponse`                                                                                | [shared.EdgeServiceListInferenceTopToolsResponse](../../../sdk/models/shared/edgeservicelistinferencetoptoolsresponse.md) | :heavy_minus_sign:                                                                                                        | Successful response                                                                                                       |