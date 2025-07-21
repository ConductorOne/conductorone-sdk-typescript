# C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse

## Example Usage

```typescript
import { C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse = {
  contentType: "<value>",
  statusCode: 820119,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP response content type for this operation                                                            |
| `statusCode`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | HTTP response status code for this operation                                                             |
| `rawResponse`                                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                    | :heavy_check_mark:                                                                                       | Raw HTTP response; suitable for custom response parsing                                                  |
| `searchAppResourceTypesResponse`                                                                         | [shared.SearchAppResourceTypesResponse](../../../sdk/models/shared/searchappresourcetypesresponse.md)    | :heavy_minus_sign:                                                                                       | The SearchAppResourceTypesResponse message contains a list of results and a nextPageToken if applicable. |