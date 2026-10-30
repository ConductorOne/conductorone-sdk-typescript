# C1ApiEdgeV1EdgeServiceListEgressTopAgentsResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListEgressTopAgentsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListEgressTopAgentsResponse = {
  contentType: "<value>",
  statusCode: 125719,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `edgeServiceListEgressTopAgentsResponse`                                                                              | [shared.EdgeServiceListEgressTopAgentsResponse](../../../sdk/models/shared/edgeservicelistegresstopagentsresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |