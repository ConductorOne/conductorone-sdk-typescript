# C1ApiWorkloadFederationV1WorkloadFederationServiceGetProviderResponse

## Example Usage

```typescript
import { C1ApiWorkloadFederationV1WorkloadFederationServiceGetProviderResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiWorkloadFederationV1WorkloadFederationServiceGetProviderResponse = {
    contentType: "<value>",
    statusCode: 718115,
  };
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `workloadFederationServiceGetProviderResponse`                                                                                    | [shared.WorkloadFederationServiceGetProviderResponse](../../../sdk/models/shared/workloadfederationservicegetproviderresponse.md) | :heavy_minus_sign:                                                                                                                | Successful response                                                                                                               |