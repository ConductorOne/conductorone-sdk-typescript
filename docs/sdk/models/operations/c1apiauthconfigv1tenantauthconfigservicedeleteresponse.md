# C1ApiAuthConfigV1TenantAuthConfigServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiAuthConfigV1TenantAuthConfigServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthConfigV1TenantAuthConfigServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 117774,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `tenantAuthConfigServiceDeleteResponse`                                                                             | [shared.TenantAuthConfigServiceDeleteResponse](../../../sdk/models/shared/tenantauthconfigservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |