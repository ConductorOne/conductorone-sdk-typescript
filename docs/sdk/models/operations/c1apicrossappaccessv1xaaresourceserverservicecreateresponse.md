# C1ApiCrossAppAccessV1XAAResourceServerServiceCreateResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAResourceServerServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAResourceServerServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 249453,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `xaaResourceServerServiceCreateResponse`                                                                              | [shared.XAAResourceServerServiceCreateResponse](../../../sdk/models/shared/xaaresourceserverservicecreateresponse.md) | :heavy_minus_sign:                                                                                                    | XAAResourceServerServiceCreateResponse returns the registered resource server.                                        |