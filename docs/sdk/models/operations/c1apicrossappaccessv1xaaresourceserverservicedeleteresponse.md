# C1ApiCrossAppAccessV1XAAResourceServerServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAResourceServerServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAResourceServerServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 615359,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `xaaResourceServerServiceDeleteResponse`                                                                              | [shared.XAAResourceServerServiceDeleteResponse](../../../sdk/models/shared/xaaresourceserverservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                    | XAAResourceServerServiceDeleteResponse confirms deletion.                                                             |