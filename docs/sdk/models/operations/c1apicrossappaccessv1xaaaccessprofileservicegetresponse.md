# C1ApiCrossAppAccessV1XAAAccessProfileServiceGetResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAAccessProfileServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAAccessProfileServiceGetResponse = {
  contentType: "<value>",
  statusCode: 607958,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `xaaAccessProfileServiceGetResponse`                                                                          | [shared.XAAAccessProfileServiceGetResponse](../../../sdk/models/shared/xaaaccessprofileservicegetresponse.md) | :heavy_minus_sign:                                                                                            | XAAAccessProfileServiceGetResponse returns a single access profile.                                           |