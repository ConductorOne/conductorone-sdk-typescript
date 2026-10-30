# C1ApiCrossAppAccessV1XAAAccessProfileServiceGetByAppEntitlementIdResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileServiceGetByAppEntitlementIdResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCrossAppAccessV1XAAAccessProfileServiceGetByAppEntitlementIdResponse = {
    contentType: "<value>",
    statusCode: 389423,
  };
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                     | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response content type for this operation                                                                                                     |
| `statusCode`                                                                                                                                      | *number*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response status code for this operation                                                                                                      |
| `rawResponse`                                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                             | :heavy_check_mark:                                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                                           |
| `xaaAccessProfileServiceGetByAppEntitlementIdResponse`                                                                                            | [shared.XAAAccessProfileServiceGetByAppEntitlementIdResponse](../../../sdk/models/shared/xaaaccessprofileservicegetbyappentitlementidresponse.md) | :heavy_minus_sign:                                                                                                                                | XAAAccessProfileServiceGetByAppEntitlementIdResponse returns the matched<br/> profile.                                                            |