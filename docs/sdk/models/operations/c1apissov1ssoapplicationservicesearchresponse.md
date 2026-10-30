# C1ApiSsov1SSOApplicationServiceSearchResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOApplicationServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOApplicationServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 458424,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `ssoApplicationServiceSearchResponse`                                                                           | [shared.SSOApplicationServiceSearchResponse](../../../sdk/models/shared/ssoapplicationservicesearchresponse.md) | :heavy_minus_sign:                                                                                              | SSOApplicationServiceSearchResponse returns matching SSO applications.                                          |