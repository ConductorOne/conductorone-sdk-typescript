# C1ApiWorkloadFederationV1WorkloadFederationServiceListProvidersResponse

## Example Usage

```typescript
import { C1ApiWorkloadFederationV1WorkloadFederationServiceListProvidersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiWorkloadFederationV1WorkloadFederationServiceListProvidersResponse = {
    contentType: "<value>",
    statusCode: 819914,
  };
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `workloadFederationServiceListProvidersResponse`                                                                                      | [shared.WorkloadFederationServiceListProvidersResponse](../../../sdk/models/shared/workloadfederationservicelistprovidersresponse.md) | :heavy_minus_sign:                                                                                                                    | Successful response                                                                                                                   |