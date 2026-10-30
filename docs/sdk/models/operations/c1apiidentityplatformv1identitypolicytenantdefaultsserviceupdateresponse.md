# C1ApiIdentityPlatformV1IdentityPolicyTenantDefaultsServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiIdentityPlatformV1IdentityPolicyTenantDefaultsServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiIdentityPlatformV1IdentityPolicyTenantDefaultsServiceUpdateResponse = {
    contentType: "<value>",
    statusCode: 17707,
  };
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response content type for this operation                                                                                               |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response status code for this operation                                                                                                |
| `rawResponse`                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                       | :heavy_check_mark:                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                     |
| `identityPolicyTenantDefaultsServiceUpdateResponse`                                                                                         | [shared.IdentityPolicyTenantDefaultsServiceUpdateResponse](../../../sdk/models/shared/identitypolicytenantdefaultsserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                                          | Successful response                                                                                                                         |