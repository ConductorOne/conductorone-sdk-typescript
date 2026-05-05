# C1ApiAuthConfigV1TenantAuthConfigServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAuthConfigV1TenantAuthConfigServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthConfigV1TenantAuthConfigServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 36192,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `tenantAuthConfigServiceUpdateResponse`                                                                             | [shared.TenantAuthConfigServiceUpdateResponse](../../../sdk/models/shared/tenantauthconfigserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |