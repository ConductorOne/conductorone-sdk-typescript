# C1ApiServicePrincipalV1ServicePrincipalServiceAddBindingResponse

## Example Usage

```typescript
import { C1ApiServicePrincipalV1ServicePrincipalServiceAddBindingResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiServicePrincipalV1ServicePrincipalServiceAddBindingResponse = {
  contentType: "<value>",
  statusCode: 543063,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `servicePrincipalServiceAddBindingResponse`                                                                                 | [shared.ServicePrincipalServiceAddBindingResponse](../../../sdk/models/shared/serviceprincipalserviceaddbindingresponse.md) | :heavy_minus_sign:                                                                                                          | Successful response                                                                                                         |