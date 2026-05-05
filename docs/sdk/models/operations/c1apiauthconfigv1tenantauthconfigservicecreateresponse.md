# C1ApiAuthConfigV1TenantAuthConfigServiceCreateResponse

## Example Usage

```typescript
import { C1ApiAuthConfigV1TenantAuthConfigServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthConfigV1TenantAuthConfigServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 872636,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `tenantAuthConfigServiceCreateResponse`                                                                             | [shared.TenantAuthConfigServiceCreateResponse](../../../sdk/models/shared/tenantauthconfigservicecreateresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |