# C1ApiEdgeV1EdgeServiceGetInferenceUsageSummaryRollupResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceGetInferenceUsageSummaryRollupResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceGetInferenceUsageSummaryRollupResponse = {
  contentType: "<value>",
  statusCode: 193670,
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response content type for this operation                                                                                               |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response status code for this operation                                                                                                |
| `rawResponse`                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                       | :heavy_check_mark:                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                     |
| `edgeServiceGetInferenceUsageSummaryRollupResponse`                                                                                         | [shared.EdgeServiceGetInferenceUsageSummaryRollupResponse](../../../sdk/models/shared/edgeservicegetinferenceusagesummaryrollupresponse.md) | :heavy_minus_sign:                                                                                                                          | Successful response                                                                                                                         |