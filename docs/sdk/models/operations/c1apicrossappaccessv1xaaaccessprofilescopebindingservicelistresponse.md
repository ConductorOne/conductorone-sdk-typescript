# C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceListResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceListResponse = {
    contentType: "<value>",
    statusCode: 313000,
  };
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `xaaAccessProfileScopeBindingServiceListResponse`                                                                                       | [shared.XAAAccessProfileScopeBindingServiceListResponse](../../../sdk/models/shared/xaaaccessprofilescopebindingservicelistresponse.md) | :heavy_minus_sign:                                                                                                                      | XAAAccessProfileScopeBindingServiceListResponse returns scope bindings.                                                                 |