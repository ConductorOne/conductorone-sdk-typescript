# C1ApiEdgeV1EdgeServiceListEgressTopAgentsRollupResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListEgressTopAgentsRollupResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListEgressTopAgentsRollupResponse = {
  contentType: "<value>",
  statusCode: 818512,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `edgeServiceListEgressTopAgentsRollupResponse`                                                                                    | [shared.EdgeServiceListEgressTopAgentsRollupResponse](../../../sdk/models/shared/edgeservicelistegresstopagentsrollupresponse.md) | :heavy_minus_sign:                                                                                                                | Successful response                                                                                                               |