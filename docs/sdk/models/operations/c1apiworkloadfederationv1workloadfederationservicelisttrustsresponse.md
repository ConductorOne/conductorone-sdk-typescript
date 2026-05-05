# C1ApiWorkloadFederationV1WorkloadFederationServiceListTrustsResponse

## Example Usage

```typescript
import { C1ApiWorkloadFederationV1WorkloadFederationServiceListTrustsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiWorkloadFederationV1WorkloadFederationServiceListTrustsResponse = {
    contentType: "<value>",
    statusCode: 540890,
  };
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `workloadFederationServiceListTrustsResponse`                                                                                   | [shared.WorkloadFederationServiceListTrustsResponse](../../../sdk/models/shared/workloadfederationservicelisttrustsresponse.md) | :heavy_minus_sign:                                                                                                              | Successful response                                                                                                             |