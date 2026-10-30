# C1ApiAppV2AppUserOwnersV2SetResponse

## Example Usage

```typescript
import { C1ApiAppV2AppUserOwnersV2SetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppUserOwnersV2SetResponse = {
  contentType: "<value>",
  statusCode: 604171,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `setAppUserOwnersV2Response`                                                                  | [shared.SetAppUserOwnersV2Response](../../../sdk/models/shared/setappuserownersv2response.md) | :heavy_minus_sign:                                                                            | SetAppUserOwnersV2Response is the empty response for setting app user owners.                 |