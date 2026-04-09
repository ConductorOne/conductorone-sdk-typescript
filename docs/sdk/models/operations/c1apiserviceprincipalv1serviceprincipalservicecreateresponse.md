# C1ApiServicePrincipalV1ServicePrincipalServiceCreateResponse

## Example Usage

```typescript
import { C1ApiServicePrincipalV1ServicePrincipalServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiServicePrincipalV1ServicePrincipalServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 241247,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `servicePrincipalServiceCreateResponse`                                                                             | [shared.ServicePrincipalServiceCreateResponse](../../../sdk/models/shared/serviceprincipalservicecreateresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |