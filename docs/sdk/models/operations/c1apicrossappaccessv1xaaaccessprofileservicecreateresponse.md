# C1ApiCrossAppAccessV1XAAAccessProfileServiceCreateResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAAccessProfileServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 916106,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `xaaAccessProfileServiceCreateResponse`                                                                             | [shared.XAAAccessProfileServiceCreateResponse](../../../sdk/models/shared/xaaaccessprofileservicecreateresponse.md) | :heavy_minus_sign:                                                                                                  | XAAAccessProfileServiceCreateResponse returns the created access profile.                                           |