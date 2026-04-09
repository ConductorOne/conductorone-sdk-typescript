# C1ApiAuthConfigV1TenantAuthConfigServiceListResponse

## Example Usage

```typescript
import { C1ApiAuthConfigV1TenantAuthConfigServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthConfigV1TenantAuthConfigServiceListResponse = {
  contentType: "<value>",
  statusCode: 765957,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `tenantAuthConfigServiceListResponse`                                                                           | [shared.TenantAuthConfigServiceListResponse](../../../sdk/models/shared/tenantauthconfigservicelistresponse.md) | :heavy_minus_sign:                                                                                              | Successful response                                                                                             |