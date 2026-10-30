# C1ApiSsov1SSOApplicationServiceListClientsResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOApplicationServiceListClientsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOApplicationServiceListClientsResponse = {
  contentType: "<value>",
  statusCode: 887826,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `ssoApplicationServiceListClientsResponse`                                                                                | [shared.SSOApplicationServiceListClientsResponse](../../../sdk/models/shared/ssoapplicationservicelistclientsresponse.md) | :heavy_minus_sign:                                                                                                        | SSOApplicationServiceListClientsResponse contains a page of App-owned OAuth<br/> clients.                                 |