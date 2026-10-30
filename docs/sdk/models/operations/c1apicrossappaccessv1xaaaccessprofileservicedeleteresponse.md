# C1ApiCrossAppAccessV1XAAAccessProfileServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAAccessProfileServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 979256,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `xaaAccessProfileServiceDeleteResponse`                                                                             | [shared.XAAAccessProfileServiceDeleteResponse](../../../sdk/models/shared/xaaaccessprofileservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                  | XAAAccessProfileServiceDeleteResponse confirms deletion.                                                            |