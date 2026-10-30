# C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceDeleteBindingsResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceDeleteBindingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceDeleteBindingsResponse =
    {
      contentType: "<value>",
      statusCode: 575180,
    };
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response content type for this operation                                                                                               |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response status code for this operation                                                                                                |
| `rawResponse`                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                       | :heavy_check_mark:                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                     |
| `xaaAccessProfileScopeBindingServiceDeleteResponse`                                                                                         | [shared.XAAAccessProfileScopeBindingServiceDeleteResponse](../../../sdk/models/shared/xaaaccessprofilescopebindingservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                                          | XAAAccessProfileScopeBindingServiceDeleteResponse confirms deletion.                                                                        |