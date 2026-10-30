# C1ApiEdgeV1EdgeServiceGetEgressTrafficSummaryRollupResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceGetEgressTrafficSummaryRollupResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceGetEgressTrafficSummaryRollupResponse = {
  contentType: "<value>",
  statusCode: 893522,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                             | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response content type for this operation                                                                                             |
| `statusCode`                                                                                                                              | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | HTTP response status code for this operation                                                                                              |
| `rawResponse`                                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                     | :heavy_check_mark:                                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                                   |
| `edgeServiceGetEgressTrafficSummaryRollupResponse`                                                                                        | [shared.EdgeServiceGetEgressTrafficSummaryRollupResponse](../../../sdk/models/shared/edgeservicegetegresstrafficsummaryrollupresponse.md) | :heavy_minus_sign:                                                                                                                        | Successful response                                                                                                                       |