# C1ApiAppV2AppResourceOwnersV2SearchUserOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2SearchUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2SearchUserOwnersResponse = {
  contentType: "<value>",
  statusCode: 640883,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `searchAppResourceUserOwnersResponse`                                                                           | [shared.SearchAppResourceUserOwnersResponse](../../../sdk/models/shared/searchappresourceuserownersresponse.md) | :heavy_minus_sign:                                                                                              | SearchAppResourceUserOwnersResponse is the response for searching user ownership sources on a resource.         |