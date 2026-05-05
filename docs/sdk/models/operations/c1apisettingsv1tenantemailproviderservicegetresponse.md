# C1ApiSettingsV1TenantEmailProviderServiceGetResponse

## Example Usage

```typescript
import { C1ApiSettingsV1TenantEmailProviderServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1TenantEmailProviderServiceGetResponse = {
  contentType: "<value>",
  statusCode: 24799,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `getTenantEmailProviderResponse`                                                                      | [shared.GetTenantEmailProviderResponse](../../../sdk/models/shared/gettenantemailproviderresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |