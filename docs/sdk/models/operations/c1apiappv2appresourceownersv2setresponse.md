# C1ApiAppV2AppResourceOwnersV2SetResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2SetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2SetResponse = {
  contentType: "<value>",
  statusCode: 570470,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `setAppResourceOwnersV2Response`                                                                      | [shared.SetAppResourceOwnersV2Response](../../../sdk/models/shared/setappresourceownersv2response.md) | :heavy_minus_sign:                                                                                    | SetAppResourceOwnersV2Response is the empty response for setting app resource owners.                 |