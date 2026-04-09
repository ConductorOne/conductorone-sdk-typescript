# C1ApiWorkloadFederationV1WorkloadFederationServiceCreateProviderResponse

## Example Usage

```typescript
import { C1ApiWorkloadFederationV1WorkloadFederationServiceCreateProviderResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiWorkloadFederationV1WorkloadFederationServiceCreateProviderResponse = {
    contentType: "<value>",
    statusCode: 369333,
  };
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `workloadFederationServiceCreateProviderResponse`                                                                                       | [shared.WorkloadFederationServiceCreateProviderResponse](../../../sdk/models/shared/workloadfederationservicecreateproviderresponse.md) | :heavy_minus_sign:                                                                                                                      | Successful response                                                                                                                     |