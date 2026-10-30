# C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceCreateBindingsResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceCreateBindingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceCreateBindingsResponse =
    {
      contentType: "<value>",
      statusCode: 340530,
    };
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response content type for this operation                                                                                               |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response status code for this operation                                                                                                |
| `rawResponse`                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                       | :heavy_check_mark:                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                     |
| `xaaAccessProfileScopeBindingServiceCreateResponse`                                                                                         | [shared.XAAAccessProfileScopeBindingServiceCreateResponse](../../../sdk/models/shared/xaaaccessprofilescopebindingservicecreateresponse.md) | :heavy_minus_sign:                                                                                                                          | XAAAccessProfileScopeBindingServiceCreateResponse returns created bindings.                                                                 |