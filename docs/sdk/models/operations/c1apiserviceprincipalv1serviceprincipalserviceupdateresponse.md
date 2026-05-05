# C1ApiServicePrincipalV1ServicePrincipalServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiServicePrincipalV1ServicePrincipalServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiServicePrincipalV1ServicePrincipalServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 453923,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `servicePrincipalServiceUpdateResponse`                                                                             | [shared.ServicePrincipalServiceUpdateResponse](../../../sdk/models/shared/serviceprincipalserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |