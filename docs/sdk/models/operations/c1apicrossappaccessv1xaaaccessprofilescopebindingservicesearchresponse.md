# C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceSearchResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceSearchResponse = {
    contentType: "<value>",
    statusCode: 625615,
  };
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                               | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response content type for this operation                                                                                               |
| `statusCode`                                                                                                                                | *number*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | HTTP response status code for this operation                                                                                                |
| `rawResponse`                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                       | :heavy_check_mark:                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                     |
| `xaaAccessProfileScopeBindingServiceSearchResponse`                                                                                         | [shared.XAAAccessProfileScopeBindingServiceSearchResponse](../../../sdk/models/shared/xaaaccessprofilescopebindingservicesearchresponse.md) | :heavy_minus_sign:                                                                                                                          | XAAAccessProfileScopeBindingServiceSearchResponse returns matching bindings.                                                                |