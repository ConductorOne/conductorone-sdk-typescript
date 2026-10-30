# C1ApiCrossAppAccessV1XAAResourceServerServiceResyncScopesResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAResourceServerServiceResyncScopesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAResourceServerServiceResyncScopesResponse = {
  contentType: "<value>",
  statusCode: 947003,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `xaaResourceServerServiceResyncScopesResponse`                                                                                    | [shared.XAAResourceServerServiceResyncScopesResponse](../../../sdk/models/shared/xaaresourceserverserviceresyncscopesresponse.md) | :heavy_minus_sign:                                                                                                                | Successful response                                                                                                               |