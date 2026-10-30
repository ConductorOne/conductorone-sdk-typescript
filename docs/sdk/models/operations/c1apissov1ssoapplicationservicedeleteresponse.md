# C1ApiSsov1SSOApplicationServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiSsov1SSOApplicationServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSsov1SSOApplicationServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 268628,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `ssoApplicationServiceDeleteResponse`                                                                           | [shared.SSOApplicationServiceDeleteResponse](../../../sdk/models/shared/ssoapplicationservicedeleteresponse.md) | :heavy_minus_sign:                                                                                              | SSOApplicationServiceDeleteResponse confirms deletion.                                                          |