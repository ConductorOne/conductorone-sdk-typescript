# C1ApiEdgeV1EdgeServiceListEdgesRollupResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListEdgesRollupResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListEdgesRollupResponse = {
  contentType: "<value>",
  statusCode: 77201,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `edgeServiceListEdgesRollupResponse`                                                                          | [shared.EdgeServiceListEdgesRollupResponse](../../../sdk/models/shared/edgeservicelistedgesrollupresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |