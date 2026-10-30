# C1ApiUserV2UserOwnersV2SetResponse

## Example Usage

```typescript
import { C1ApiUserV2UserOwnersV2SetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV2UserOwnersV2SetResponse = {
  contentType: "<value>",
  statusCode: 756497,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `setUserOwnersV2Response`                                                               | [shared.SetUserOwnersV2Response](../../../sdk/models/shared/setuserownersv2response.md) | :heavy_minus_sign:                                                                      | SetUserOwnersV2Response is the empty response for setting user owners.                  |