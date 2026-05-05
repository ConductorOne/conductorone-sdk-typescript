# C1ApiWorkloadFederationV1WorkloadFederationServiceCreateTrustResponse

## Example Usage

```typescript
import { C1ApiWorkloadFederationV1WorkloadFederationServiceCreateTrustResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiWorkloadFederationV1WorkloadFederationServiceCreateTrustResponse = {
    contentType: "<value>",
    statusCode: 920243,
  };
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `workloadFederationServiceCreateTrustResponse`                                                                                    | [shared.WorkloadFederationServiceCreateTrustResponse](../../../sdk/models/shared/workloadfederationservicecreatetrustresponse.md) | :heavy_minus_sign:                                                                                                                | Successful response                                                                                                               |