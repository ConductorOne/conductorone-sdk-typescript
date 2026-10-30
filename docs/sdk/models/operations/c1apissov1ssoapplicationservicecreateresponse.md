# C1ApiSsov1SSOApplicationServiceCreateResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOApplicationServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOApplicationServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 66513,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `ssoApplicationServiceCreateResponse`                                                                           | [shared.SSOApplicationServiceCreateResponse](../../../sdk/models/shared/ssoapplicationservicecreateresponse.md) | :heavy_minus_sign:                                                                                              | SSOApplicationServiceCreateResponse returns the created SSO application.                                        |