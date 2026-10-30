# C1ApiSsov1SSOApplicationServiceDeleteClientResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOApplicationServiceDeleteClientResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOApplicationServiceDeleteClientResponse = {
  contentType: "<value>",
  statusCode: 966862,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `ssoApplicationServiceDeleteClientResponse`                                                                                 | [shared.SSOApplicationServiceDeleteClientResponse](../../../sdk/models/shared/ssoapplicationservicedeleteclientresponse.md) | :heavy_minus_sign:                                                                                                          | SSOApplicationServiceDeleteClientResponse confirms deletion.                                                                |