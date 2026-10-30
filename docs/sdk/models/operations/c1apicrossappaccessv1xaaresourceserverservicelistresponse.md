# C1ApiCrossAppAccessV1XAAResourceServerServiceListResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAResourceServerServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAResourceServerServiceListResponse = {
  contentType: "<value>",
  statusCode: 494975,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `xaaResourceServerServiceListResponse`                                                                            | [shared.XAAResourceServerServiceListResponse](../../../sdk/models/shared/xaaresourceserverservicelistresponse.md) | :heavy_minus_sign:                                                                                                | XAAResourceServerServiceListResponse returns a page of resource servers.                                          |