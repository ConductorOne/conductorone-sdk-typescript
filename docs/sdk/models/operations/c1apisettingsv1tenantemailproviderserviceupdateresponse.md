# C1ApiSettingsV1TenantEmailProviderServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiSettingsV1TenantEmailProviderServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1TenantEmailProviderServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 427679,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `updateTenantEmailProviderResponse`                                                                         | [shared.UpdateTenantEmailProviderResponse](../../../sdk/models/shared/updatetenantemailproviderresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |