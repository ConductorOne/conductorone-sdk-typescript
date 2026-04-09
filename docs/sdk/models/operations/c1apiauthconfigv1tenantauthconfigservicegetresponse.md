# C1ApiAuthConfigV1TenantAuthConfigServiceGetResponse

## Example Usage

```typescript
import { C1ApiAuthConfigV1TenantAuthConfigServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthConfigV1TenantAuthConfigServiceGetResponse = {
  contentType: "<value>",
  statusCode: 364023,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `tenantAuthConfigServiceGetResponse`                                                                          | [shared.TenantAuthConfigServiceGetResponse](../../../sdk/models/shared/tenantauthconfigservicegetresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |