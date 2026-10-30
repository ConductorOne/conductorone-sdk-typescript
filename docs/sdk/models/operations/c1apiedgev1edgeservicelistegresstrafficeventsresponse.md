# C1ApiEdgeV1EdgeServiceListEgressTrafficEventsResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListEgressTrafficEventsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListEgressTrafficEventsResponse = {
  contentType: "<value>",
  statusCode: 233957,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                         | :heavy_check_mark:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
| `edgeServiceListEgressTrafficEventsResponse`                                                                                  | [shared.EdgeServiceListEgressTrafficEventsResponse](../../../sdk/models/shared/edgeservicelistegresstrafficeventsresponse.md) | :heavy_minus_sign:                                                                                                            | Successful response                                                                                                           |