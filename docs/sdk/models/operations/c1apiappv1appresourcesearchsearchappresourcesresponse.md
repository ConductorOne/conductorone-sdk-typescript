# C1ApiAppV1AppResourceSearchSearchAppResourcesResponse

## Example Usage

```typescript
import { C1ApiAppV1AppResourceSearchSearchAppResourcesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceSearchSearchAppResourcesResponse = {
  contentType: "<value>",
  statusCode: 437505,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `searchAppResourcesResponse`                                                                  | [shared.SearchAppResourcesResponse](../../../sdk/models/shared/searchappresourcesresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |