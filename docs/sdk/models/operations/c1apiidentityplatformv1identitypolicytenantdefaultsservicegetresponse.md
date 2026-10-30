# C1ApiIdentityPlatformV1IdentityPolicyTenantDefaultsServiceGetResponse

## Example Usage

```typescript
import { C1ApiIdentityPlatformV1IdentityPolicyTenantDefaultsServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiIdentityPlatformV1IdentityPolicyTenantDefaultsServiceGetResponse = {
    contentType: "<value>",
    statusCode: 959457,
  };
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `identityPolicyTenantDefaultsServiceGetResponse`                                                                                      | [shared.IdentityPolicyTenantDefaultsServiceGetResponse](../../../sdk/models/shared/identitypolicytenantdefaultsservicegetresponse.md) | :heavy_minus_sign:                                                                                                                    | Successful response                                                                                                                   |