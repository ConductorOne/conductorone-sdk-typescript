# C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementUserBindingServiceSearchPastGrantsResponse =
  {
    contentType: "<value>",
    statusCode: 101,
    rawResponse: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
  };
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response content type for this operation                                                          |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response status code for this operation                                                           |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_check_mark:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |
| `searchPastGrantsResponse`                                                                             | [shared.SearchPastGrantsResponse](../../../sdk/models/shared/searchpastgrantsresponse.md)              | :heavy_minus_sign:                                                                                     | The SearchPastGrantsResponse message contains a list of past grants and a nextPageToken if applicable. |