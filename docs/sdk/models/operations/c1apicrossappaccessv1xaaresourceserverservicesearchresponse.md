# C1ApiCrossAppAccessV1XAAResourceServerServiceSearchResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAResourceServerServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAResourceServerServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 637751,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `xaaResourceServerServiceSearchResponse`                                                                              | [shared.XAAResourceServerServiceSearchResponse](../../../sdk/models/shared/xaaresourceserverservicesearchresponse.md) | :heavy_minus_sign:                                                                                                    | XAAResourceServerServiceSearchResponse returns matching resource servers.                                             |