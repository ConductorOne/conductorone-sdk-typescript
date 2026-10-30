# C1ApiAppV2AppUserOwnersV2SearchUserOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppUserOwnersV2SearchUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppUserOwnersV2SearchUserOwnersResponse = {
  contentType: "<value>",
  statusCode: 357054,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `searchAppUserUserOwnersResponse`                                                                       | [shared.SearchAppUserUserOwnersResponse](../../../sdk/models/shared/searchappuseruserownersresponse.md) | :heavy_minus_sign:                                                                                      | SearchAppUserUserOwnersResponse is the response for searching user ownership sources on an app user.    |