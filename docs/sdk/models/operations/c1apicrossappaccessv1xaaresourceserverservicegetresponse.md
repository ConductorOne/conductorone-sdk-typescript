# C1ApiCrossAppAccessV1XAAResourceServerServiceGetResponse

## Example Usage

```typescript
import { C1ApiCrossAppAccessV1XAAResourceServerServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCrossAppAccessV1XAAResourceServerServiceGetResponse = {
  contentType: "<value>",
  statusCode: 90337,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `xaaResourceServerServiceGetResponse`                                                                           | [shared.XAAResourceServerServiceGetResponse](../../../sdk/models/shared/xaaresourceserverservicegetresponse.md) | :heavy_minus_sign:                                                                                              | XAAResourceServerServiceGetResponse returns a single resource server.                                           |