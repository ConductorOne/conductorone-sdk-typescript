# C1ApiServicePrincipalV1ServicePrincipalServiceCreateCredentialResponse

## Example Usage

```typescript
import { C1ApiServicePrincipalV1ServicePrincipalServiceCreateCredentialResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiServicePrincipalV1ServicePrincipalServiceCreateCredentialResponse = {
    contentType: "<value>",
    statusCode: 765035,
  };
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `servicePrincipalServiceCreateCredentialResponse`                                                                                       | [shared.ServicePrincipalServiceCreateCredentialResponse](../../../sdk/models/shared/serviceprincipalservicecreatecredentialresponse.md) | :heavy_minus_sign:                                                                                                                      | Successful response                                                                                                                     |